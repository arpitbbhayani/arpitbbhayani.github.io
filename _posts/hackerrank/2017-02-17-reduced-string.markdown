---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Super Reduced String on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Super Reduced String Solution
tags:
- competitive-programming
- programming
title: HACKERRANK reduced-string Solution
---
The correct, optimal and working solution for programming question [reduced-string](https://www.hackerrank.com/challenges/reduced-string) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/reduced-string" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

char str[1024];
int main(int argc, char *argv[]) {
    stack< char > s;
    scanf("%s", str);
    for(int i = 0 ; str[i]; i++) {
        if(s.empty()) {
            s.push(str[i]);
            continue;
        }

        if(s.top() == str[i]) {
            s.pop();
            continue;
        }

        s.push(str[i]);
    }

    if(s.empty()) {
        printf("Empty String\n");
        return 0;
    }

    stack<char> temp;
    while(!s.empty()) {
        temp.push(s.top());
        s.pop();
    }

    while(!temp.empty()) {
        printf("%c", temp.top());
        temp.pop();
    }
    printf("\n");
    return 0;
}

{% endhighlight %}
</div>
