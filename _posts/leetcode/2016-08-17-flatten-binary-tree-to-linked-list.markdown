---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Flatten Binary Tree To Linked List on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Flatten Binary Tree To Linked List Solution
tags:
- competitive-programming
- programming
title: LEETCODE flatten-binary-tree-to-linked-list Solution
---
The correct, optimal and working solution for programming question [flatten-binary-tree-to-linked-list](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

void flatten(struct TreeNode* root) {
    struct TreeNode *node = root;
    while(node) {
        if(node->left) {
            struct TreeNode *temp = node->left;
            while(temp->right) {
                temp = temp->right;
            }
            // temp is the rightmost in the left subtree
            temp->right = node->right;
            node->right = node->left;
            node->left = NULL;
        }
        node = node->right;
    }
}

struct TreeNode * new_node(int val) {
    struct TreeNode *t = (struct TreeNode *) malloc(sizeof(struct TreeNode));
    t->val = val;
    t->left = t->right = NULL;
    return t;
}

int main(int argc, char *argv[]) {
    struct TreeNode * root = NULL;

    root = new_node(1);
    root->left = new_node(2);
    root->right = new_node(5);
    root->left->left = new_node(3);
    root->left->right = new_node(4);
    root->right->right = new_node(6);

    flatten(root);

    struct TreeNode * temp = root;
    while(temp) {
        printf("%d\n", temp->val);
        temp = temp->right;
    }

    return 0;
}

{% endhighlight %}
</div>
