---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Cut The Sticks on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Cut The Sticks Solution
tags:
- competitive-programming
- programming
title: HACKERRANK cut-the-sticks Solution
---
The correct, optimal and working solution for programming question [cut-the-sticks](https://www.hackerrank.com/challenges/cut-the-sticks) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/cut-the-sticks" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

class AscCompare {
public:
    bool operator()(int x, int y) {
        return x > y;
    }
};

priority_queue<int, vector<int>, AscCompare> q;
priority_queue<int> qt;

int main(int argc, char *argv[]) {
    int n, x;
    scanf("%d", &n);

    while(n--) {
        scanf("%d", &x);
        q.push(x);
    }

    while(!q.empty()) {
        cout << q.size() << endl;
        int cut_length = q.top();
        q.pop();

        while(!q.empty()) {
            int temp = q.top();
            temp -= cut_length;

            if(temp > 0) {
                qt.push(temp);
            }
            q.pop();
        }

        while(!qt.empty()) {
            q.push(qt.top());
            qt.pop();
        }
    }

    return 0;
}

{% endhighlight %}
</div>
