---
title: Making excerpts look good
img:    https://arpitbhayani.me/static/images/potterverse/potterverse-excerpts.png
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
  - search engine
  - elasticsearch
  - excerpts
  - text processing in python
 description: Excerpts are short snippet of a long text, that gives a rough idea of what the content is. They are generally first `n` characters from the text where the value of `n` totally depends on the amount of information need to be shown to the user.
---

Excerpt is a short snippet of a long text, that gives a rough idea of what the content is.
They are generally first `n` characters from the text where the value of `n` totally depends
on the amount of information need to be shown to the user.

When someone searches on [Potterverse](https://potterverse.arpitbhayani.me), the search results
that are shown contains an excerpt of relevant page; reading which user gets an
idea of what the content of the page is and if he/she finds it interesting, then clicking on the item,
opens the source page in a new tab. The excerpt of information we show is the first `256` characters
of the page; which is sufficient to give a rough idea of what the page holds and it also takes
up 2-3 regular lines making the search result look beautiful.

Grass is looking lush green right now ... so what could possibly go wrong by bluntly showing first `n`
characters? :poop:

### Why are they ugly?
When we directly trim first `n` characters from the text, it will most probably end somewhere in the
middle of a word, which then abruptly ends the excerpt and in turn does not leave a very good impression
either. Here are some examples that elaborates this problem

<div class="ui image">
    <img src="/static/images/potterverse/bad-1.jpg" />
</div>

<div class="ui image">
    <img src="/static/images/potterverse/bad-2.jpg" />
</div>

The worst could be when the `n`th character ended at a very inappropriate place, like we see in the
example below

<div class="ui image">
    <img src="/static/images/potterverse/bad-3.jpg" />
</div>

### Making them look good
The excerpts we show right on [Potterverse](https://potterverse.arpitbhayani.me) now are very
crisp and they look good :smile: ... wonder why?

We do the following:

 1. Get string containing first `n` characters
 2. Trim trailing or leading whitespaces, if any
 3. Find the position of last whitespace, say `x`th
 4. Your neat excerpt is the substring from `0`th index to the `x-1`th
 5. Trim trailing whitespaces, so as to eliminate the case of consecutive spaces

For example the string is

```
quick brown fox jumps over the lazy dog
```

and we want excerpt of no more than `25` characters. heres what we do

1. Get the raw excerpt, `quick brown fox jumps ove`
2. Trim any white spaces, `quick brown fox jumps ove`
3. Right most whitespace position, `22`
4. Neat excerpt is substring from 0 to 22nd character, `quick brown fox jumps`
5. Trimming again leaves us with, `quick brown fox jumps`

Some example excerpts from Potterverse

<div class="ui image">
    <img src="/static/images/potterverse/neat-1.jpg" />
</div>

<div class="ui image">
    <img src="/static/images/potterverse/neat-2.jpg" />
</div>

<div class="ui image">
    <img src="/static/images/potterverse/neat-3.jpg" />
</div>

Now don't they look good :heart_eyes:

Apart from doing the above mentioned stuff, we also remove any character that matches the
regular expression `[^a-zA-Z0-9,'". ]`. Since we are only dealing with English data here,
this regular expression works just fine. When the Potterverse will also index data that
is non-english some modifications will surely be required here.

A basic python function that returns the neat excerpt

{% highlight py %}
def get_neat_excerpt(text, text_length=100):
    text = text[:text_length]
    excerpt = re.sub('[^a-zA-Z0-9\,\'\" \.]', ' ', text).strip()
    try:
        last_space = excerpt.rindex(" ")
        excerpt = excerpt[:last_space]
    except ValueError:
        pass
    return excerpt.strip().strip(".")
{% endhighlight %}

### Conclusion
Fixing the excerpt may not be a big problem to tackle but we do believe in giving
attention to the tiniest detail possible. Making excerpts look good not only
improved the user experience but it also did inculcate the importance of putting 
efforts in the stuff that seems trivial, at the first glance, but can be annoying
to the end user.
