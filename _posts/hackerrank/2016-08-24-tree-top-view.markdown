---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Tree Top View on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Tree Top View Solution
tags:
- competitive-programming
- programming
title: HACKERRANK tree-top-view Solution
---
The correct, optimal and working solution for programming question [tree-top-view](https://www.hackerrank.com/challenges/tree-top-view) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/tree-top-view" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    int data;
    struct node * left;
    struct node * right;
};

struct node * new_node(int v) {
    struct node * t = (struct node *) calloc(1, sizeof(struct node));
    t->data = v;
    return t;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

stack<struct node *> s;
void top_view(struct node * root) {

    struct node * p = root;
    while(p) {
        s.push(p);
        p = p->left;
    }

    while(!s.empty()) {
        printf("%d ", s.top()->data);
        s.pop();
    }

    p = root->right;
    while(p) {
        printf("%d ", p->data);
        p = p->right;
    }

    printf("\n");
}

int main(int argc, char *argv[]) {
    struct node * root = new_node(3);
    root->left = new_node(5);
    root->right = new_node(2);

    root->left->left = new_node(1);
    root->left->right = new_node(4);

    root->right->left = new_node(6);
    root->right->right = new_node(7);

    root->left->left->right = new_node(9);
    root->right->right->left = new_node(8);

    top_view(root);

    return 0;
}

{% endhighlight %}
</div>
