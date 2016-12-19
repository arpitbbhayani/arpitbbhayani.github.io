---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Sparse Arrays on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Sparse Arrays Solution
tags:
- competitive-programming
- programming
title: HACKERRANK sparse-arrays Solution
---
The correct, optimal and working solution for programming question [sparse-arrays](https://www.hackerrank.com/challenges/sparse-arrays) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/sparse-arrays" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

map<string, int> m;
int main(int argc, char *argv[]) {
    int n, q;
    string str(24, 0);
    scanf("%d", &n);

    while(n--) {
        cin >> str;
        m[str]++;
    }

    scanf("%d", &q);
    while(q--) {
        cin >> str;
        cout << m[str] << endl;
    }

    return 0;
}

{% endhighlight %}
</div>
