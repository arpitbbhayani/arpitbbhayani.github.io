---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Swap Nodes Algo on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Swap Nodes Algo Solution
tags:
- competitive-programming
- programming
title: HACKERRANK swap-nodes-algo Solution
---
The correct, optimal and working solution for programming question [swap-nodes-algo](https://www.hackerrank.com/challenges/swap-nodes-algo) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/swap-nodes-algo" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int larr[1025];
int rarr[1025];

void swap_nodes(int root, int k) {
    int cur_level = 0;
    queue<int> q;
    q.push(root);
    while(!q.empty()) {
        cur_level++;
        int count = q.size();
        while(count--) {
            int p = q.front();
            q.pop();

            if(cur_level % k == 0) {
                int t = larr[p];
                larr[p] = rarr[p];
                rarr[p] = t;
            }

            if(larr[p] != -1) {
                q.push(larr[p]);
            }
            if(rarr[p] != -1) {
                q.push(rarr[p]);
            }

        }
    }
}

void inorder(int root) {
    if(root == -1) {
        return;
    }
    inorder(larr[root]);
    printf("%d ", root);
    inorder(rarr[root]);
}

int main(int argc, char *argv[]) {
    int n;
    scanf("%d", &n);
    for(int i = 1 ; i <= n ; i++) {
        int a, b;
        scanf("%d%d", &a, &b);
        larr[i] = a;
        rarr[i] = b;
    }

    int t, k;
    scanf("%d", &t);
    while(t--) {
        scanf("%d", &k);
        swap_nodes(1, k);
        inorder(1);
        printf("\n");
    }
    return 0;
}

{% endhighlight %}
</div>
