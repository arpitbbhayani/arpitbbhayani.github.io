---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Queue using two stacks on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Queue using two stacks Solution
tags:
- competitive-programming
- programming
title: HACKERRANK queue-using-two-stacks Solution
---
The correct, optimal and working solution for programming question [queue-using-two-stacks](https://www.hackerrank.com/challenges/queue-using-two-stacks) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/queue-using-two-stacks" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

stack<int> s1;
stack<int> s2;
int front_val;

void enqueue(int x) {
    if(s1.empty()) {
        front_val = x;
    }
    s1.push(x);
}

void dequeue() {
    while(!s1.empty()) {
        s2.push(s1.top());
        s1.pop();
    }
    s2.pop();
    if(!s2.empty()) {
        front_val = s2.top();
    }
    while(!s2.empty()) {
        s1.push(s2.top());
        s2.pop();
    }
}

int front() {
    return front_val;
}

int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);

    while(t--) {
        int op;
        scanf("%d", &op);
        switch(op) {
            case 1:
                int x;
                scanf("%d", &x);
                enqueue(x);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                printf("%d\n", front());
                break;
        }

    }

    return 0;
}

{% endhighlight %}
</div>
