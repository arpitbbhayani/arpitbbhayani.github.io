---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Set Matrix Zeroes on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Set Matrix Zeroes Solution
tags:
- competitive-programming
- programming
title: LEETCODE set-matrix-zeroes Solution
---
The correct, optimal and working solution for programming question [set-matrix-zeroes](https://leetcode.com/problems/set-matrix-zeroes/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/set-matrix-zeroes/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

void setZeroes(int** matrix, int matrixRowSize, int matrixColSize) {
    int row = matrixRowSize;
    int col = matrixColSize;

    int zrow = 0;
    int zcol = 0;

    for(int i = 0 ; i < col; i++) {
        if(matrix[0][i] == 0) {
            zrow = 1;
        }
    }

    for(int i = 0 ; i < row; i++) {
        if(matrix[i][0] == 0) {
            zcol = 1;
        }
    }

    for(int i = 1 ; i < row; i++) {
        for(int j = 1 ; j < col; j++) {
            if(matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for(int i = 1 ; i < row; i++) {
        for(int j = 1 ; j < col; j++) {
            if(matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if(zrow) {
        for(int i = 0 ; i < col; i++) {
            matrix[0][i] = 0;
        }
    }

    if(zcol) {
        for(int i = 0 ; i < row; i++) {
            matrix[i][0] = 0;
        }
    }
}

int main(int argc, char *argv[]) {
    int row, col;
    scanf("%d%d", &row, &col);

    int **arr = (int **) malloc(row * sizeof(int *));
    for(int i = 0 ; i < row; i++) {
        arr[i] = (int *) malloc(col * sizeof(int));
    }

    for(int i = 0 ; i < row ; i++) {
        for(int j = 0 ; j < col; j++) {
            scanf("%d", &arr[i][j]);
        }
    }

    setZeroes(arr, row, col);

    for(int i = 0 ; i < row ; i++) {
        for(int j = 0 ; j < col; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}

{% endhighlight %}
</div>
