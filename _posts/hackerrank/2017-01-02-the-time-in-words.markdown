---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question The Time in Words on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - The Time in Words Solution
tags:
- competitive-programming
- programming
title: HACKERRANK the-time-in-words Solution
---
The correct, optimal and working solution for programming question [the-time-in-words](https://www.hackerrank.com/challenges/the-time-in-words) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/the-time-in-words" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

char nstr[31][32] = {"", "one", "two", "three", "four", "five", "six",
                     "seven", "eight", "nine", "ten", "eleven", "twelve",
                     "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
                     "eighteen", "nineteen", "twenty", "twenty one",
                     "twenty two", "twenty three", "twenty four",
                     "twenty five", "twenty six", "twenty seven",
                     "twenty eight", "twenty nine", "half"};

int main(int argc, char *argv[]) {
    int h, m;
    scanf("%d%d", &h, &m);

    if(m == 0) {
        printf("%s o' clock", nstr[h]);
    } else if(m == 1) {
        printf("%s minute past %s", nstr[m], nstr[h]);
    } else if(m == 15) {
        printf("quarter past %s", nstr[h]);
    } else if(m < 30) {
        printf("%s minutes past %s", nstr[m], nstr[h]);
    } else if(m == 30) {
        printf("%s past %s", nstr[m], nstr[h]);
    } else if(m == 59) {
        h++;
        if(h == 13) { h = 1; }
        printf("%s minute to %s", nstr[m], nstr[h]);
    } else if(m == 45) {
        h++;
        if(h == 13) { h = 1; }
        printf("quarter to %s", nstr[h]);
    } else if(m > 30) {
        h++;
        if(h == 13) { h = 1; }
        m = 60 - m;
        printf("%s minutes to %s", nstr[m], nstr[h]);
    }

    printf("\n");
    return 0;
}

{% endhighlight %}
</div>
