---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Recover Binary Search Tree on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Recover Binary Search Tree Solution
tags:
- competitive-programming
- programming
title: LEETCODE recover-binary-search-tree Solution
---
The correct, optimal and working solution for programming question [recover-binary-search-tree](https://leetcode.com/problems/recover-binary-search-tree/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/recover-binary-search-tree/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

void _recoverTree(struct node * root,
                  struct node ** first, struct node ** second,
                  struct node ** third, struct node ** prev) {

    if(root == NULL) {
        return;
    }

    _recoverTree(root->left, first, second, third, prev);

    if( *prev != NULL && root->val < (*prev)->val) {
        if(*first == NULL) {
            *first = *prev;
            *second = root;
        }
        else {
            *third = root;
        }
    }

    *prev = root;
    _recoverTree(root->right, first, second, third, prev);

}

void recoverTree(struct node * root) {
    struct node * first = NULL, * second = NULL, * third = NULL;
    struct node * prev = NULL;

    _recoverTree(root, &first, &second, &third, &prev);

    if(first && third) {
        int t = first->val;
        first->val = third->val;
        third->val = t;
    }
    else {
        int t = first->val;
        first->val = second->val;
        second->val = t;
    }
}

int main(int argc, char *argv[]) {
    struct node * root = NULL;

    root = new_node(5);
    root->left = new_node(3);
    root->right = new_node(1);
    root->left->left = new_node(7);
    root->left->right = new_node(4);
    root->left->left->right = new_node(2);
    root->right->right = new_node(8);

    recoverTree(root);

    return 0;
}

{% endhighlight %}
</div>
