---
title: How to copy, move files to and from Vagrant machine using scp
layout: post
comments: true
tags:
 - vagrant
categories: techie
seo:
 tags:
  - vagrant
  - scp
  - vagrant scp
  - copy
 description: Let's see how we can copy, move files to and from Vagrant machine using scp
---

Sometime back when I required to move some files to and from my virtual machine managed by Vagrant, I found that normal SSH/SCP did not work. After searching the internet for sometime I found few solutions, non of which worked like a charm. After trying few things here and there I found a foolproof way to scp files in and out of vagrant machine.

For `scp` , you will need to run the usual scp command but you will need to pass in an extra argument `-P` which is the SSH the port to connect to on the remote host.

{% highlight bash %}
scp -P 2222 -r vagrant@127.0.0.1:/home/vagrant/site . <path-in-host-machine>
{% endhighlight %}

By default the virtual machine spun up by vagrant will use `2222` as SSH port but to find the port value you can run following command

{% highlight bash %}
vagrant ssh-config
{% endhighlight %}

Hope this helps :-)
