---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question pascals-triangle on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - pascals-triangle Solution
tags:
- competitive-programming
- programming
title: LEETCODE pascals-triangle Solution
---
The correct, optimal and working solution for programming question pascals-triangle on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/pascals-triangle/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    vector<vector<int> > generate(int numRows) {
        
        vector< vector<int> > v;
        
        if( numRows == 0 ) {
            return v;
        }
        
        vector<int> t,u;
        t.push_back(1);
        v.push_back(t);
        
        for( int i = 1 ; i < numRows ; i++ ) {
            t = v[i-1];
            u.clear();
            int sum = 0;
            for( int j = 0 ; j < i ; j++ ) {
                u.push_back(sum+t[j]);
                sum = t[j];
            }
            u.push_back(1);
            v.push_back(u);
        }
        return v;
    }
};

{% endhighlight %}
</div>
