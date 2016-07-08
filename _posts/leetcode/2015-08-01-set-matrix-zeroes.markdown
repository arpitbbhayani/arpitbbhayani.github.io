---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question set-matrix-zeroes on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - set-matrix-zeroes Solution
tags:
- competitive-programming
- programming
title: LEETCODE set-matrix-zeroes Solution
---
The correct, optimal and working solution for programming question set-matrix-zeroes on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/set-matrix-zeroes/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
