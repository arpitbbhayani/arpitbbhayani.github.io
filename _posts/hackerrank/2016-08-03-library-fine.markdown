---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Library Fine on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Library Fine Solution
tags:
- competitive-programming
- programming
title: HACKERRANK library-fine Solution
---
The correct, optimal and working solution for programming question [library-fine](https://www.hackerrank.com/challenges/library-fine) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/library-fine" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

    int sd, sm, sy;
    int dd, dm, dy;

    cin >> sd >> sm >> sy >> dd >> dm >> dy;

    int fine = 0;

    if(dy == sy) {
        if(sm > dm) {
            fine = (sm - dm) * 500;
        }
        else if(sm == dm && sd > dd) {
            fine = (sd - dd) * 15;
        }
    }
    else if(sy > dy) {
        fine = 10000;
    }
    cout << fine << endl;
    return 0;
}

{% endhighlight %}
</div>
