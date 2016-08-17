---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question Number Of Islands on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - Number Of Islands Solution
tags:
- competitive-programming
- programming
title: LEETCODE number-of-islands Solution
---
The correct, optimal and working solution for programming question [number-of-islands](https://leetcode.com/problems/number-of-islands/) on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/number-of-islands/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

int safe(int i, int j, int row, int col) {
    if(i >= 0 && j >= 0 && i < row && j < col) {
        return 1;
    }
    return 0;
}

void dfs(char **grid, int i, int j, int row, int col, int ** visited) {
    if(visited[i][j] == 1) {
        return;
    }

    int arrx[4] = {1, -1, 0, 0};
    int arry[4] = {0, 0, 1, -1};

    visited[i][j] = 1;
    for(int l = 0; l < 4; l++) {
        int ni = i + arrx[l];
        int nj = j + arry[l];

        if(safe(ni, nj, row, col) && grid[ni][nj] == '1') {
            dfs(grid, ni, nj, row, col, visited);
        }
    }
}

int numIslands(char** grid, int gridRowSize, int gridColSize) {
    int row = gridRowSize, col = gridColSize;

    int ** visited = (int **) calloc(row, sizeof(int *));
    for(int i = 0 ; i < row ; i++) {
        visited[i] = (int *) calloc(col, sizeof(int));
    }

    int count = 0;
    for(int i = 0 ; i < row; i++) {
        for(int j = 0 ; j < col; j++) {
            if(visited[i][j] == 0 && grid[i][j] == '1') {
                dfs(grid, i, j, row, col, visited);
                count++;
            }
        }
    }

    for(int i = 0 ; i < row ; i++) {
        free(visited[i]);
    }
    free(visited);
    return count;
}

int main(int argc, char *argv[]) {
    int row, col;
    scanf("%d%d", &row, &col);

    char **grid = (char **) malloc(row * sizeof(char *));
    for(int i = 0 ; i < row ; i++) {
        grid[i] = (char *) malloc((col + 1) * sizeof(char));
    }

    for(int i = 0 ; i < row ; i++) {
        scanf("%s", grid[i]);
    }
    printf("%d\n", numIslands(grid, row, col));
    return 0;
}

{% endhighlight %}
</div>
