---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Reverse Words In A String on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Reverse Words In A String Solution
tags:
- competitive-programming
- programming
title: LEETCODE reverse-words-in-a-string Solution
---
The correct, optimal and working solution for programming question [reverse-words-in-a-string](https://leetcode.com/problems/reverse-words-in-a-string/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/reverse-words-in-a-string/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

void reverse(char *str, int start, int end) {
    while(start < end) {
        char t = str[start];
        str[start] = str[end];
        str[end] = t;

        start++;
        end--;
    }
}

void reverseWords(char *s) {
    char *str = s;
    int length = 0;

    while(str[length]) { length++; }

    // remove trailing spaces
    int i = length - 1;
    while(str[i] == ' ') {
        i--;
    }
    str[i + 1] = '\0';

    // remove leading spaces
    i = 0;
    while(str[i] == ' ') {
        i++;
    }
    str = &str[i];

    // remove multiple spaces in between
    int index = 0;
    i = 0;
    while(str[i]) {
        if(str[i] == ' ') {
            while(str[i] == ' ') {
                i++;
            }
            i--;
        }
        str[index++] = str[i++];
    }
    str[index] = '\0';

    length = index;

    reverse(str, 0, length - 1);

    int start = 0, end = 0;
    for(int i = 0 ; str[i]; i++) {
        if(str[i] == ' ') {
            end = i - 1;
            reverse(str, start, end);
            start = i + 1;
        }
    }
    reverse(str, start, length - 1);

    index = 0;
    i = 0;
    while(str[i]) {
        s[index++] = str[i++];
    }
    s[index] = '\0';
}

int main(int argc, char *argv[]) {
    char str[1024];
    readline(str);
    reverseWords(str);
    printf("%s", str);
    return 0;
}

{% endhighlight %}
</div>
