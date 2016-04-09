---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question spiral-matrix-ii on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question spiral-matrix-ii on leetcode
---

Following is the solution for Leetcode Question: [spiral-matrix-ii](https://leetcode.com/problems/spiral-matrix-ii/)

{% highlight cpp %}
class Solution {
public:
    vector<vector<int> > generateMatrix(int n) {
        vector<int> row(n,0);
        vector< vector<int> > matrix;
        
        for( int i = 0 ; i < n ; i++ ) {
            matrix.push_back(row);
        }
        
        
        int left = 0, right = n, top = 0, bottom = n;
        int index = 1;
        
        while ( top < bottom && left < right ) {
            
            if( top < bottom ) {
                for( int i = left ; i < right ; i++ ) {
                    matrix[top][i] = index++;
                }
                top++;
            }
            
            if( left < right ) {
                for( int i = top; i < bottom ; i++ ) {
                    matrix[i][right-1] = index++;
                }
                right--;
            }
            
            if( top < bottom ) {
                for( int i = right-1; i >= left ; i-- ) {
                    matrix[bottom-1][i] = index++;
                }
                bottom--;
            }
            
            if( left < right ) {
                for( int i = bottom-1; i >= top ; i--) {
                    matrix[i][left] = index++;
                }
                left++;
            }
            
        }
        
        return matrix;
        
        
    }
};
{% endhighlight %}