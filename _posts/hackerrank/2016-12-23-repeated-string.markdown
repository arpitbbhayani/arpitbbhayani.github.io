---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Repeated String on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Repeated String Solution
tags:
- competitive-programming
- programming
title: HACKERRANK repeated-string Solution
---
The correct, optimal and working solution for programming question [repeated-string](https://www.hackerrank.com/challenges/repeated-string) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/repeated-string" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int main(int argc, char *argv[]) {
    char s[110];
    ll int n;
    ll int l = readline(s);
    scanf("%lld", &n);

    ll int count_a = 0, i = 0;
    ll int count = 0;
    for(i = 0 ; s[i]; i++) {
        if(s[i] == 'a') {
            count_a++;
        }
    }

    count += ((n / l) * count_a);
    for(i = 0; i < (n % l); i++) {
        if(s[i] == 'a') {
            count++;
        }
    }

    printf("%lld\n", count);

    return 0;
}

{% endhighlight %}
</div>
