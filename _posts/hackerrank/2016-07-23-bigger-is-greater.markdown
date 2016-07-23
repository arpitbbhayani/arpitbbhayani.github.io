---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Bigger is Greater on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Bigger is Greater Solution
tags:
- competitive-programming
- programming
title: HACKERRANK bigger-is-greater Solution
---
The correct, optimal and working solution for programming question [bigger-is-greater](https://www.hackerrank.com/challenges/bigger-is-greater) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/bigger-is-greater" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
#include <cstring>
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
#include <algorithm>

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
    char str[128];
    int t;
    scanf("%d", &t);

    while(t--) {
        scanf("%s", str);
        int x = next_permutation(str, str + strlen(str));
        if(x) {
            cout << str << endl;
        }
        else {
            cout << "no answer" << endl;
        }
    }

    return 0;
}

{% endhighlight %}
</div>
