---
layout: post
---


# Setting up Graphite and Grafana on Ubuntu 14.04 on Nginx

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

```
sudo apt-get install nginx
```

# Installing Graphite

## Graphite Ubuntu Package Installation
Update your `apt`
```
sudo apt-get update
```
Install graphite packages
```
sudo apt-get install graphite-web graphite-carbon
```

**NOTE**: During the installation, you will be asked if during uninstallation of Graphite you also like to remove its files. Please select **NO** because anyways you can delete them manually. The files are kept in `/var/lib/graphite/whisper`.

*This ends the Graphite installation process, all remains is its configuration*

## Install and Configure PostgreSQL Database
Graphite internally uses carbon and whisper database library for storing data. But the web application is a Django application which needs some data store for its own purpose. The default data store configured is SQLite3 database files. But this is not a full fledged database system hence we will use PostgreSQL.

Script to install database and libs used by Graphite to communicate with PostgreSQL
```
sudo apt-get install postgresql libpq-dev python-psycopg2
```

Once our PostgreSQL is installed we will create a user and a database

Login to PostgreSQL console
```
$ sudo -u postgres psql
```

Create a user `graphite` which will be used by Django to operate on our database.
```
$ CREATE USER graphite WITH PASSWORD 'mypassword';
```
Please make sure you select a secure password for your user.

Create a database `graphite` and give our new user `graphite` ownership of it.
```
$ CREATE DATABASE graphite WITH OWNER graphite;
```

Please verify is database is created or not by connection to it
```
$ \c graphite
```

If you can successfully connect to the database `graphite` then you are good to go to next step.

Exit from the PostgreSQL console
```
$ \q
```

*This ends the PostgreSQL database configuration for Graphite*

## Configure Graphite Web Application
Now, as we have our PostgreSQL database and user ready to go we can now move to configuring the web application.

Open the Graphite web app configuration file:
```
sudo vim /etc/graphite/local_settings.py
```

Uncomment the `SECRET_KEY` and give a nice random value to it
```
SECRET_KEY = 'MY NICE RANDOM SALT'
```

Uncomment the `TIMEZONE` and set it to some appropriate value. I have set it to UTC, but you may choose any one you like
```
TIME_ZONE = 'UTC'
```

Uncomment the `USE_REMOTE_USER_AUTHENTICATION` and set tot to `True` so that remote user will be authenticated first before making any DB changes
```
USE_REMOTE_USER_AUTHENTICATION = True
```

Change the database dictionary definition:
```
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
```
Save and close this file.


## Sync the Database
Once your web application is configured, it is time to sync your database, create a super user and create the correct structure.

```
sudo graphite-manage syncdb
```

**NOTE**: It will ask you to create a superuser. Make sure you remember the credentials with which you create one. This user will be used to connect to Graphite application and be admin of it. Being admin you will change interface of graphite and create graphs.


## Configure Carbon
Carbon is the Graphite storage backend.

Open the configuration file:
```
sudo vim /etc/default/graphite-carbon
```

Change value of `CARBON_CACHE_ENABLED` to `true`
```
CARBON_CACHE_ENABLED=true
```
This enables the carbon service to start at boot

Save and close the file.

Next, open the Carbon configuration file:
```
sudo vim /etc/carbon/carbon.conf
```
Set `ENABLE_LOGROTATION` to `True` to turn on log rotation
```
ENABLE_LOGROTATION = True
```
Save and close the file

## Configuring Storage Schemas
Now, open the storage schema file. This tells Carbon how long to store values and how detailed these values should be:
```
sudo vim /etc/carbon/storage-schemas.conf
```

Inside you will find entries like
```
[carbon]
pattern = ^carbon\.
retentions = 60:90d
```
which implies:
pattern that matches regular expression `^carbon\.` should retain the data with retention policy `60:90d` which is

* how often a metric is recorded: 60 seconds
* length of time to store those values: 90 days

For detail information on retention policy visit [here](http://graphite.readthedocs.org/en/latest/config-carbon.html#storage-schemas-conf)
 
Now we need to add our own entry. Let's take an example `test` i.e. we need to monitor data points and our data point entries will start with string `test`.

**NOTE**: This entry should be added before the default entry mentioned at the bottom of the file

```
[test]
pattern = ^test\.
retentions = 10s:10m,1m:1h
```

This will match any metrics beginning with "test.". It will store the data it collects two times, in varying detail.

The first archive definition `(1s:10m)` will create a data point every ten  seconds. It will store the values for only ten minutes.

The second archive `(1m:1h)` will create a data point every one minute. It will gather all of the data from the past minute (six points, since the previous archive creates a point every ten seconds) and aggregate it to create the point. By default, it does this by averaging the points, but we can adjust this later. It stores the data at this level of detail for one hour.
This example is taken from this [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-graphite-on-an-ubuntu-14-04-server)

Save and close the file.

## Storage Aggregation Methods
This aggregation methods are used when we try to fetch data that is less detailed (In our previous example we saw 6 data points were aggregated to create 1 data point). Understanding aggregation is important is we want accurate metrics.

Default aggregation method is taking out mean of values which implies that all retention policies other than most detailed one will create data points by taking mean of all data points it received.

We can specify the aggregation configuration in file called `storage-aggregation.conf` . A sample file is already provided by Carbon, so you can simply copy-paste it for default behaviour.
```
sudo cp /usr/share/doc/graphite-carbon/examples/storage-aggregation.conf.example /etc/carbon/storage-aggregation.conf
```

You can view [official documentation](http://graphite.readthedocs.org/en/latest/config-carbon.html#storage-aggregation-conf) to understand it better.

Save and close the file.

Start the carbon service
```
sudo service carbon-cache start
```

## Setup Nginx for graphite

Let us first create all files and links
```
sudo touch /etc/nginx/sites-enabled/graphite
sudo ln -s /etc/nginx/sites-enabled/graphite /etc/nginx/sites-available/graphite
```

Now we are ready for configuring Nginx server for Graphite

