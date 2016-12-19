---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question combination-sum on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - combination-sum Solution
tags:
- competitive-programming
- programming
title: LEETCODE combination-sum Solution
---
The correct, optimal and working solution for programming question combination-sum on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/combination-sum/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
