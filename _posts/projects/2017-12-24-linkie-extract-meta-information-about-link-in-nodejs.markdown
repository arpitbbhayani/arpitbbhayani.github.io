---
title: Linkie - Extract meta information about a link
github_user: arpitbbhayani
repo: linkie
name: Linkie
oneline: Extract meta information about a link
img: https://arpitbhayani.me/static/images/projects/linkie/linkie.jpg
icon: https://arpitbhayani.me/static/images/projects/linkie/linkie-icon.jpg
layout: project_post
comments: true
tags:
 - nodejs
 - metadata
categories: projects
seo:
 tags:
  - link
  - metadata
  - scrap
  - nodejs
  - javascript
 description: Extract meta information about a link
---

`linkie` is a library that extracts meta information about a link.

{% highlight bash %}
npm install linkie --save
{% endhighlight %}

## Example

{% highlight javascript %}
const linkie = require('linkie');

linkie.fetch('https://arpitbhayani.me/techie/rest-the-hard-way-with-netcat.html', {}, (err, metadata) => {
    if (err) { return console.error(err) };
    console.log(metadata);
});
{% endhighlight %}

Output

{% highlight javascript %}
{ url: 'https://arpitbhayani.me/techie/rest-the-hard-way-with-netcat.html',
  status: 200,
  host: 'arpitbhayani.me',
  title: 'HTTP Requests - The Hard Way with Netcat',
  description: 'All our lives we have been hitting REST APIs with libraries and utilities like curl and postman. Its time we do it the hard way with netcat, just for fun!',
  type: 'article',
  keywords:
   [ 'http-requests',
     'netcat',
     'calling rest api with netcat',
     'calling rest api from microcontroller',
     'http request messages' ],
  image: 'https://arpitbhayani.me/static/images/http-requests/http-request-hard-way-with-netcat.jpg' }
{% endhighlight %}

## API

{% highlight javascript %}
fetch(url, [options,] callback)
{% endhighlight %}

Explanation:

 - `url` -> Full URL whose meta information is to be fetched
 - `options` -> Options for the fetching
   - `verifyImage` -> After successfully extracting image about the link, `linkie` can also validate if image really exists or not. By default this option is disabled and hence `linkie` will not verify the image. But if you want to verify the image just pass `{verifyImage: true}` and `linkie` will make another request and verufy if image is valid or not. If image does not exist then metadata will not contain field `image`.
 - `callback(err, metadata)`

## Explain me the output

 - `url` -> The URL that was fetched.
 - `status` -> HTTP Response status code
 - `host` -> Hostname from which response was served
 - `title` -> Title of the page
 - `description` -> Meta description about the link
 - `type` -> type of the page that link points to
 - `keywords` -> Meta keywords about the link
 - `image` -> meta image about the link

## Features

### Video
If a youtube link is given then the metadata will contain field `extra` which
will contain the video id in field `vid` that you can directly use to embed
in Youtube Player.

{% highlight javascript %}
{ url: 'https://www.youtube.com/watch?v=0cMCo7lyQoY',
  status: 200,
  host: 'www.youtube.com',
  title: 'Film Theory: Was SpongeBob ADOPTED?! (SpongeBob SquarePants)',
  description: 'SUBSCRIBE for More Film Theories! ► http://bit.ly/1dI8VBH You\'ll Die Before this Spongebob Meme ► http://bit.ly/2C3IkhT Gravity Falls ISN’T OVER! ►► http://b...',
  type: 'video',
  keywords:
   [ 'spongebob',
     'spongebob squarepants',
     'spongebob episodes',
     'spongebob full episodes',
     'spongebob live',
     'spongebob remix',
     'spongebob songs',
     'spongebob squarepants movie',
     '...' ],
  site: 'youtube',
  extra: { vid: '0cMCo7lyQoY' },
  image: 'https://i.ytimg.com/vi/0cMCo7lyQoY/maxresdefault.jpg' }
{% endhighlight %}

### Meta information and where it fetches from

The meta information about the link contains several fields. There is a
possibility that some information might not be present on the page, hence
`linkie` tries its best to get information. There is fallback on all important
fields. For each of the following fields the list represents the places it
tries to fetch information from.

#### Title

 - OG Title `meta[property='og:title']`
 - `<title>` tag

#### Description

 - OG Description `meta[property='og:description']`
 - `<meta[name='description']>`
 - All `<p>` tags, combined to minimum length of 128 characters.

#### Image

 - OG Image `meta[property='og:image']`
 - First image tag `<img>`

#### Keywords

 - `meta[name='keywords']`

#### Type

- OG Type `meta[property='og:type']`

## Setup a development environment

Make sure you have `node` and `npm` installed.

Install all the required dependencies

{% highlight bash %}
npm install
{% endhighlight %}

### Start local development server

{% highlight bash %}
npm run dev
{% endhighlight %}

This will start a local development server that listens on file change and
rebuilds everytime that file is changed.

### See if everythign is working

In the repository you will find a file named `basic.js`, execute the file
and see the output.

{% highlight bash %}
node tst/basic.js
{% endhighlight %}

You should now see the output that looks something like this

{% highlight javascript %}
{ url: 'https://arpitbhayani.me/techie/rest-the-hard-way-with-netcat.html',
  status: 200,
  host: 'arpitbhayani.me',
  title: 'HTTP Requests - The Hard Way with Netcat',
  description: 'All our lives we have been hitting REST APIs with libraries and utilities like curl and postman. Its time we do it the hard way with netcat, just for fun!',
  type: 'article',
  keywords:
   [ 'http-requests',
     'netcat',
     'calling rest api with netcat',
     'calling rest api from microcontroller',
     'http request messages' ],
  image: 'https://arpitbhayani.me/static/images/http-requests/http-request-hard-way-with-netcat.jpg' }
{% endhighlight %}
