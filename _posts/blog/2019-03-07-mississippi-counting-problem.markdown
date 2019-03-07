---
title: The Mississippi Counting Problem
img:    https://arpitbhayani.me/static/images/mississippi-counting-problem.png
gif: https://media.giphy.com/media/3o6ZsYwoirHUIj5Em4/giphy.gif
layout: post
comments: true
tags:
 - maths
categories: blog
seo:
 tags:
  - maths
  - permutations
  - counting problem
  - count unique words
 description: How many 3 letter unique words can be created from the word 'mississippi'?
---

Today I encountered a very interesting problem on [Enumerations](https://en.wikipedia.org/wiki/Enumeration).
The problem that seemed tricky at first but as I started to devise a solution it things became complicated.
I knew the answer should be really simple and elegant.

The problem statement goes like this

> How many 3 letter unique words can be created from the word 'mississippi'?

After trying 3 different approaches and almost having applied the Brute Force, I found a way to
solve the problem which kinda is elegant. Here is my version of the solution.

<div class="ui image">
    <img src="/static/images/counting-problem-solution.jpeg" />
</div>

The first half of the image contains a way to find number of linear arrangements which has nothing to do with this problem.

If you have some other way of solving this problem kindly let me know in the comments section down below.

Here is a Python program that asserts the approach :smile:

<iframe height="600px" width="100%" src="https://repl.it/@arpitbbhayani/numbers-of-words-from-a-word?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
