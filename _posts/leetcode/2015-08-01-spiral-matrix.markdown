---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question spiral-matrix on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - spiral-matrix Solution
tags:
- competitive-programming
- programming
title: LEETCODE spiral-matrix Solution
---
The correct, optimal and working solution for programming question spiral-matrix on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/spiral-matrix/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
