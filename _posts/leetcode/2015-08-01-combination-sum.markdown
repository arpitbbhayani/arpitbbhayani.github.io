---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for combination-sum
type: dummy
---

Following is the solution for Leetcode Question: [combination-sum](https://leetcode.com/problems/combination-sum/)

{% highlight cpp %}
class Solution {
public:

    vector<int> buffer;
    vector< vector<int> > ans;

    void print( vector<int> &array, int n, int k, int target, int index ) {
    
    	if( target < 0 ) {
    		return;
    	}
    
    	if( target == 0 ) {
    	    ans.push_back(buffer);
    		/*for(int i = 0 ; i < index ; i++ ) {
    			cout << buffer[i] << " ";
    		}*/
    		return;
    	}
    
    	for( int i = k ; i < n ; i++ ) {
    	    buffer.push_back(array[i]);
    		//buffer[index] = array[i];
    		print(array,n, i,target-array[i],index+1);
    		buffer.pop_back();
    	}
    
    }
    

    vector<vector<int> > combinationSum(vector<int> &candidates, int target) {
        sort(candidates.begin(),candidates.end());
        print(candidates,candidates.size(),0,target,0);
        return ans;
    }
};
{% endhighlight %}