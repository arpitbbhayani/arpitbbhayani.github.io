---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Binary Tree Zigzag Level Order Traversal on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Binary Tree Zigzag Level Order Traversal Solution
tags:
- competitive-programming
- programming
title: LEETCODE binary-tree-zigzag-level-order-traversal Solution
---
The correct, optimal and working solution for programming question [binary-tree-zigzag-level-order-traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

vector< vector<int> > zigzagLevelOrder(struct node * root) {
    vector< vector<int> > v;

    if(root == NULL) {
        return v;
    }

    int current_level = 0;
    queue<struct node *> q;
    stack<int> s;

    q.push(root);
    while(!q.empty()) {
        current_level++;
        vector<int> level_vector;

        // Get from Queue and Put into stack
        int x = q.size();
        while(x--) {
            struct node * t = q.front();
            q.pop();
            if(current_level % 2 == 0) {
                s.push(t->val);
            }
            else {
                level_vector.push_back(t->val);
            }

            if(t->left) { q.push(t->left); }
            if(t->right) { q.push(t->right); }
        }

        if(current_level % 2 == 0) {
            while(!s.empty()) {
                level_vector.push_back(s.top());
                s.pop();
            }
        }
        v.push_back(level_vector);
    }

    return v;
}

int main(int argc, char *argv[]) {
    struct node * root = NULL;

    root = new_node(1);
    root->left = new_node(2);
    root->right = new_node(3);
    root->left->left = new_node(4);
    root->right->right = new_node(5);

    vector< vector<int> > v = zigzagLevelOrder(root);
    for(int i = 0 ; i < v.size(); i++) {
        for(int j = 0; j < v[i].size(); j++) {
            printf("%d ", v[i][j]);
        }
        printf("\n");
    }

    return 0;
}

{% endhighlight %}
</div>
