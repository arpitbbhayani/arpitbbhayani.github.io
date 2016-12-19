---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question minimum-path-sum on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - minimum-path-sum Solution
tags:
- competitive-programming
- programming
title: LEETCODE minimum-path-sum Solution
---
The correct, optimal and working solution for programming question minimum-path-sum on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/minimum-path-sum/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int minPathSum(vector<vector<int> > &grid) {
        
        int m = grid.size();
        int n = grid[0].size();
        
        for( int i = 1 ; i < m ; i++ ) {
            grid[i][0] += grid[i-1][0];
        }
        
        for( int i = 1 ; i < n ; i++ ) {
            grid[0][i] += grid[0][i-1];
        }
        
        for( int i = 1 ; i < m ; i++ ) {
            for( int j = 1 ; j < n ; j++ ) {
                grid[i][j] += min(grid[i-1][j],grid[i][j-1]);
            }
        }
        
        return grid[m-1][n-1];
        
    }
};

{% endhighlight %}
</div>
