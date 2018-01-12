---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Tree Preorder Traversal on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Tree Preorder Traversal Solution
tags:
- competitive-programming
- programming
title: HACKERRANK tree-preorder-traversal Solution
---
The correct, optimal and working solution for programming question [tree-preorder-traversal](https://www.hackerrank.com/challenges/tree-preorder-traversal) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/tree-preorder-traversal" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

void preOrder(struct node * root) {
    if(root == NULL) {
        return;
    }

    printf("%d ", root->data);
    preOrder(root->left);
    preOrder(root->right);
}

int main(int argc, char *argv[]) {
    struct node * root = new_node(3);
    root->left = new_node(5);
    root->left->left = new_node(1);
    root->left->right = new_node(4);
    root->right = new_node(2);
    root->right->left = new_node(6);

    preOrder(root);
    printf("\n");

    return 0;
}

{% endhighlight %}
</div>
