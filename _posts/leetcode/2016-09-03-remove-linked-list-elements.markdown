---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Remove Linked List Elements on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Remove Linked List Elements Solution
tags:
- competitive-programming
- programming
title: LEETCODE remove-linked-list-elements Solution
---
The correct, optimal and working solution for programming question [remove-linked-list-elements](https://leetcode.com/problems/remove-linked-list-elements/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/remove-linked-list-elements/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct node {
    int val;
    struct node * next;
};

struct node * new_node(int d) {
    struct node * t = (struct node *) calloc(1, sizeof(struct node));
    t->val = d;
    return t;
}

void printList(struct node * head) {
    struct node * p = head;
    while(p) {
        printf("%d ", p->val);
        p = p->next;
    }
    printf("\n");
}

struct node * removeElements(struct node * head, int val) {
    struct node * helper_head = new_node(0);
    helper_head->next = head;

    struct node * p = helper_head;
    while(p->next) {
        if(p->next->val == val) {
            p->next = p->next->next;
        }
        else {
            p = p->next;
        }
    }

    return helper_head->next;
}

int main(int argc, char *argv[]) {
    struct node * head = new_node(2);
    head->next = new_node(1);
    head->next->next = new_node(3);
    head->next->next->next = new_node(4);
    head->next->next->next->next = new_node(5);
    head->next->next->next->next->next = new_node(6);

    printList(head);
    head = removeElements(head, 2);
    printList(head);

    return 0;
}

{% endhighlight %}
</div>
