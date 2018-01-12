---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Absolute Permutation on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Absolute Permutation Solution
tags:
- competitive-programming
- programming
title: HACKERRANK absolute-permutation Solution
---
The correct, optimal and working solution for programming question [absolute-permutation](https://www.hackerrank.com/challenges/absolute-permutation) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/absolute-permutation" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int arr[100010];

void print_array(int n) {
    for(int i = 1; i <= n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int process(int n, int k) {
    for(int i = 1; i <= n; i++) {
        arr[i] = i;
    }

    if(k == 0) {
        return 0;
    }

    int index = 1;
    while(1) {
        for(int j = 0; j < k; j++) {
            if(index + j + k > n) {
                return -1;
            }
            int t = arr[index + j];
            arr[index + j] = arr[index + j + k];
            arr[index + j + k] = t;
        }
        index += (2*k);
        if(index == n + 1) {
            return 0;
        }
        if(index > n + 1) {
            return -1;
        }
    }
}

int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);

    while(t--) {
        int n, k;
        scanf("%d%d", &n, &k);
        int ans = process(n, k);

        if(ans == -1) {
            printf("-1\n");
        }
        else {
            print_array(n);
        }
    }

    return 0;
}

{% endhighlight %}
</div>
