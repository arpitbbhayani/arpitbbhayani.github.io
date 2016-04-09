---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question longest-consecutive-sequence
    on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question longest-consecutive-sequence on leetcode
---

Following is the solution for Leetcode Question: [longest-consecutive-sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

{% highlight cpp %}
class Solution {
public:
    int longestConsecutive(vector<int> &num) {
        
        map<int,int> m;
        int n = num.size();
        
    	for( int i = 0 ; i < n ; i++ ) {
    		m[num[i]] = 1;
    	}
    	
    	for( map<int,int>::iterator itr = m.begin(); itr != m.end(); itr++ ) {
    		int a = itr->first;
    		if( m.find(a-1) != m.end() ) {
    			itr->second = m[a-1] + 1;
    		}
    	}
    	
    	int m1 = INT_MIN;
    	for( map<int,int>::iterator itr = m.begin(); itr != m.end(); itr++ ) {
    		m1 = max(m1,itr->second);
    	}
    	
    	return m1;
    }
};
{% endhighlight %}