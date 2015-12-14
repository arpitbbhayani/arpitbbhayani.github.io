---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for rotate-image
---

Following is the solution for Leetcode Question: [rotate-image](https://leetcode.com/problems/rotate-image/)

{% highlight cpp %}
class Solution {
public:
    void rotate(vector<vector<int> > &matrix) {
        
        int n = matrix.size();
        
        for( int i = 0 ; i < n-1 ; i++ ) {
            for( int j = i+1;  j < n ; j++ ) {
                int t = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = t;
            }
        }
        
        int start = 0 , end = n-1;
        
        for( int j = 0 ; j < n/2 ; j++  ) {
            
            for( int i = 0 ; i < n ; i++ ) {
                int t = matrix[i][start];
                matrix[i][start] = matrix[i][end];
                matrix[i][end] = t;
            }
            start++;
            end--;
        }
    }
};
{% endhighlight %}