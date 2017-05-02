---
title: FlaskSR - Easy way to stream HTTP for Flask
img: https://cloud.githubusercontent.com/assets/4745789/19354772/86697410-9185-11e6-83d0-a0c26f29e3d5.gif
layout: post
comments: true
tags:
 - stream
 - flask
 - python
categories: techie
seo:
 tags:
  - flask
  - python
  - flask extension
  - http streaming
  - fast render
 description: Every fucking website wants to improve Time for First Paint. So I chose to do it for websites driven by Flask Framework. FlaskSR is the python package, a flask extension that you can use to minimize it.
---

I attended [JSFoo conference in Bangalore on September 15 2016](https://www.facebook.com/events/655680127921534/) and the only takeaway from that conference was that every single website was just optimizing one thing **"Time for First Paint"**. For people who do not know what it is, here is a gist

> The time at which the first character/image/element renders on the webpage is the Time For First Paint.

I don't know how good of a metric it is but since world is doing it I thought I will also give it a try. The conference was javascript based so they showed how they achieved it using NodeJS but since I heavily use [Python Flask](http://flask.pocoo.org/) web framework for application development, I wanted to achieve that for Flask. So I started playing around it. I was going through the official documentation of Flask and found out you can `yield` the responses. Voila! here is what I wanted.

Now I was excited and I started writing a trivial yet important [Proof Of Concept](https://en.wikipedia.org/wiki/Proof_of_concept). The prototype I wrote worked just fine and gave me a big performance boost. So I wrote a bigger application using combination of `yield` and `Response` objects. As I was writing it I realized that the code I wrote was messy and it needed a structure. What better to give structure to your code than using `Class`. I went with it and created version 0.1 of FlaskSR in a day.

The code is open sourced and can be found out on [Github](https://github.com/arpitbbhayani/flasksr). Feel free to give [PRs](https://github.com/arpitbbhayani/flasksr/pulls) and raise [Issues](https://github.com/arpitbbhayani/flasksr/issues).

### Extra Reads:
1. [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp)
2. [New Perspective on Performance](http://www.keynote.com/resources/articles/new-perspective-performance)
