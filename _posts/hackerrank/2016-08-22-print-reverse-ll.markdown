---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Print in Reverse on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Print in Reverse Solution
tags:
- competitive-programming
- programming
title: HACKERRANK print-reverse-ll Solution
---
The correct, optimal and working solution for programming question [print-reverse-ll](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct Node {
    int data;
    struct Node *next;
};

struct Node * new_node(int v) {
    struct Node * p = (struct Node *) calloc(1, sizeof(struct Node));
    p->data = v;
    return p;
}

void ReversePrint(struct Node * head) {
    stack<int> s;
    while(head) {
        s.push(head->data);
        head = head->next;
    }

    while(!s.empty()) {
        printf("%d\n", s.top());
        s.pop();
    }
}

int main(int argc, char *argv[]) {
    struct Node * head = new_node(3);
    head->next = new_node(4);
    ReversePrint(head);
    return 0;
}

{% endhighlight %}
</div>
