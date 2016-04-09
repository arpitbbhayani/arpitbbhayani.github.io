---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question minimum-path-sum on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question minimum-path-sum on leetcode
---

Following is the solution for Leetcode Question: [minimum-path-sum](https://leetcode.com/problems/minimum-path-sum/)

{% highlight cpp %}
class Solution {
public:
    int minPathSum(vector<vector<int> > &grid) {
        
        int m = grid.size();
        int n = grid[0].size();
        
        for( int i = 1 ; i < m ; i++ ) {
            grid[i][0] += grid[i-1][0];
        }
        
        for( int i = 1 ; i < n ; i++ ) {
            grid[0][i] += grid[0][i-1];
        }
        
        for( int i = 1 ; i < m ; i++ ) {
            for( int j = 1 ; j < n ; j++ ) {
                grid[i][j] += min(grid[i-1][j],grid[i][j-1]);
            }
        }
        
        return grid[m-1][n-1];
        
    }
};
{% endhighlight %}