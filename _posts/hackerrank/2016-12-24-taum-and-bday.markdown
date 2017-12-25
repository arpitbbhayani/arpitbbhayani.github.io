---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Taum and Bday on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Taum and Bday Solution
tags:
- competitive-programming
- programming
title: HACKERRANK taum-and-bday Solution
---
The correct, optimal and working solution for programming question [taum-and-bday](https://www.hackerrank.com/challenges/taum-and-bday) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/taum-and-bday" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  https://arpitbhayani.me
 */
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <climits>
#include <deque>
#include <iostream>
#include <list>
#include <limits>
#include <map>
#include <queue>
#include <set>
#include <stack>
#include <vector>

#define ll long long

#define MIN(a, b) a < b ? a : b
#define MAX(a, b) a > b ? a : b

using namespace std;

int readline(char *str) {
    int i = 0;
    char ch;
    while((ch = getchar()) != '\n') {
        str[i++] = ch;
    }
    str[i] = '\0';
    return i;
}

int main(int argc, char *argv[]) {

    int t;
    scanf("%d", &t);
    while(t--) {
        ll int b, w;
        ll int x, y, z;
        scanf("%lld%lld", &b, &w);
        scanf("%lld%lld%lld", &x, &y, &z);

        ll int cost_b = b * x;
        ll int cost_w = w * y;

        ll int cost_b_from_w = b * (y + z);
        ll int cost_w_from_b = w * (x + z);

        ll int result;
        result = MIN((cost_b + cost_w), (cost_b + cost_w_from_b));
        result = MIN(result, (cost_w + cost_b_from_w));

        printf("%lld\n", result);
    }

    return 0;
}

{% endhighlight %}
</div>
