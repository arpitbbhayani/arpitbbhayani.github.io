---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Largest Rectangle on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Largest Rectangle Solution
tags:
- competitive-programming
- programming
title: HACKERRANK largest-rectangle Solution
---
The correct, optimal and working solution for programming question [largest-rectangle](https://www.hackerrank.com/challenges/largest-rectangle) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/largest-rectangle" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
stack< ll int > s;

int main(int argc, char *argv[]) {
    int n;
    scanf("%d", &n);
    for(int i = 0 ; i < n ; i++) {
        scanf("%lld", &arr[i]);
    }

    int i = 0;
    ll int ans = 0;
    while(i < n) {
        if(s.empty() || arr[i] >= arr[s.top()]) {
            s.push(i);
            i++;
        }
        else {
            int x = s.top();
            s.pop();

            int left_index = -1;
            if(!s.empty()) {
                left_index = s.top();
            }

            int right_index = i;
            int breadth = 0;
            if(left_index == -1) {
                breadth = right_index;
            }
            else {
                breadth = right_index - left_index - 1;
            }

            ll int area = arr[x] * breadth;
            ans = MAX(ans, area);
        }
    }

    while(!s.empty()) {
        int x = s.top();
        s.pop();

        int left_index = -1;
        if(!s.empty()) {
            left_index = s.top();
        }

        int right_index = i;
        int breadth = 0;
        if(left_index == -1) {
            breadth = right_index;
        }
        else {
            breadth = right_index - left_index - 1;
        }

        ll int area = arr[x] * breadth;
        ans = MAX(ans, area);
    }

    printf("%lld\n", ans);

    return 0;
}

{% endhighlight %}
</div>
