---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for longest-consecutive-sequence
type: dummy
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