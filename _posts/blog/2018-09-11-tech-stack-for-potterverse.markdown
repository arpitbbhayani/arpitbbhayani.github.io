---
title: Tech Stack for Potterverse
img:    https://arpitbhayani.me/static/images/potterverse/tech-stack-potterverse.png
gif: https://media.giphy.com/media/10aADbYxnJlc9q/giphy.gif
layout: post
comments: true
tags:
 - potterverse
categories: blog
seo:
 tags:
  - harry potter
  - potterverse
  - voldemort
  - tech stack
  - elasticsearch
  - vuejs
  - google app engine
  - python
  - jupyter
  - golang
 description: Once the idea of Potterverse was conceived and list of features was ready, the first hurdle I faced was of deciding on a nice Tech Stack for building it. For me deciding a tech stack is never easy, the engineering dominant side of mine always strives for something that is challenging and at the same time extremely suited for the use case.
---

Once the idea of [Potterverse](http://potterverse.arpitbhayani.me/) was conceived
and list of features was ready, the first hurdle I faced was of deciding on a nice
Tech Stack for building it :grin:. For me deciding a tech stack is never easy, the
engineering dominant side of mine always strives for something that is challenging
and at the same time extremely suited for the use case.

But here the things were different, I was going for the "fastest" way
to MVP approach and hence some decisions I took while deciding on tech stack were
not something that I would have normally picked. 

### Should I build my own search engine?
With a habit of going with the most difficult engineering problem solve, the first
thought was interesting but was way out of my league :sweat_smile:
I thought of creating my own search engine that is very very "fast" and "suitable"
for my "use case". I know this sounds totally ridiculous but this is how my brain is
wired :smile:. I was definitely overestimating my abilities.

If I would have built my search engine, like I did [here](https://github.com/arpitbbhayani/wikise),
from scratch then instead of focusing on Information Retrieval and Data Mining part
of the problem statement, my concerns would have shifted drastically and hence
I somehow controlled my urge and decided to go with [Elasticsearch](https://www.elastic.co/)
and first take my raw idea to MVP stage and release the first version it.

### The Frontend Framework
Vanilla Javascript and basic server side is what I prefer while writing any web based
application; but looking how the frontend world has changed in past few years, it was
customary for me and a high time as well that I also go for a framework that utilizes
highly optimal client side rendering.

Following were my requirements

 - Framework should enable client side rendering
 - Writing a `Hello, World` should be simple and understandable
 - Not so steep learning curve
 - Support should be good so that I could reuse what others have already built

[React](https://reactjs.org/) was the most popular choice but I always had a hard time
with it and hence I went for the second best [Vue.JS](https://vuejs.org/). Vue seemed
ideal for my use case, it is easy to learn, simple, elegant and has lot of community
support.

### Backend for REST endpoints
Golang, Python and NodeJS were the languages in contention and Golang is what I chose
to be my primary backend for REST APIs. The reason I chose Golang are

 - It is fast and efficient
 - It is cheap to maintain when hosted
 - It has very high developer productivity

Python is undoubtedly my goto language but when it comes to performance, nothing
can beat Golang. Apart from performance, I was inclined towards one more advantage
of it, which is, it is really cheap to host Golang based code because of its
low memory footprint and portable binaries.

### Hosting
Running services and applications in a raw VM hosted in cloud is my thing. I have
always preferred going for a basic EC2 instance for hosting my service. But this time
I did not want to do all that and wanted something that would handle everything, ex:
infrastructure, scaling, etc, for me.

Serverless was my first choice but again, the amount of restrictions that we need to
cater while working with serverless is too much to bear at this stage. Other big
requirement was that the service should be able to scale down to 0 instances because
the traffic I expect will not be streamlined or continuous instead it will mostly be
burst.

So for this use case I chose [Google App Engine](https://cloud.google.com/appengine/)
which gives me all the flexibility in the world. I would recommend it for very small
use cases like Potterverse but not for giant applications. Since Google App Engine
is what I decided on, I had to use all services provided by Google Cloud. Following
are the services of Google that I am using right now

 - Google App Engine (that serves primary REST endpoints)
 - 1 Google compute instance (that runs Elasticsearch)

### Python and Jupyter are always there
I have a private Git based repository that holds several Jupyter notebooks that
contains all NLP and IR related code, Elasticsearch based utilities and some
algorithms that are implemented and still in experimental phase.


## Conclusion
In conclusion, I have nothing to say :smile:
