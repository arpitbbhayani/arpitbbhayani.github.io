---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question combination-sum-ii on
    leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question combination-sum-ii on leetcode
---

Following is the solution for Leetcode Question: [combination-sum-ii](https://leetcode.com/problems/combination-sum-ii/)

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