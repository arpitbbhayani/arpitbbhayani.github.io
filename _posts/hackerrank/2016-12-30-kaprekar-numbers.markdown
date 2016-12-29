---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Modified Kaprekar Numbers on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Modified Kaprekar Numbers Solution
tags:
- competitive-programming
- programming
title: HACKERRANK kaprekar-numbers Solution
---
The correct, optimal and working solution for programming question [kaprekar-numbers](https://www.hackerrank.com/challenges/kaprekar-numbers) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/kaprekar-numbers" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  http://arpitbhayani.me
 */
#include <cmath>
#include <cstdio>
#include <cstring>
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

int is_kaprekar(ll int n) {
    char n_str[16], l[16], r[16];
    sprintf(n_str, "%lld", n*n);

    int len = strlen(n_str), index;

    index = 0;
    for(int i = 0 ; i < len/2; i++) {
        l[index++] = n_str[i];
    }
    l[index] = '\0';

    index = 0;
    for(int i = len/2; i < len; i++) {
        r[index++] = n_str[i];
    }
    r[index] = '\0';

    return atoi(l) + atoi(r) == n;
}

int main(int argc, char *argv[]) {
    ll int p, q;
    scanf("%lld%lld", &p, &q);

    int count = 0;
    for(ll int i = p; i <= q; i++) {
        int is_k = is_kaprekar(i);
        if(is_k) {
            printf("%lld ", i);
        }
        count += is_k;
    }

    if(count == 0) {
        printf("INVALID RANGE");
    }

    printf("\n");
    return 0;
}

{% endhighlight %}
</div>
