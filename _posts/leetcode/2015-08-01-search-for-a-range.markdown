---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question search-for-a-range on
    leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question search-for-a-range on leetcode
---

Following is the solution for Leetcode Question: [search-for-a-range](https://leetcode.com/problems/search-for-a-range/)

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