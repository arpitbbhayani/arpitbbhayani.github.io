---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Flatland Space Stations on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Flatland Space Stations Solution
tags:
- competitive-programming
- programming
title: HACKERRANK flatland-space-stations Solution
---
The correct, optimal and working solution for programming question [flatland-space-stations](https://www.hackerrank.com/challenges/flatland-space-stations) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/flatland-space-stations" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int compar(const void * a, const void * b) {
    return *((int *)a) > *((int *)b);
}

int main(int argc, char *argv[]) {
    int n, k;
    scanf("%d%d", &n, &k);

    int * arr = (int *) calloc(k, sizeof(int));

    for(int i = 0 ; i < n ; i++) {
        scanf("%d", &arr[i]);
    }

    if(k == n) {
        printf("0\n");
    }
    else {
        qsort(arr, k, sizeof(int), compar);
        int ans = INT_MIN;
        for(int i = 0 ; i < (k - 1) ; i++) {
            int res = 0;
            if(arr[i+1] - arr[i] == 1) {
                res = 0;
            }
            else {
                res = (arr[i+1] - arr[i]) / 2;
            }
            ans = MAX(ans, res);
        }

        ans = MAX(ans, arr[0]);
        ans = MAX(ans, n - 1 - arr[k-1]);

        printf("%d\n", ans);
    }
    free(arr);

    return 0;
}

{% endhighlight %}
</div>
