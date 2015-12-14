---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for combination-sum
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