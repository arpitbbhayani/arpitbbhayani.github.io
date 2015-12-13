---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-for-a-range
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