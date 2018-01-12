---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Designer PDF Viewer on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Designer PDF Viewer Solution
tags:
- competitive-programming
- programming
title: HACKERRANK designer-pdf-viewer Solution
---
The correct, optimal and working solution for programming question [designer-pdf-viewer](https://www.hackerrank.com/challenges/designer-pdf-viewer) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/designer-pdf-viewer" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int arr[26];
int main(int argc, char *argv[]) {
    char str[16];
    for(int i = 0; i < 26; i++) {
        scanf("%d", &arr[i]);
    }
    getchar();
    int l = readline(str);

    int m = INT_MIN;
    for(int i = 0; str[i]; i++) {
        m = MAX(m, arr[str[i] - 'a']);
    }
    printf("%d\n", m * l);
    return 0;
}

{% endhighlight %}
</div>
