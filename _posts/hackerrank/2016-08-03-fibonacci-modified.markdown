---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Fibonacci Modified on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Fibonacci Modified Solution
tags:
- competitive-programming
- programming
title: HACKERRANK fibonacci-modified Solution
---
The correct, optimal and working solution for programming question [fibonacci-modified](https://www.hackerrank.com/challenges/fibonacci-modified) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/fibonacci-modified" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
#
#  Author: Arpit Bhayani
#  https://arpitbhayani.me
#

x = raw_input().split()

dp = {}


def fib(t1, t2, n):
    if n == 1:
        return t1

    if n == 2:
        return t2

    t3 = dp.get(n)
    if t3 is None:
        t3 = fib(t1, t2, n-2) + fib(t1, t2, n-1) ** 2
        dp[n] = t3

    return t3

print fib(int(x[0]), int(x[1]), int(x[2]))

{% endhighlight %}
</div>
