---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Strange Advertising on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Strange Advertising Solution
tags:
- competitive-programming
- programming
title: HACKERRANK strange-advertising Solution
---
The correct, optimal and working solution for programming question [strange-advertising](https://www.hackerrank.com/challenges/strange-advertising) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/strange-advertising" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  http://arpitbhayani.me
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


ll int reverse(ll int n) {
    ll int rn = 0;
    while(n) {
        rn = rn * 10 + n % 10;
        n = n / 10;
    }
    return rn;
}

int main() {
    int n, sum = 0, people = 0;
    scanf("%d", &n);

    // n = 1
    sum = 0;
    people = 5;
    for(int i = 1 ; i <= n; i++) {
        sum += people/2;
        people = (people/2) * 3;
    }
    printf("%d\n", sum);
    return 0;
}

{% endhighlight %}
</div>
