---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Sherlock and Moving Tiles on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Sherlock and Moving Tiles Solution
tags:
- competitive-programming
- programming
title: HACKERRANK sherlock-and-moving-tiles Solution
---
The correct, optimal and working solution for programming question [sherlock-and-moving-tiles](https://www.hackerrank.com/challenges/sherlock-and-moving-tiles) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/sherlock-and-moving-tiles" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int main(int argc, char *argv[]) {
    long double l, s1, s2;
    cin >> l >> s1 >> s2;

    long double q;
    cin >> q;

    while(q--) {
        long double qi;
        cin >> qi;

        printf("%.4LF\n", ( (sqrt(2) * l - sqrt(2 * qi)) / abs(s1 - s2) ));
    }

    return 0;
}

{% endhighlight %}
</div>
