---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
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