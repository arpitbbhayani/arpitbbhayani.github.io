---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question find-minimum-in-rotated-sorted-array-ii
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - find-minimum-in-rotated-sorted-array-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE find-minimum-in-rotated-sorted-array-ii Solution
---
The correct, optimal and working solution for programming question find-minimum-in-rotated-sorted-array-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int findMin(vector<int> &num) {
        
        int m = num[0];
        for( int i = 1; i < num.size() ; i++ ) {
            m = min(m,num[i]);
        }
        return m;
        
    }
};

{% endhighlight %}
</div>
