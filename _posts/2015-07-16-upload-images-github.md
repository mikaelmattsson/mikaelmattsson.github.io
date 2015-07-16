---
layout: post
title: Upload Images to GitHub's Cloud Service
color: '#f2c400'
image: marty-mcfly-github.jpg
excerpt: Sometimes I see developers committing screenshots to their GitHub repositories. This takes up unnecessary space and makes the repository messy. There is a better solution, using GitHub's own user cloud service.
---

Sometimes I see developers committing screenshots to their GitHub repositories. This takes up unnecessary space and makes the repository messy. There is a better solution, using GitHub's own user cloud service.

Instead of committing the image resource to the repository we'll take advantage of GitHub's own cloud service that is accessible through GitHub issues. This actually is quite simple to do.

First visit any repository on GitHub. Then click your way through to the issues page. It should be the URL of the repository + `/issues` at the end.

Create a new issue by clicking the button New Issue. You'll now see both a title and a description field. Drag and drop any image you want to upload on to the description field. This will start the uploading process. In our example we want to upload our image of Marty McFly.

{% highlight bash %}

![Uploading marty-mcfly.jpg…]()

{% endhighlight %}

Once GitHub is done uploading your image they will add the URL to the description field automagically. Great Scott!

{% highlight bash %}

![marty-mcfly](https://cloud.githubusercontent.com/assets/499192/8718466/e58c679c-2ba4-11e5-8e3c-3f9955b810f7.jpg)

{% endhighlight %}

Now you can copy the URL to the image and use it in README's, issues or pull requests how ever you like. This is heavy.

If you put your mind to it, you can accomplish anything.
