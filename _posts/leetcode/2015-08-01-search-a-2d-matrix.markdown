---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question search-a-2d-matrix on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - search-a-2d-matrix Solution
tags:
- competitive-programming
- programming
title: LEETCODE search-a-2d-matrix Solution
---
The correct, optimal and working solution for programming question search-a-2d-matrix on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/search-a-2d-matrix/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
