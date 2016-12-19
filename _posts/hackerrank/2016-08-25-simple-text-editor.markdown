---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Simple Text Editor on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Simple Text Editor Solution
tags:
- competitive-programming
- programming
title: HACKERRANK simple-text-editor Solution
---
The correct, optimal and working solution for programming question [simple-text-editor](https://www.hackerrank.com/challenges/simple-text-editor) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/simple-text-editor" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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
#include <string.h>

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

stack<string> st;
int main(int argc, char *argv[]) {
    int t;
    scanf("%d", &t);

    string s = "";
    string temp;
    while(t--) {
        int q, k;
        scanf("%d", &q);

        switch(q) {
            case 1:
                st.push(s);
                cin >> temp;
                s = s + temp;
                break;
            case 2:
                st.push(s);
                scanf("%d", &k);
                s = s.substr(0, s.length() - k);
                break;
            case 3:
                scanf("%d", &k);
                cout << s[k-1] << endl;
                break;
            case 4:
                s = st.top();
                st.pop();
                break;
        }
    }

    return 0;
}

{% endhighlight %}
</div>
