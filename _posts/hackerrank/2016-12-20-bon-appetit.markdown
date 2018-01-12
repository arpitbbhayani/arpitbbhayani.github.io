---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Bon Appetit on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Bon Appetit Solution
tags:
- competitive-programming
- programming
title: HACKERRANK bon-appetit Solution
---
The correct, optimal and working solution for programming question [bon-appetit](https://www.hackerrank.com/challenges/bon-appetit) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/bon-appetit" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int main(int argc, char *argv[]) {

    int n, k, sum;
    int *arr;

    scanf("%d%d", &n, &k);
    arr = (int *) malloc(sizeof(int) * n);
    for(int i = 0 ; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    scanf("%d", &sum);

    int total_sum = 0;
    for(int i = 0 ; i < n; i++) {
        total_sum += arr[i];
    }

    total_sum -= arr[k];
    total_sum = total_sum / 2;

    if(sum - total_sum == 0) {
        printf("Bon Appetit\n");
    }
    else {
        printf("%d\n", sum - total_sum);
    }

    free(arr);
    return 0;
}

{% endhighlight %}
</div>
