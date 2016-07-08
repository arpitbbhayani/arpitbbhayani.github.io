---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question longest-consecutive-sequence
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - longest-consecutive-sequence Solution
tags:
- competitive-programming
- programming
title: LEETCODE longest-consecutive-sequence Solution
---
The correct, optimal and working solution for programming question longest-consecutive-sequence on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/longest-consecutive-sequence/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
