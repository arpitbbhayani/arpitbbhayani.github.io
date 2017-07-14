---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Game of Two Stacks on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Game of Two Stacks Solution
tags:
- competitive-programming
- programming
title: HACKERRANK game-of-two-stacks Solution
---
The correct, optimal and working solution for programming question [game-of-two-stacks](https://www.hackerrank.com/challenges/game-of-two-stacks) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/game-of-two-stacks" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int arr1[100001];
int arr2[100001];

int foo(int n, int m, ll int x) {
    ll int sum = 0;
    int i = 0, j = 0;
    int count = 0;

    while (i < n) {
        sum += (ll int) arr1[i];
        i++;
        if (sum > x) {
            i--;
            sum -= (ll int) arr1[i];
            break;
        }
    }
    count = i;

    while (j < m) {
        sum += (ll int) arr2[j];
        j++;
        while (sum > x && i > 0) {
            i--;
            sum -= (ll int) arr1[i];
        }
        count = (sum <= x) ? MAX( (count), (i + j) ) : count;
    }

    return count;
}

int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);
    while( t-- ) {
        ll int x;
        int n, m;
        scanf("%d%d%lld", &n, &m, &x);

        for (int i = 0 ; i < n; i++) {
            scanf("%d", &arr1[i]);
        }

        for (int j = 0 ; j < m; j++) {
            scanf("%d", &arr2[j]);
        }

        printf("%d\n", foo(n, m, x));
    }
    return 0;
}

{% endhighlight %}
</div>
