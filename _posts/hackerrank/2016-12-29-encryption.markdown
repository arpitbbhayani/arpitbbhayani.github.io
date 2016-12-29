---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Encryption on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Encryption Solution
tags:
- competitive-programming
- programming
title: HACKERRANK encryption Solution
---
The correct, optimal and working solution for programming question [encryption](https://www.hackerrank.com/challenges/encryption) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/encryption" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  http://arpitbhayani.me
 */
#include <cmath>
#include <cstdio>
#include <cstring>
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

char str[100];
char arr[10][10];
int main(int argc, char *argv[]) {
    int index = 0;
    scanf("%s", str);
    int len = strlen(str);
    int cols = sqrt(len);

    if(cols * cols != len) {
        cols++;
    }

    for(int i = 0 ; str[index] ; i++) {
        for(int j = 0 ; j < cols && str[index]; j++) {
            arr[i][j] = str[index++];
        }
    }

    for(int j = 0 ; j < cols; j++) {
        for(int i = 0 ; arr[i][j]; i++) {
            printf("%c", arr[i][j]);
        }
        printf(" ");
    }

    printf("\n");

    return 0;
}

{% endhighlight %}
</div>
