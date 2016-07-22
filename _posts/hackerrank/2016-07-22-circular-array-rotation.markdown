---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Circular Array Rotation on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Circular Array Rotation Solution
tags:
- competitive-programming
- programming
title: HACKERRANK circular-array-rotation Solution
---
The correct, optimal and working solution for programming question [circular-array-rotation](https://www.hackerrank.com/challenges/circular-array-rotation) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/circular-array-rotation" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

void reverse_array(int * array, int length) {
    int start = 0, end = length - 1;
    while(start < end) {
        int t = array[start];
        array[start] = array[end];
        array[end] = t;
        start++;
        end--;
    }
}

void print_array(int * array, int length) {
    for(int i = 0; i< length; i++) {
        printf("%d ", array[i]);
    }
    printf("\n");
}

int main(int argc, char *argv[]) {
    int n, k, q;
    int array[100010];
    scanf("%d%d%d", &n, &k, &q);

    for(int i = 0; i < n; i++) {
        scanf("%d", &array[i]);
    }

    k = k % n; // in case rotations are more than n

    while(q--) {
        int x;
        scanf("%d", &x);

        if(x - k >= 0) {
            printf("%d\n", array[x - k]);
        }
        else {
            printf("%d\n", array[n + x - k]);
        }

    }

    return 0;
}

{% endhighlight %}
</div>
