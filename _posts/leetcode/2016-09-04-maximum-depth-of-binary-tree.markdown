---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Maximum Depth Of Binary Tree on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Maximum Depth Of Binary Tree Solution
tags:
- competitive-programming
- programming
title: LEETCODE maximum-depth-of-binary-tree Solution
---
The correct, optimal and working solution for programming question [maximum-depth-of-binary-tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/maximum-depth-of-binary-tree/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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


int maxDepth(struct node * root) {
    if(root == NULL) {
        return 0;
    }

    int l = maxDepth(root->left);
    int r = maxDepth(root->right);

    return 1 + ((l > r) ? l : r);
}

int main(int argc, char *argv[]) {
    struct node * root = NULL;

    root = new_node(1);
    root->left = new_node(1);
    root->right = new_node(15);
    root->right->left = new_node(6);
    root->right->right = new_node(20);

    printf("%d\n", maxDepth(root));

    return 0;
}

{% endhighlight %}
</div>
