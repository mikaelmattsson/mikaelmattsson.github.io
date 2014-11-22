---
layout: post
title: Dynamic Wildcards and Laravel Homestead
color: '#f4d03f'
image: wildcards-homestead.png
excerpt: This is the excerpt.
---

{% highlight bash %}
$ brew update
$ brew install dnsmasq
{% endhighlight %}

{% highlight bash %}
$ cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf
{% endhighlight %}

Change ip to what use in Homestead.yaml.
{% highlight bash %}
address=/greatapp.dev/192.168.10.10
{% endhighlight %}

{% highlight bash %}
$ sudo cp -fv /usr/local/opt/dnsmasq/*.plist /Library/LaunchDaemons
{% endhighlight %}

{% highlight bash %}
$ sudo launchctl load /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
{% endhighlight %}

{% highlight bash %}
127.0.0.1
8.8.8.8
8.8.4.4
{% endhighlight %}

[<img src="/images/wildcards-dns.png" alt="{{title}}">](/images/wildcards-dns.png)

{% highlight bash %}
$ sudo kill $(ps aux | grep '[d]nsmasq' | awk '{print $2}')
{% endhighlight %}

Thats it. You're good to go. Happy hacking!

