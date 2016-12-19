---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Missing Numbers on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Missing Numbers Solution
tags:
- competitive-programming
- programming
title: HACKERRANK missing-numbers Solution
---
The correct, optimal and working solution for programming question [missing-numbers](https://www.hackerrank.com/challenges/missing-numbers) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/missing-numbers" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int h1[220];
int h2[220];

int main(int argc, char *argv[]) {
    int n, m, x;
    int base;

    scanf("%d", &n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &x);
        if(i == 0) {
            base = x;
        }
        h1[100 + (x - base)]++;
    }

    scanf("%d", &m);
    for(int i = 0; i < m; i++) {
        scanf("%d", &x);
        h2[100 + (x - base)]++;
    }

    vector<int> y;
    for(int i = 0 ; i < 220; i++) {
        int d = (h2[i] - h1[i]);
        if(d > 0) {
            y.push_back(i + base - 100);
        }
    }

    for(vector<int>::iterator itr = y.begin(); itr != y.end(); itr++) {
        cout << *itr << " ";
    }
    cout << endl;

    return 0;
}

{% endhighlight %}
</div>
