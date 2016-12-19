---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Maximum Element on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Maximum Element Solution
tags:
- competitive-programming
- programming
title: HACKERRANK maximum-element Solution
---
The correct, optimal and working solution for programming question [maximum-element](https://www.hackerrank.com/challenges/maximum-element) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/maximum-element" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

stack<ll int> s, m;
int main(int argc, char *argv[]) {
    int t, x;
    ll int v, mx = -1;

    scanf("%d", &t);
    while(t--) {
        scanf("%d", &x);
        if(x == 1) {
            scanf("%lld", &v);
            if(mx == -1 || m.empty()) {
                mx = v;
            }
            else {
                mx = MAX(m.top(), v);
            }
            s.push(v);
            m.push(mx);
        }
        else if(x == 2) {
            s.pop();
            m.pop();
        }
        else {
            printf("%lld\n", m.top());
        }
    }

    return 0;
}

{% endhighlight %}
</div>
