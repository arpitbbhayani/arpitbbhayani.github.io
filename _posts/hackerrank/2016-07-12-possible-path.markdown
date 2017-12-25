---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Possible Path on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Possible Path Solution
tags:
- competitive-programming
- programming
title: HACKERRANK possible-path Solution
---
The correct, optimal and working solution for programming question [possible-path](https://www.hackerrank.com/challenges/possible-path) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/possible-path" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

ll int gcd(ll int a, ll int b) {
    if(b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);

    while(t--) {
      ll int a, b, x, y;
      scanf("%lld%lld%lld%lld", &a, &b, &x, &y);

      ll int u1, u2;

      u1 = a > b ? gcd(a, b) : gcd(b, a);
      u2 = x > y ? gcd(x, y) : gcd(y, x);

      if (u1 == u2) {
          printf("YES\n");
      }
      else {
          printf("NO\n");
      }
    }

    return 0;
}

{% endhighlight %}
</div>
