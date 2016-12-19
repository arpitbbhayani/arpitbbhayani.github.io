---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question combination-sum-ii on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - combination-sum-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE combination-sum-ii Solution
---
The correct, optimal and working solution for programming question combination-sum-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/combination-sum-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:

    set< vector<int> > s;
    vector<int> buffer;
    vector< vector<int> > ans;

    void print( vector<int> &candidates, int n, int k, int target ) {

    	if( target < 0 ) {
    		return;
    	}
    
    	if( target == 0 ) {
    		s.insert(buffer);
    		//for( int i = 0 ; i  < buffer.size() ; i++ ) {
    		//	cout << buffer[i] << " ";
    		//}
    		//cout << endl;
    		return;
    	}
    	
    	for( int i = k ; i < n ; i++ ) {
    		buffer.push_back(candidates[i]);
    		print(candidates, n, i+1, target - candidates[i]);
    		buffer.pop_back();
    	}
    }

    vector<vector<int> > combinationSum2(vector<int> &num, int target) {
        
        int n = num.size();
        
        sort(num.begin(), num.end());
        
        print(num,n,0,target);
	
	    for( set< vector<int> >::iterator itr = s.begin() ; itr != s.end() ; itr++ ) {
		    ans.push_back(*itr);
	    }
	    
	    return ans;
        
    }
};

{% endhighlight %}
</div>
