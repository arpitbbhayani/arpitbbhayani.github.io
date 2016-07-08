---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question rotate-image on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - rotate-image Solution
tags:
- competitive-programming
- programming
title: LEETCODE rotate-image Solution
---
The correct, optimal and working solution for programming question rotate-image on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/rotate-image/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
