---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for minimum-path-sum
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