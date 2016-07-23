---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Non Divisible Subset on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Non Divisible Subset Solution
tags:
- competitive-programming
- programming
title: HACKERRANK non-divisible-subset Solution
---
The correct, optimal and working solution for programming question [non-divisible-subset](https://www.hackerrank.com/challenges/non-divisible-subset) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/non-divisible-subset" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

map<ll int, ll int> m;
ll int arr[100001];
int main(int argc, char *argv[]) {
    ll int n, k;
    scanf("%lld%lld", &n, &k);

    for(int i = 0 ; i < n ; i++) {
        cin >> arr[i];
        if(arr[i] % k == 0) {
            m[arr[i] % k] = 1;
        }
        else {
            m[arr[i] % k]++;
        }
    }

    ll int count = m[0];
    ll int start = 1;
    ll int end = k - 1;
    while(start < end) {
        count += MAX(m[start], m[end]);
        start++;
        end--;
    }

    if(k % 2 == 0 && m.find(k/2) != m.end()) {
        count++;
    }

    printf("%lld\n", count);

    return 0;
}

{% endhighlight %}
</div>
