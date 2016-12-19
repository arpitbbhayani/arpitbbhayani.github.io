---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Binary Tree Preorder Traversal on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Binary Tree Preorder Traversal Solution
tags:
- competitive-programming
- programming
title: LEETCODE binary-tree-preorder-traversal Solution
---
The correct, optimal and working solution for programming question [binary-tree-preorder-traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/binary-tree-preorder-traversal/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
    struct node * left;
    struct node *right;
};


struct node * new_node(int val) {
    struct node *t = (struct node *) malloc(sizeof(struct node));
    t->val = val;
    t->left = t->right = NULL;
    return t;
}

void _preorder(struct node * root, vector<int> &order) {
    if(root == NULL) {
        return;
    }

    order.push_back(root->val);

    _preorder(root->left, order);
    _preorder(root->right, order);
}

vector<int> preorderTraversal(struct node * root) {
    vector<int> order;
    _preorder(root, order);
    return order;
}

int main(int argc, char *argv[]) {
    struct node * root = NULL;

    root = new_node(1);
    root->left = new_node(2);
    root->right = new_node(3);

    preorderTraversal(root);

    return 0;
}

{% endhighlight %}
</div>
