---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Consecutive Subsequences on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Consecutive Subsequences Solution
tags:
- competitive-programming
- programming
title: HACKERRANK consecutive-subsequences Solution
---
The correct, optimal and working solution for programming question [consecutive-subsequences](https://www.hackerrank.com/contests/w6/challenges/consecutive-subsequences/) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/contests/w6/challenges/consecutive-subsequences/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    int t;
    scanf("%d", &t);

    while(t--) {
        int n, k;
        scanf("%d%d", &n, &k);
        ll int * counts = (ll int *) calloc(100, sizeof(ll int));
        counts[0] = 1;

        ll int sum = 0;
        for(int i = 0 ; i < n ; i++) {
            int x;
            scanf("%d", &x);
            sum += x;
            if(sum >= k) {
                sum %= k;
            }
            counts[sum]++;
        }

        ll int count = 0;
        for(int i = 0 ; i < k; i++) {
            count += ((counts[i] * (counts[i] - 1)) / 2);
        }
        printf("%lld\n", count);

        free(counts);
    }

    return 0;
}

{% endhighlight %}
</div>
