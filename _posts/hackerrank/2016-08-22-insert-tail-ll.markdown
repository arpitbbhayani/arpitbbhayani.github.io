---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Insert a Node at the Tail of a Linked List on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Insert a Node at the Tail of a Linked List Solution
tags:
- competitive-programming
- programming
title: HACKERRANK insert-tail-ll Solution
---
The correct, optimal and working solution for programming question [insert-tail-ll](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct Node * Insert(struct Node *head, int data) {
    struct Node * p = head;
    if(p == NULL) {
        return new_node(data);
    }

    while(p->next) {
        p = p->next;
    }
    p->next = new_node(data);
    return head;
}

int main(int argc, char *argv[]) {
    struct Node * head = new_node(1);
    head->next = new_node(2);
    Insert(head, 3);
    return 0;
}

{% endhighlight %}
</div>
