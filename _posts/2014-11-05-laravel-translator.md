---
layout: post
title: Laravel Translator
color: '#5d9cec'
image: laravel-translator.png
excerpt: A while ago I started to build a multilingual application. One of the client's criteria was that they wanted to be able to edit translations and adding new languages during the life cycle of the app. Building a database-leveled multilingual back-end was new for me. This is the story of how and why the Translator package came to life.
redirect_from: /2014/11/laravel-translator/
---

A while ago I started to build a multilingual application. One of the client's criteria was that they wanted to be able to edit translations and adding new languages during the life cycle of the app. Building a database-leveled multilingual back-end was new for me. This is the story of how and why the [Translator](https://github.com/vinkla/translator) package came to life.

[<img src="/images/laravel-translator.png" alt="{{post.title}}">](/images/laravel-translator.png)

## Research
I prefer building APIs with [Laravel Framework](http://laravel.com). Though, Laravel doesn't support database-leveled localization attributes on [Eloquent](http://laravel.com/docs/eloquent) models. Which is very important since translations shouldn't be dependent on static values specified in configuration files within the application core.

We researched how other developers had tackled creating a multilingual database structure. Some added an extra columns on their tables for every language. Example below.

{% highlight text %}
title
title_sv
title_de
title_en
{% endhighlight %}

This seemed like bad practice and it definitely isn't a good approach for a scalable application.

Others created an extra table for each locale Keeping a copy of each row synced between the tables with different translations. 

{% highlight text %}
articles
articles_en
articles_sv
{% endhighlight %}

This didn't either seem like the way to go.

We also looked at other frameworks like [Craft](https://buildwithcraft.com). Though, nothing seemed flexible enough to cover our needs. We stuck with Laravel.

<!--
That's when we found the [laravel-translatable](https://github.com/dimsav/laravel-translatable) package. Which at first seemed great. The package adds a translation table on each translatable base table e.g. `articles` has its translatable attributes within `article_translations`.  

What we disliked with this package was that the translations tables was dependent on static localization keys from the configuration files. It saves the locale key in a separate column on each translated row. The database has no way of knowing which locales that are still in use and which are removed.
-->

## Solution
We decided to create a [package of our own](https://github.com/vinkla/translator). Translating individual attributes on Eloquent models that keeps track of a localizations. <br>All within the database.


### Criteria
- Locales (languages) should exist within the database.
- Translations should be saved and synced with the locales.
- Integrate well with Laravel's Eloquent models.

First we created our locales table containing just a few columns.

{% highlight php startinline %}
Schema::create('locales', function(Blueprint $table)
{
    $table->increments('id');
    $table->string('language', 2);
    $table->timestamps();
});
{% endhighlight %}

Then our base table.

{% highlight php startinline %}
Schema::create('articles', function(Blueprint $table)
{
    $table->increments('id');
    $table->string('thumbnail');
    $table->timestamps();
});
{% endhighlight %}

Last but not least, our translations model.

{% highlight php startinline %}
Schema::create('article_translations', function(Blueprint $table)
{
    $table->increments('id');

    $table->string('title');
    $table->string('content');

    $table->integer('article_id')->unsigned();
    $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');

    $table->integer('locale_id')->unsigned();
    $table->foreign('locale_id')->references('id')->on('locales')->onDelete('cascade');

    $table->unique(['article_id', 'locale_id']);

    $table->timestamps();
});
{% endhighlight %}

The translated attributes `title` and `content` are saved in our translations table. Static attributes for an article which doesn't need to be translated, like in this example `thumbnail`, are saved within the base table.

In the end, after creating a [trait](https://github.com/vinkla/translator/blob/master/src/Vinkla/Translator/TranslatorTrait.php), which extends Laravel's Eloquent magic, we were able to fetch translations like in the example below.

{% highlight php startinline %}
{% raw %}
<img src="{{ $article->thumbnail }}">
<h1>{{ $article->title }}</h1>
<p>{{ $article->content }}</p>
{% endraw %}
{% endhighlight %}

The example above fetches the translated attributes by the current set locale in Laravel. This is configurable within the package configuration.

{% highlight php startinline %}
$locale = App::getLocale();
{% endhighlight %}

If you're still reading and want to give this a try, please check out the [Translator repository on GitHub](https://github.com/vinkla/translator). There you can find documentation and a installation guide. 

The [Translator](https://github.com/vinkla/translator) package is available on [Packagist](https://packagist.org/packages/vinkla/translator) and comes with a [service provider](http://laravel.com/docs/ioc) for easy integration.

Thanks for reading!
