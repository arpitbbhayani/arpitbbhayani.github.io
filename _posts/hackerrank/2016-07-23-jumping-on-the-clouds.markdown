---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Jumping On The Clouds on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Jumping On The Clouds Solution
tags:
- competitive-programming
- programming
title: HACKERRANK jumping-on-the-clouds Solution
---
The correct, optimal and working solution for programming question [jumping-on-the-clouds](https://www.hackerrank.com/challenges/jumping-on-the-clouds) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/jumping-on-the-clouds" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    int n;
    scanf("%d", &n);

    int *arr = (int *) calloc(n, sizeof(int));
    int *jumps = (int *) calloc(n, sizeof(int));

    for(int i = 0 ; i < n; i++) {
        scanf("%d", &arr[i]);
        jumps[i] = 0;
    }

    jumps[0] = 0;
    jumps[1] = (arr[1] == 1) ? 0 : jumps[0] + 1;
    for(int i = 2 ; i < n ; i++) {
        int first = i - 1;
        int second = i - 2;
        if(arr[second] == 1) {
            jumps[i] = jumps[first] + 1;
        }
        else {
            jumps[i] = jumps[second] + 1;
        }
    }

    printf("%d\n", jumps[n-1]);

    free(arr);
    return 0;
}

{% endhighlight %}
</div>
