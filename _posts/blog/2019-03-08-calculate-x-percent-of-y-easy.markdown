---
title: Calculate x % of y easily with this trick
img:    https://arpitbhayani.me/static/images/calculate-percent-with-trick.png
gif: https://media.giphy.com/media/1wpLZMOhK7hxppbFGR/giphy.gif
layout: post
comments: true
tags:
 - maths
categories: blog
seo:
 tags:
  - maths
  - percent
  - maths trick
  - trick to find percentage
 description: An interesting thing I found today was this trick to calculate x % of y easily.
mathjax: true
---

Say your friend comes up to you with this question "What is `63%` of `25`?". If you do not have a pen
and a paper handy then solving this question will not be straightforward. One approach, that most
people take, is to find a small percent of the number, say `x%` of `25` such that `x` can take you easily to `63`.
So here you may find `3%` of `25` and then multiply it by `21` to get you to `63`, which again is a pain.

So there must a simpler way to do this; and there is :boom:

What if I say,

$$
\hspace{0.2cm}x \% \hspace{0.2cm} of \hspace{0.2cm} y \hspace{0.2cm} = \hspace{0.2cm} y \% \hspace{0.2cm} of \hspace{0.2cm} x
$$

The statement seems untrue at first but in fact it is very true. The proof is really very
simple and requires a basic math to understand its elegance

<div class="ui image">
    <img src="/static/images/calculate-percent-with-trick-proof.jpeg" />
</div>

One interpretation of above euality is that you can trade numbers as per your convenience and you can use the one
that is simpler to fraction w.r.t `100` you can use it as `y`, making your life easy again.

Coming back to the question, since we have established

$$
\hspace{0.2cm}x \% \hspace{0.2cm} of \hspace{0.2cm} y \hspace{0.2cm} = \hspace{0.2cm} y \% \hspace{0.2cm} of \hspace{0.2cm} x
$$

and hence finding the answer is as easy as

$$
x \hspace{0.2cm} = \hspace{0.2cm} 63 \% \hspace{0.2cm} of \hspace{0.2cm} 25 \\
\hspace{0.4cm} = \hspace{0.2cm} 25 \% \hspace{0.2cm} of \hspace{0.2cm} 63 \\
\hspace{0.4cm} = \hspace{0.2cm} 63 / 4 \\
\hspace{0.4cm} = \hspace{0.2cm} 15.75
$$

Hope you find this property pretty handy :smile: Cheers :raised_hand:
