---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Equalize the Array on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Equalize the Array Solution
tags:
- competitive-programming
- programming
title: HACKERRANK equality-in-a-array Solution
---
The correct, optimal and working solution for programming question [equality-in-a-array](https://www.hackerrank.com/challenges/equality-in-a-array) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/equality-in-a-array" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int h[101];
int main(int argc, char *argv[]) {

    int n, x;
    scanf("%d", &n);
    for(int i = 0 ; i < n; i++) {
        scanf("%d", &x);
        h[x]++;
    }

    int m = 0;
    for(int i = 0 ; i < 101 ; i++) {
        m = MAX(h[i], m);
    }

    printf("%d\n", n - m);

    return 0;
}

{% endhighlight %}
</div>
