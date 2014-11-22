---
layout: post
title: Working With NPM Globally
color: '#f27a86'
image: node-packaged-modules.png
excerpt: Tools like Node Packaged Modules, also known as npm and npmjs, has become a big part of my everyday coding. Either if you're working with command line tools like Grunt and Gulp or building Node.js apps, you always find your self having a great time. Everything just works.
---

Tools like [Node Packaged Modules](https://npmjs.org/), also known as **npm** and **npmjs**, has become a big part of my everyday coding. Either if you're working with command line tools like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/) or building [Node.js](http://nodejs.org/) apps, you always find your self having a great time. Everything just works.

[<img src="/images/node-packaged-modules.png" alt="{{title}}">](/images/node-packaged-modules.png)

In this post I've listed useful commands when working with globally installed packages. I'll also go over changing npm's registry to get faster downloads. Bring it on.

## Commands

Below I've written down commands I often use while working with npm. Many of them can be used within local projects. Remove `-g` option  to trigger the commands in the directory your currently in.

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

Visit [npmrc](https://npmjs.org/doc/files/npmrc.html) and [npm-config](https://npmjs.org/doc/config.html) to learn more.

#### SOURCES
- [NPM's GitHub Account](https://github.com/npm)
- [Manage the npm configuration files](https://npmjs.org/doc/files/npmrc.html)
- [European npm mirror](http://npmjs.eu/)
- [The Node Packaged Modules config files](https://npmjs.org/doc/files/npmrc.html)
