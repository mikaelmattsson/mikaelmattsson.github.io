---
layout: post
title: Speedup Yosemite Wi-Fi
color: '#2ECC71'
image: yosemite-wireless.jpg
excerpt: Since the release of Yosemite users have experienced slow wireless connections. This is because of new a feature in Yosemite and iOS 8 called Apple Wireless Direct Link (AWDL). Like everything else in this UNIX madness, we can turn it off!
redirect_from: /2015/01/speedup-yosemite-wifi/
---

Since the release of Yosemite users have experienced slow wireless connections. This is because of new a feature in Yosemite and iOS 8 called Apple Wireless Direct Link (AWDL). Like everything else in this UNIX madness, we can turn it off!

[<img src="/images/yosemite-wireless.jpg" alt="{{title}}">](/images/yosemite-wireless.jpg)

This new technology is used for AirDrop, AirPlay, and other connections between your Apple devices. If you don't feel comfortable in the command line interface or doesn't know if this will create new problems for you, please be careful while reading along. 

Nevertheless, this trick almost doubled the speed on my Macbook. Just sayin.

## The Trick
Open up the Terminal application, located under `/Applications/Utilities`. Run the command below to turn AWDL off.

{% highlight bash %}

sudo ifconfig awdl0 down

{% endhighlight %}

Note that if you restart your computer this will go back to default and you will have to turn it off again.

If you later on realize that you are in need of using any of the services you just turned off. You can easily replace `down` with `up` and then its turned on again.

{% highlight bash %}

sudo ifconfig awdl0 up

{% endhighlight %}

## Fact
This works perfectly on *Macbook Pro Retina Mid 2014*. Though, we did try this on an *Macbook Pro Mid 2011* and it didn't change anything. This probably means AWDL is not supported by older Macs. No worries, if its not supported, you won't be affected.

Does this work for you? Please let me know what hardware you're running the comments below or on Twitter. Then I can update the article with better fact.

**Edit January 28**: As of *Yosemite 10.10.2* the wireless connections seems to be a bit better. Though, turning it off still increases Wi-Fi speed.
