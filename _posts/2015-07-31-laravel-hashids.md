---
layout: post
title: Laravel Hashids
color: '#5957ff'
image: laravel-hashids.png
excerpt: Hashids is a small open-source library that generates short, unique, non-sequential ids from numbers. Today we're going to look at the Laravel integration.
---

[Hashids](http://hashids.org/) is a small open-source library that generates short, unique, non-sequential ids from numbers. Today we're going to look at the [Laravel integration](https://github.com/vinkla/hashids).

[<img src="/images/laravel-hashids.png" alt="{{post.title}}">](/images/laravel-hashids.png)

[Hashids](http://hashids.org/) helps you convert numbers like 347 into strings like “yr8”, or array of numbers like [27, 986] into “3kTMd”.

You can also decode those ids back. This is useful in bundling several parameters into one or simply using them as short UIDs.

[Laravel Hashids](https://github.com/vinkla/hashids) is a wrapper to the [Hashids](http://hashids.org/) project. It makes it easy to integrate the Hashids library in any Laravel or Lumen application.

## How Does It Work?

First follow the [installation guide](https://github.com/vinkla/hashids#installation) on GitHub. Then [publish](https://github.com/vinkla/hashids#configuration) the configuration file to your config directory. Read more on [GitHub](https://github.com/vinkla/hashids#readme).

Here you can see an example of just how simple this package is to use. After you enter your alphabet, salt and length in the config file, it will just work:

{% highlight php startinline %}
// Encoding integers.
Hashids::encode(4815162342);

// Decoding strings.
Hashids::decode('1LLb3b4ck');

// Dependency injection example.
$hashidsManager->encode(911);
{% endhighlight %}

We're done here - how easy was that, it just works! 
