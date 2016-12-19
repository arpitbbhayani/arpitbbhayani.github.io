---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Strange Grid on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Strange Grid Solution
tags:
- competitive-programming
- programming
title: HACKERRANK strange-grid Solution
---
The correct, optimal and working solution for programming question [strange-grid](https://www.hackerrank.com/challenges/strange-grid) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/strange-grid" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    ll int r, c;
    cin >> r >> c;

    ll int m = 0;
    m = ((r + 1) / 2) * 10;

    if ( r & 1 ) {
        cout << m - 2 - 2 * (5 - c) << endl;
    }
    else {
        cout << m - 1 - 2 * (5 - c) << endl;
    }

    return 0;
}

{% endhighlight %}
</div>
