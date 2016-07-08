---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question spiral-matrix-ii on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - spiral-matrix-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE spiral-matrix-ii Solution
---
The correct, optimal and working solution for programming question spiral-matrix-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/spiral-matrix-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
