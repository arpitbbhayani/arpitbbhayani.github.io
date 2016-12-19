---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Balanced Brackets on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Balanced Brackets Solution
tags:
- competitive-programming
- programming
title: HACKERRANK balanced-brackets Solution
---
The correct, optimal and working solution for programming question [balanced-brackets](https://www.hackerrank.com/challenges/balanced-brackets) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/balanced-brackets" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

char compliment(char s) {
    if(s == '(') return ')';
    if(s == '{') return '}';
    if(s == '[') return ']';
    return 0;
}

int process(char * str) {
    stack<char> s;
    for(int i = 0; str[i]; i++) {
        if(str[i] == '{' || str[i] == '(' || str[i] == '[') {
            s.push(compliment(str[i]));
        }
        else {
            if(s.empty()) {
                return 0;
            }
            char t = s.top();
            s.pop();

            if(t != str[i]) {
                return 0;
            }
        }
    }
    return s.empty() ? 1: 0;
}

int main(int argc, char *argv[]) {
    int t;
    char str[1024];
    char output[2][16] = {"NO", "YES"};

    scanf("%d", &t);
    while(t--) {
        scanf("%s", str);
        printf("%s\n", output[process(str)]);
    }

    return 0;
}

{% endhighlight %}
</div>
