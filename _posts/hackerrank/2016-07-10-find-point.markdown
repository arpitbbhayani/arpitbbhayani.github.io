---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Find Point on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Find Point Solution
tags:
- competitive-programming
- programming
title: HACKERRANK find-point Solution
---
The correct, optimal and working solution for programming question [find-point](https://www.hackerrank.com/challenges/find-point) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/find-point" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
#include <cstdio>

int main(int argc, char *argv[]) {
	int t;
	scanf("%d", &t);
	while(t--) {
		int x1, y1, x2, y2;
		int x3, y3;
		scanf("%d%d%d%d", &x1, &y1, &x2, &y2);

		x3 = x1 + 2 * (x2 - x1);
		y3 = y1 + 2 * (y2 - y1);

		printf("%d %d\n", x3, y3);
	}
	return 0;
}

{% endhighlight %}
</div>
