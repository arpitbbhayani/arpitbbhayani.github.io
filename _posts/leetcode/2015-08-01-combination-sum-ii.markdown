---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for combination-sum-ii
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