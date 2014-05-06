---
layout: post
title: Working With NPM Globally
---

Tools like [Node Packaged Modules](https://npmjs.org/), also known as **npm** and **npmjs**, has become a big part of my everyday coding. Either if you're working with command line tools like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/) or building [Node.js](http://nodejs.org/) apps, you always find your self having a great time. Everything just works.

[<img src="/images/node-packaged-modules.png">](/images/node-packaged-modules.png)

In this post I've listed useful commands when working with globally installed packages. I'll also go over changing npm's registry to get faster downloads. Bring it on.

### Basic Commands
Below I've written down commands I often use while working with npm. Many of them can be used within local projects. Remove ```-g``` option  to trigger the commands in the directory your currently in.

{% highlight bash %}
# Install packages globally.
$ npm install -g <package-name>

# Uninstall globally installed packages.
$ npm uninstall -g <package-name>

# List globally installed packages.
$ npm ls -g

# List globally installed packages without dependencies.
$ npm ls -g --depth=0

# Update globally installed packages.
$ npm update -g

# Update npm to the latest version.
$ npm update npm -g
{% endhighlight %}

### European Mirror
For a while npmjs has been rumored to setup an European mirror. A little while back, when I was reading [Twitter]({{site.twitter}}), I came across this tweet.

<blockquote class="twitter-tweet" lang="en"><p>Hi! I&#39;m the <a href="https://twitter.com/npmjs">@npmjs</a> mirror for Europe. <a href="http://t.co/HhDtSCBZvN">http://t.co/HhDtSCBZvN</a> Come check me out!</p>&mdash; npmjs.eu (@npmjseu) <a href="https://twitter.com/npmjseu/statuses/401372664368877568">November 15, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Node Packaged Modules listened to the developers and created an European mirror. This introduces faster download times for Europeans.

Update your configuration by running this in the command line.

{% highlight bash %}
$ npm config set registry http://registry.npmjs.eu
{% endhighlight %}

Even better would be to add this to the npmrc configuration file. Which is located within your home directory ```~/.npmrc```.

{% highlight bash %}
registry = "http://registry.npmjs.eu"
{% endhighlight %}

Visit [npmrc](https://npmjs.org/doc/files/npmrc.html) and [npm-config](https://npmjs.org/doc/config.html) to learn more.

#### SOURCES
- [NPM's GitHub Account](https://github.com/npm) - GitHub
- [Manage the npm configuration files](https://npmjs.org/doc/files/npmrc.html) - npm-config
- [European npm mirror](http://npmjs.eu/) - npmjs.eu
- [The Node Packaged Modules config files](https://npmjs.org/doc/files/npmrc.html) - npmrc
