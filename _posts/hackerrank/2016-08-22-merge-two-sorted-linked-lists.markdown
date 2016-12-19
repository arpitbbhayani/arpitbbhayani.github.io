---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Merge two sorted linked lists on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Merge two sorted linked lists Solution
tags:
- competitive-programming
- programming
title: HACKERRANK merge-two-sorted-linked-lists Solution
---
The correct, optimal and working solution for programming question [merge-two-sorted-linked-lists](https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct Node * MergeLists(struct Node * headA, struct Node * headB) {
    struct Node * head = NULL;

    struct Node * p = headA;
    struct Node * q = headB;

    if(p == NULL && q == NULL) {
        return NULL;
    }

    if(p == NULL && q != NULL) {
        head = q;
        q = q->next;
    }

    if(p != NULL && q == NULL) {
        head = p;
        p = p->next;
    }

    if(p && q && p->data <= q->data) {
        head = p;
        p = p->next;
    }
    else if(p && q && q->data <= q->data) {
        head = q;
        q = q->next;
    }

    struct Node * r = head;

    while(p && q) {
        if(p->data <= q->data) {
            r->next = p;
            p = p->next;
        }
        else {
            r->next = q;
            q = q->next;
        }
        r = r->next;
    }

    while(p) {
        r->next = p;
        p = p->next;
        r = r->next;
    }

    while(q) {
        r->next = q;
        q = q->next;
        r = r->next;
    }

    r->next = NULL;
    return head;
}

int main(int argc, char *argv[]) {
    struct Node * headA = new_node(1);
    headA->next = new_node(2);
    headA->next->next = new_node(4);

    struct Node * headB = new_node(1);
    headB->next = new_node(3);

    Print(MergeLists(headA, NULL));
    return 0;
}

{% endhighlight %}
</div>
