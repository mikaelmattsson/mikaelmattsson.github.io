---
layout: post
title: OpenEmu Let's-a go!
color: '#a09df3'
excerpt: Remember those childhood mornings, you had woken up extra early just to play on your Super Nintendo before breakfast. No? Well, me neither! 
---

Remember those childhood mornings, you had woken up extra early just to play on your Super Nintendo before breakfast. No? Well, me neither! I'm almost as old as the Super Nintendo. My first memories playing video games is on the Nintendo 64.

Nowadays, as a grown up, I still find myself having a nerdgasm playing these old games. For some time now I've been able to play these awesome games on my Macbook Pro with [OpenEmu](http://openemu.org/).

[<img src="/images/openemu-application-window.jpg" alt="{{title}}">](/images/openemu-application-window.jpg)

OpenEmu is an open source project bringing video game emulation to OSX as a first class citizen. Emulators like the Super Nintendo, Nintendo 64 and Sony PlayStation are all playable in OpenEmu.

> For the first time, the 'It just works' philosophy now extends to open source video game emulation on the Mac. With OpenEmu, it is extremely easy to add, browse, organize and with a compatible game pad, play those favorite games you already own - *[OpenEmu Website](http://openemu.org/)*

Adding games to [OpenEmu](http://openemu.org/) is a real treat. You drag and drop [ROM](http://en.wikipedia.org/wiki/ROM_image) files into OpenEmu to add and run them. Whenever a new game is added, OpenEmu will automatically download and display its original box art.

Playing with third party controllers like an Xbox 360 controller or an PlayStation 3 controller works like a charm. OpenEmu detects the controller automatically and has its setup ready to go.

## Installation
The easiest way is to visit [OpenEmu's Website](http://openemu.org/). There you can download both a stable and experimental release. Install it like any other Mac application.

[Homebrew-cask](https://github.com/phinze/homebrew-cask) is another option for those who like to administer their Mac applications distributed as binaries.

{% highlight bash %}

# Stable Release
$ brew cask install openemu

# Experimental Release
$ brew cask install openemu-experimental

{% endhighlight %}

Since OpenEmu is a open source project, it is develop by its users. Therefore anyone in the community can take part and make it better. If you're curious, visit the [GitHub Repository](https://github.com/OpenEmu/OpenEmu). Submit a pull request!

Keep in mind that OpenEmu just recently released its first stable version. There will be a lot more to come!

So long, King Bows-ee! Thank you so much for a-playing-a my game!

#### SOURCES
- [OpenEmu/OpenEmu](https://github.com/OpenEmu/OpenEmu) - GitHub Repository
- [OpenEmu - Multiple Video Game System](http://openemu.org/) - OpenEmu's Website
- [Play classic video games in style with OpenEmu](http://www.theverge.com/2013/12/26/5245864/openemu-mac-elegant-open-source-video-game-emulator) - The Verge
