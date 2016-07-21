---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Plus Minus on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Plus Minus Solution
tags:
- competitive-programming
- programming
title: HACKERRANK plus-minus Solution
---
The correct, optimal and working solution for programming question [plus-minus](https://www.hackerrank.com/challenges/plus-minus) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/plus-minus" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    int t, x;
    scanf("%d", &t);

    int c0 = 0, cp = 0, cn = 0;

    for(int i = 0; i < t; i++) {
        cin >> x;
        if(x > 0) {
            cp++;
        }
        else if(x < 0) {
            cn++;
        }
        else {
            c0++;
        }
    }

    printf("%f\n%f\n%f\n", cp/(float)t, cn/(float)t, c0/(float)t);

    return 0;
}

{% endhighlight %}
</div>
