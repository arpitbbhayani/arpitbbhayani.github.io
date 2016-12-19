---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Mandragora Forest on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Mandragora Forest Solution
tags:
- competitive-programming
- programming
title: HACKERRANK mandragora Solution
---
The correct, optimal and working solution for programming question [mandragora](https://www.hackerrank.com/challenges/mandragora) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/mandragora" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

ll int arr[100010];

int compar(const void * a, const void * b) {
    return (*(int *)a) > (*(int *)b);
}

int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);

    while(t--) {
        int n;
        ll int sum = 0;
        scanf("%d", &n);
        for(int i = 0; i < n; i++) {
            scanf("%lld", &arr[i]);
            sum += arr[i];
        }

        qsort(arr, n , sizeof(ll int), compar);

        ll int op, tp, temp_sum = sum;
        op = (0 + 1) * temp_sum;
        for(int x = 1; x < n; x++) {
            temp_sum -= arr[x-1];
            tp = (x + 1) * temp_sum;
            if(tp < op) {
                break;
            }
            op = MAX(tp, op);
        }
        printf("%lld\n", op);
    }

    return 0;
}

{% endhighlight %}
</div>
