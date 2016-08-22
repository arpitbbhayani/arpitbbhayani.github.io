---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Dynamic Array on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Dynamic Array Solution
tags:
- competitive-programming
- programming
title: HACKERRANK dynamic-array Solution
---
The correct, optimal and working solution for programming question [dynamic-array](https://www.hackerrank.com/challenges/dynamic-array) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/dynamic-array" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

vector<int> *v;

int main(int argc, char *argv[]) {
    int n, t, lastAns = 0;
    scanf("%d%d", &n, &t);

    v = new vector<int>[n];
    while(t--) {
        int a, x, y;
        scanf("%d%d%d", &a, &x, &y);

        if(a == 1) {
            v[(x ^ lastAns)% n].push_back(y);
        }
        else {
            vector<int> c = v[(x ^ lastAns)% n];
            lastAns = c[y % c.size()];
            cout << lastAns << endl;
        }
    }

    delete []v;
    return 0;
}

{% endhighlight %}
</div>
