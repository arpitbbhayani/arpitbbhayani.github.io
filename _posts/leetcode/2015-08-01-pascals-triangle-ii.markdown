---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question pascals-triangle-ii on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - pascals-triangle-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE pascals-triangle-ii Solution
---
The correct, optimal and working solution for programming question pascals-triangle-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/pascals-triangle-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    vector<int> getRow(int rowIndex) {
        
        vector<int> ans;
        ans.push_back(1);
        
        for( int i = 0 ; i < rowIndex ; i++ ) {
            ans.insert(ans.begin(),1);
            for( int j = 1 ; j < ans.size() - 1 ; j++ ) {
                ans[j] = ans[j] + ans[j+1];
            }
        }
        
        return ans;
    }
};

{% endhighlight %}
</div>
