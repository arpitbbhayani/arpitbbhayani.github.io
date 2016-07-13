---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Restaurant on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Restaurant Solution
tags:
- competitive-programming
- programming
title: HACKERRANK restaurant Solution
---
The correct, optimal and working solution for programming question [restaurant](https://www.hackerrank.com/challenges/restaurant) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/restaurant" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
      ll int l, b, g;
      cin >> l >> b;

      ll int t;
      if(l < b) {
          t = l;
          l = b;
          b = t;
      }

      g = gcd(l, b);
      cout << (l / g) * (b / g) << endl;
    }

    return 0;
}

{% endhighlight %}
</div>
