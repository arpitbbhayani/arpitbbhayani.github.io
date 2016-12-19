---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question search-for-a-range on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - search-for-a-range Solution
tags:
- competitive-programming
- programming
title: LEETCODE search-for-a-range Solution
---
The correct, optimal and working solution for programming question search-for-a-range on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/search-for-a-range/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

#include <algorithm>

class Solution {
public:
    vector<int> searchRange(int A[], int n, int target) {
        
        vector<int> v;
        
        int indexa = lower_bound(A,A+n,target) - A;
        int indexb = upper_bound(A,A+n,target) - A;
		
		if( indexa == n ) {
			v.push_back(-1);
			v.push_back(-1);
			return v;
		}
		
		if( A[indexb-1] == target  ) {
			v.push_back(indexa);
			v.push_back(indexb-1);
			return v;
		}
		
		v.push_back(-1);
        v.push_back(-1);
        return v;
		
    }
};

{% endhighlight %}
</div>
