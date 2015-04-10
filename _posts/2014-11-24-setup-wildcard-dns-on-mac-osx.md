---
layout: post
title: Setup Wildcard DNS on Mac OS X
color: '#f4d03f'
image: wildcards-dns.png
excerpt: Setting up wildcard DNS records in your local development environment doesn't come out of the box with OS X. But don't you worry! With Dnsmasq and Homebrew you can have it up and running within minutes.
redirect_from: 
  - /2014/11/setup-wildcards-dns-on-mac-os-x/
  - /posts/setup-wildcards-dns-on-mac-os-x/
---

Setting up wildcard DNS records in your local development environment doesn't come out of the box with OS X. But don't you worry! With [Dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) and [Homebrew](http://brew.sh) you can have it up and running within minutes.

## Getting Started
Dnsmasq is available within [Homebrew](http://brew.sh). First make sure you have the latest version of `brew` and then install Dnsmasq.

{% highlight bash %}
brew update
brew install dnsmasq
{% endhighlight %}

The next step is to set up your `dnsmasq.conf`. To configure Dnsmasq, copy the example configuration to `/usr/local/etc/dnsmasq.conf` and edit to taste.
{% highlight bash %}
cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf
{% endhighlight %}

Now let's edit `/usr/local/etc/dnsmasq.conf` to include our custom DNS routing rules. Add your rules just below the `double-click.net` example line.

{% highlight bash %}
address=/whatsapp.dev/192.168.10.10
{% endhighlight %} 

I'm using [Laravel Homestead](http://laravel.com/docs/homestead) in example above. The IP should be connected to your local development environment and the address should be the same as specified in your `/etc/hosts` file.

Copy the LaunchDaemons to have Dnsmasq launched on system startup.
{% highlight bash %}
sudo cp -fv /usr/local/opt/dnsmasq/*.plist /Library/LaunchDaemons
{% endhighlight %}

Then to load Dnsmasq now.
{% highlight bash %}
sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
{% endhighlight %}

The next step is to make sure outbound requests check Dnsmasq before any remote DNS servers. Open up System Preferences and visit the network pane. Click on the Advanced button and then select the DNS tab.
[<img src="/images/wildcards-dns.png" alt="{{title}}">](/images/wildcards-dns.png)

Add the following three IP addresses to make sure the requests goes through Dnsmasq before any thing else. The latter two are Google's DNS servers. They should work in most cases. If you ever run into any problems, these addresses can easily be changed.
{% highlight bash %}
127.0.0.1
8.8.8.8
8.8.4.4
{% endhighlight %}

Thats about it. Easy huh! Now you should be able to visit your domain with any subdomain.

Please note that when you edit the `dnsmasq.conf` configuration file you'll have to kill the process and reload it. Use the command below.

{% highlight bash %}
sudo kill $(ps aux | grep '[d]nsmasq' | awk '{print $2}')
{% endhighlight %}

If something went south or just doesn't work. Please [visit the official documentation](http://www.thekelleys.org.uk/dnsmasq/doc.html) or write in the comments below. 

Happy hacking and thanks for reading!

