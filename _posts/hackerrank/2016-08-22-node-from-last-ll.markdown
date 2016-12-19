---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Get Node Value on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Get Node Value Solution
tags:
- competitive-programming
- programming
title: HACKERRANK node-from-last-ll Solution
---
The correct, optimal and working solution for programming question [node-from-last-ll](https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct Node {
    int data;
    struct Node *next;
};

void Print(struct Node *head) {
    struct Node *p = head;
    while(p) {
        printf("%d\n", p->data);
        p = p->next;
    }
}

struct Node * new_node(int v) {
    struct Node * p = (struct Node *) calloc(1, sizeof(struct Node));
    p->data = v;
    return p;
}

int GetNode(struct Node * head,int positionFromTail) {
    struct Node * p = head;
    struct Node * q = p;

    while(positionFromTail--) {
        q = q->next;
    }

    while(q->next) {
        p = p->next;
        q = q->next;
    }

    return p->data;
}

int main(int argc, char *argv[]) {
    struct Node * headA = new_node(1);
    headA->next = new_node(2);
    headA->next->next = new_node(4);

    printf("%d\n", GetNode(headA, 0));
    printf("%d\n", GetNode(headA, 1));
    printf("%d\n", GetNode(headA, 2));
    return 0;
}

{% endhighlight %}
</div>
