---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Beautiful Triplets on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Beautiful Triplets Solution
tags:
- competitive-programming
- programming
title: HACKERRANK beautiful-triplets Solution
---
The correct, optimal and working solution for programming question [beautiful-triplets](https://www.hackerrank.com/challenges/beautiful-triplets) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/beautiful-triplets" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int arr[10010];
int h[20020];
int main(int argc, char *argv[]) {
    int n, d;
    scanf("%d%d", &n, &d);

    for(int i = 0 ; i < n ; i++) {
        scanf("%d", &arr[i]);
        h[arr[i]] = 1;
    }

    int count = 0;
    for(int j = 1; j < n - 1; j++) {
        int v = arr[j];
        if(v - d >= 0 && v + d < 20020 && h[v-d] == 1 && h[v + d] == 1) {
            count++;
        }
    }
    printf("%d\n", count);

    return 0;
}

{% endhighlight %}
</div>
