---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Minimum Distances on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Minimum Distances Solution
tags:
- competitive-programming
- programming
title: HACKERRANK minimum-distances Solution
---
The correct, optimal and working solution for programming question [minimum-distances](https://www.hackerrank.com/challenges/minimum-distances) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/minimum-distances" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  https://arpitbhayani.me
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

int arr[1010];
int main(int argc, char *argv[]) {
    int n;
    scanf("%d", &n);

    for(int i = 0 ; i < n ; i++) {
        scanf("%d", &arr[i]);
    }

    int dist = INT_MAX;
    for(int i = 0 ; i < n; i++) {
        for(int j = 0 ; j < i ; j++) {
            if(arr[i] == arr[j]) {
                dist = MIN(dist, abs(i - j));
            }
        }
    }

    if(dist == INT_MAX) {
        dist = -1;
    }

    cout << dist << endl;

    return 0;
}

{% endhighlight %}
</div>
