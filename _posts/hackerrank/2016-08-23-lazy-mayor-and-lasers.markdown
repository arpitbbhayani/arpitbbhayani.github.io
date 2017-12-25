---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Lazy Mayor And Lasers on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Lazy Mayor And Lasers Solution
tags:
- competitive-programming
- programming
title: HACKERRANK lazy-mayor-and-lasers Solution
---
The correct, optimal and working solution for programming question [lazy-mayor-and-lasers](https://www.hackerrank.com/contests/101hack40/challenges/lazy-mayor-and-lasers) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/contests/101hack40/challenges/lazy-mayor-and-lasers" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

ll int arr[100010];
int cuts[100010];

ll int min(ll int a, ll int b) {
    return (a < b) ? a : b;
}

int compar(const void * a, const void * b) {
    return (*(int *)a) > (*(int *)b);
}

ll int process(int n, int m) {
    ll int sum = 0;
    qsort(cuts, m, sizeof(int), compar);

    for(int i = 0; i < m; i++) {
        int start = 0, end = 0;

        if(i == 0) {
            start = 0;
            end = cuts[i] - 1;
        }
        else {
            start = cuts[i-1] - 1;
            end = cuts[i] - 1;
        }

        for(int j = start; j < end; j++) {
            arr[j] = min(end - j, arr[j]);
        }
    }
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }

    return sum;
}

int main(int argc, char *argv[]) {
    int n;
    scanf("%d", &n);
    for(int i = 0 ; i < n; i++) {
        scanf("%lld", &arr[i]);
    }
    int m;
    scanf("%d", &m);
    for( int i = 0 ; i < m; i++) {
        scanf("%d", &cuts[i]);
    }

    printf("%lld\n", process(n, m));
    return 0;
}

{% endhighlight %}
</div>
