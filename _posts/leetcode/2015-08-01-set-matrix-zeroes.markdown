---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for set-matrix-zeroes
---

Following is the solution for Leetcode Question: [set-matrix-zeroes](https://leetcode.com/problems/set-matrix-zeroes/)

{% highlight cpp %}
class Solution {
public:
    void setZeroes(vector<vector<int> > &matrix) {
        int row[matrix.size()], col[matrix[0].size()];
        
        for( int i = 0 ; i < matrix.size() ; i++ ) {
            row[i] = 1;
        }
        
        for( int i = 0 ; i < matrix[0].size() ; i++ ) {
            col[i] = 1;
        }
        
        for( int i = 0 ; i < matrix.size() ; i++ ) {
            for( int j = 0 ; j < matrix[i].size() ; j++ ) {
                if( matrix[i][j] == 0 ) {
                    row[i] = 0;
                    col[j] = 0;
                }
            }
        }
        
        for( int i = 0 ; i < matrix.size() ; i++ ) {
            for( int j = 0 ; j < matrix[i].size() ; j++ ) {
                if( row[i] == 0 || col[j] == 0 ) {
                    matrix[i][j] = 0;
                }
            }
        }
        
    }
};
{% endhighlight %}