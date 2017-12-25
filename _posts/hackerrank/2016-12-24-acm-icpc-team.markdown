---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question ACM ICPC Team on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - ACM ICPC Team Solution
tags:
- competitive-programming
- programming
title: HACKERRANK acm-icpc-team Solution
---
The correct, optimal and working solution for programming question [acm-icpc-team](https://www.hackerrank.com/challenges/acm-icpc-team) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/acm-icpc-team" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
/*
 *  Author: Arpit Bhayani
 *  https://arpitbhayani.me
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


char arr[501][501];
int main(int argc, char *argv[]) {
    int n, m;
    scanf("%d%d", &n, &m);
    getchar();
    for(int i = 0 ; i < n ; i++) {
        scanf("%s", arr[i]);
    }

    int count = 0;
    int max_count = -1;
    for(int i = 0; i < n ; i++) {
        for(int j = i + 1; j < n; j++) {
            int local_count = 0;
            for(int k = 0; k < m; k++) {
                local_count += ((arr[i][k] - '0') | (arr[j][k] - '0'));
            }
            if(local_count > max_count) {
                max_count = local_count;
                count = 0;
            }

            if(local_count == max_count) {
                count++;
            }
        }
    }
    printf("%d\n%d\n", max_count, count);
    return 0;
}

{% endhighlight %}
</div>
