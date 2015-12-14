---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-a-2d-matrix
---

Following is the solution for Leetcode Question: [search-a-2d-matrix](https://leetcode.com/problems/search-a-2d-matrix/)

{% highlight cpp %}
class Solution {
public:
    bool searchMatrix(vector<vector<int> > &matrix, int target) {
        int rows = matrix.size();
        int cols = matrix[0].size();
        
        int i = 0, j = cols-1;
        
        while( 1 ) {
            
            if( matrix[i][j] == target ) {
                return true;
            }
            
            if( target < matrix[i][j] ) {
                j--;
            }
            else {
                i++;
            }
            
            if( i == rows || j == -1 ) {
                return false;
            }
            
        }
        
        return false;
        
    }
};
{% endhighlight %}