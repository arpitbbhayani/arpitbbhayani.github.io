---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Extra Long Factorials on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Extra Long Factorials Solution
tags:
- competitive-programming
- programming
title: HACKERRANK extra-long-factorials Solution
---
The correct, optimal and working solution for programming question [extra-long-factorials](https://www.hackerrank.com/challenges/extra-long-factorials) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/extra-long-factorials" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
f = 1
n = int(raw_input())
for i in range(1, n+1):
    f *= i
print(f)

{% endhighlight %}
</div>
