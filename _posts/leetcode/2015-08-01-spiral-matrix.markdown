---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for spiral-matrix
---

Following is the solution for Leetcode Question: [spiral-matrix](https://leetcode.com/problems/spiral-matrix/)

{% highlight cpp %}
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int> > &matrix) {
        
        vector<int> result;
        
        int row = matrix.size();
        
        if( row == 0 ) {
            return result;
        }
        
        int col = matrix[0].size();
        
        if( row == 0 && col == 0 ) {
            return result;
        }
        
        if( row == 1 && col == 1 ) {
            result.push_back(matrix[0][0]);
            return result;
        }
        
        int left = 0, right = col;
        int top = 0, bottom = row;
        
        
        while(top < bottom && left < right) {
            
            if( top < bottom ) {
                for( int i = left; i < right ; i++ ) {
                    result.push_back(matrix[top][i]);
                }
                top++;
            }
            
            if( left < right ) {
                for( int i = top; i < bottom; i++) {
                    result.push_back(matrix[i][right-1]);
                }
                right--;
            }
            
            if( top < bottom ) {
                for( int i = right - 1; i >= left ; i-- ) {
                    result.push_back(matrix[bottom-1][i]);
                }
                bottom--;
            }
            
            if( left < right ) {
                for( int i = bottom - 1 ; i >= top ; i-- ) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
            
        }
        
        return result;
        
    }
};
{% endhighlight %}