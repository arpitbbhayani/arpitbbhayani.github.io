---
categories: hackerrank
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Ema's Supercomputer on hackerrank
  tags:
  - solution
  - source code
  - programming
  - hackerrank
  - Ema's Supercomputer Solution
tags:
- competitive-programming
- programming
title: HACKERRANK two-pluses Solution
---
The correct, optimal and working solution for programming question [two-pluses](https://www.hackerrank.com/challenges/two-pluses) on hackerrank

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.hackerrank.com/challenges/two-pluses" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

char arr[16][16];

class compar {
public:
    bool operator() (int *a, int *b) {
        return a[2] < b[2];
    }
};

priority_queue< int *, vector<int *>, compar > q;

void make_all(int *plus, char ch) {
    for(int i = 0; i < plus[2]; i++) {
        arr[plus[0] + i][plus[1]] = ch;
        arr[plus[0] - i][plus[1]] = ch;
    }
    for(int j = 0; j < plus[2]; j++) {
        arr[plus[0]][plus[1] + j] = ch;
        arr[plus[0]][plus[1] - j] = ch;
    }
}

int process(int r, int c) {
    int max_area = -1;
    for(int i = 0 ; i < r; i++) {
        for(int j = 0 ; j < c; j++) {
            if(arr[i][j] == 'G') {
                int s = 1;
                int left = j - 1;
                int right = j + 1;
                int up = i - 1;
                int down = i + 1;

                while( left >= 0 && right < c && up >= 0 && down < r ) {
                    if(arr[i][left] != 'G' || arr[i][right] != 'G' || arr[up][j] != 'G' || arr[down][j] != 'G') {
                        break;
                    }
                    s++;

                    left--;
                    right++;
                    up --;
                    down++;
                }

                int *t = (int *) malloc(3 * sizeof(int));
                t[0] = i;
                t[1] = j;
                t[2] = s;
                q.push(t);
            }
        }
    }

    while(!q.empty()) {
        int *first_plus = q.top();

        priority_queue< int *, vector<int *>, compar > tq;
        make_all(first_plus, 'B');

        for(int i = 0 ; i < r; i++) {
            for(int j = 0 ; j < c; j++) {
                if(arr[i][j] == 'G') {
                    int s = 1;
                    int left = j - 1;
                    int right = j + 1;
                    int up = i - 1;
                    int down = i + 1;

                    while( left >= 0 && right < c && up >= 0 && down < r ) {
                        if(arr[i][left] != 'G' || arr[i][right] != 'G' || arr[up][j] != 'G' || arr[down][j] != 'G') {
                            break;
                        }
                        s++;

                        left--;
                        right++;
                        up --;
                        down++;
                    }

                    int *t = (int *) malloc(3 * sizeof(int));
                    t[0] = i;
                    t[1] = j;
                    t[2] = s;
                    tq.push(t);
                }
            }
        }

        int * seconds_plus = tq.top();

        max_area = MAX(max_area, ( (first_plus[2] - 1)*4 + 1) * ((seconds_plus[2] - 1)*4 + 1) );

        make_all(first_plus, 'G');
        while(!tq.empty()) {
            int *x = tq.top();
            free(x);
            tq.pop();
        }
        q.pop();
    }

    return max_area;
}

int main(int argc, char *argv[]) {
    int r, c;
    scanf("%d%d", &r, &c);
    for(int i = 0 ; i < r; i++) {
        scanf("%s", arr[i]);
    }

    printf("%d\n", process(r, c));

    return 0;
}

{% endhighlight %}
</div>
