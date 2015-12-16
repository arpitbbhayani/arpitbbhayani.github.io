---
title: Setting up Graphite and Grafana on Ubuntu 14.04 server
img: http://grafana.org/assets/img/docs/nice_dashboard.png
layout: post
comments: true
tags:
 - devops
 - tools-setup
---

Monitor your production systems and application analytics using Graphite and Grafana. This article will help you setup these tools on Ubuntu 14.04 on a Nginx webserver with PostgreSQL as backend.

## What is what

### What is Graphite?
Graphite is an open source software that is used for monitoring any system. The monitored data is the numeric information that represents any performance metric. Graphite also as a renderer which renders this information as graphs.
[Official Documentation](http://graphite.readthedocs.org/en/1.0/overview.html)

### What is Grafana?
Grafana is a tool for visualising time-series data for various application analytics. It is a great tool when used in combination with Graphite. It gives us flexibility of creating dashboards and share them with teams.
[Grafana Official](http://grafana.org/)


### What is Nginx?
NGINX is a very fast Webserver, its faster than most web servers available in the market. The biggest advantage of Nginx is its concurrency (because of asynchronous nature). It can also act as

1. HTTP Cache
2. Reverse Proxy
3. Load Balancer

For more information visit [Nginx Wiki](https://en.wikipedia.org/wiki/Nginx)

# Installing Nginx

{% highlight bash %}
sudo apt-get install nginx
{% endhighlight %}

# Installing Graphite

## Graphite Ubuntu Package Installation

Update your `apt`

{% highlight bash %}
sudo apt-get update
{% endhighlight %}

Install Graphite packages

{% highlight bash %}
sudo apt-get install graphite-web graphite-carbon
{% endhighlight %}

**NOTE**: During the installation, you will be asked if during uninstallation of Graphite you also like to remove its files. Please select **NO** because anyways you can delete them manually. The files are kept in `/var/lib/graphite/whisper`.


## Install and Configure PostgreSQL Database
Graphite internally uses carbon and whisper database library for storing data. But the web application is a Django application which needs some data store for its own purpose. The default data store configured is SQLite3 database files. But this is not a full fledged database system hence we will use PostgreSQL.

Script to install database and libs used by Graphite to communicate with PostgreSQL

{% highlight bash %}
sudo apt-get install postgresql libpq-dev python-psycopg2
{% endhighlight %}

Once our PostgreSQL is installed we will create a user and a database

Login to PostgreSQL console

{% highlight bash %}
$ sudo -u postgres psql
{% endhighlight %}

Create a user `graphite` which will be used by Django to operate on our database.

{% highlight sql %}
$ CREATE USER graphite WITH PASSWORD 'mypassword';
{% endhighlight %}

Please make sure you select a secure password for your user.

Create a database `graphite` and give our new user `graphite` ownership of it.

{% highlight sql %}
$ CREATE DATABASE graphite WITH OWNER graphite;
{% endhighlight %}

Please verify is database is created or not by connection to it

{% highlight sql %}
$ \c graphite
{% endhighlight %}

If you can successfully connect to the database `graphite` then you are good to go to next step.

Exit from the PostgreSQL console

{% highlight sql %}
$ \q
{% endhighlight %}

*This ends the PostgreSQL database configuration for Graphite*

## Configure Graphite Web Application

Now, as we have our PostgreSQL database and user ready to go we can now move to configuring the web application.

Open the Graphite web app configuration file:

{% highlight bash %}
sudo vim /etc/graphite/local_settings.py
{% endhighlight %}

Uncomment the `SECRET_KEY` and give a nice random value to it

{% highlight bash %}
SECRET_KEY = 'MY NICE RANDOM SALT'
{% endhighlight %}

Uncomment the `TIMEZONE` and set it to some appropriate value. I have set it to UTC, but you may choose any one you like

{% highlight bash %}
TIME_ZONE = 'UTC'
{% endhighlight %}

Uncomment the `USE_REMOTE_USER_AUTHENTICATION` and set tot to `True` so that remote user will be authenticated first before making any DB changes

{% highlight bash %}
USE_REMOTE_USER_AUTHENTICATION = True
{% endhighlight %}

Change the database dictionary definition:

{% highlight javascript %}
DATABASES = {
    'default': {
        'NAME': 'graphite',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'USER': 'graphite',
        'PASSWORD': 'mypassword',
        'HOST': '127.0.0.1',
        'PORT': ''
    }
}
{% endhighlight %}

Save and close this file.


## Sync the Database
Once your web application is configured, it is time to sync your database, create a super user and create the correct structure.

{% highlight bash %}
sudo graphite-manage syncdb
{% endhighlight %}

**NOTE**: It will ask you to create a superuser. Make sure you remember the credentials with which you create one. This user will be used to connect to Graphite application and be admin of it. Being admin you will change interface of Graphite and create graphs.


## Configure Carbon
Carbon is the Graphite storage backend.

Open the configuration file:

{% highlight bash %}
sudo vim /etc/default/graphite-carbon
{% endhighlight %}

Change value of `CARBON_CACHE_ENABLED` to `true`

{% highlight bash %}
CARBON_CACHE_ENABLED=true
{% endhighlight %}

This enables the carbon service to start at boot

Save and close the file.

Next, open the Carbon configuration file:

{% highlight bash %}
sudo vim /etc/carbon/carbon.conf
{% endhighlight %}

Set `ENABLE_LOGROTATION` to `True` to turn on log rotation

{% highlight bash %}
ENABLE_LOGROTATION = True
{% endhighlight %}

Save and close the file

## Configuring Storage Schemas
Now, open the storage schema file. This tells Carbon how long to store values and how detailed these values should be:

{% highlight bash %}
sudo vim /etc/carbon/storage-schemas.conf
{% endhighlight %}

Inside you will find entries like

{% highlight bash %}
[carbon]
pattern = ^carbon\.
retentions = 60:90d
{% endhighlight %}

which implies:
pattern that matches regular expression `^carbon\.` should retain the data with retention policy `60:90d` which is

* how often a metric is recorded: 60 seconds
* length of time to store those values: 90 days

For detail information on retention policy visit [here](http://graphite.readthedocs.org/en/latest/config-carbon.html#storage-schemas-conf)

Now we need to add our own entry. Let's take an example `test` i.e. we need to monitor data points and our data point entries will start with string `test`.

**NOTE**: This entry should be added before the default entry mentioned at the bottom of the file

{% highlight bash %}
[test]
pattern = ^test\.
retentions = 10s:10m,1m:1h
{% endhighlight %}

This will match any metrics beginning with "test.". It will store the data it collects two times, in varying detail.

The first archive definition `(1s:10m)` will create a data point every ten  seconds. It will store the values for only ten minutes.

The second archive `(1m:1h)` will create a data point every one minute. It will gather all of the data from the past minute (six points, since the previous archive creates a point every ten seconds) and aggregate it to create the point. By default, it does this by averaging the points, but we can adjust this later. It stores the data at this level of detail for one hour.
This example is taken from this [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-graphite-on-an-ubuntu-14-04-server)

Save and close the file.

## Storage Aggregation Methods
This aggregation methods are used when we try to fetch data that is less detailed (In our previous example we saw 6 data points were aggregated to create 1 data point). Understanding aggregation is important is we want accurate metrics.

Default aggregation method is taking out mean of values which implies that all retention policies other than most detailed one will create data points by taking mean of all data points it received.

We can specify the aggregation configuration in file called `storage-aggregation.conf` . A sample file is already provided by Carbon, so you can simply copy-paste it for default behaviour.

{% highlight bash %}
sudo cp /usr/share/doc/graphite-carbon/examples/storage-aggregation.conf.example /etc/carbon/storage-aggregation.conf
{% endhighlight %}

You can view [official documentation](http://graphite.readthedocs.org/en/latest/config-carbon.html#storage-aggregation-conf) to understand it better.

Save and close the file.

Start the carbon service

{% highlight bash %}
sudo service carbon-cache start
{% endhighlight %}

## Setup Nginx for Graphite

Let us first create all files and links

{% highlight bash %}
sudo touch /etc/nginx/sites-enabled/graphite
sudo ln -s /etc/nginx/sites-enabled/graphite /etc/nginx/sites-available/graphite
{% endhighlight %}

Now we are ready for configuring Nginx server for Graphite
