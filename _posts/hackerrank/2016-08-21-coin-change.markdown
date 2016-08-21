---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question The Coin Change Problem on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - The Coin Change Problem Solution
tags:
- competitive-programming
- programming
title: HACKERRANK coin-change Solution
---
The correct, optimal and working solution for programming question [coin-change](https://www.hackerrank.com/challenges/coin-change) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/coin-change" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

#define MAX_COINS 51
#define MAX_SUM 251

int arr[51];
ll int dp[251][51];

ll int count(int sum, int n) {
    if(sum < 0) {
        return 0;
    }

    if(n < 0 && sum >= 1) {
        return 0;
    }

    if(dp[sum][n] != -1) {
        return dp[sum][n];
    }

    if(sum == 0) {
        dp[sum][n] = 1;
        return 1;
    }

    dp[sum][n] = count(sum, n - 1) + count(sum - arr[n], n);

    return dp[sum][n];
}

int main(int argc, char *argv[]) {
    int sum, n;
    scanf("%d%d", &sum, &n);
    for(int i = 0 ; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    for(int i = 0 ; i < MAX_SUM; i++) {
        for(int j = 0 ; j < MAX_COINS; j++) {
            dp[i][j] = -1;
        }
    }

    ll int ans = 0;
    ans = count(sum, n-1);
    printf("%lld\n", ans);

    return 0;
}

{% endhighlight %}
</div>
