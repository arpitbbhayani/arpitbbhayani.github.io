---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Insert a node at a specific position in a linked list on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Insert a node at a specific position in a linked list Solution
tags:
- competitive-programming
- programming
title: HACKERRANK insert-specific-ll Solution
---
The correct, optimal and working solution for programming question [insert-specific-ll](https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct Node * InsertNth(Node *head, int data, int position) {
    struct Node * p = head;
    struct Node * t = new_node(data);

    if(p == NULL && position == 0) {
        return t;
    }

    if(position == 0) {
        t->next = head;
        return t;
    }

    while(--position) {
        p = p->next;
    }
    t->next = p->next;
    p->next = t;

    return head;
}

int main(int argc, char *argv[]) {
    struct Node * head = new_node(3);
    head = InsertNth(head, 4, 0);
    head = InsertNth(head, 5, 2);
    Print(head);
    return 0;
}

{% endhighlight %}
</div>
