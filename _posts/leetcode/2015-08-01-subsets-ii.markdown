---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question subsets-ii on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - subsets-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE subsets-ii Solution
---
The correct, optimal and working solution for programming question subsets-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/subsets-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    vector<vector<int> > subsetsWithDup(vector<int> &S) {
        set< vector<int> >s;
        vector< vector<int> > ans;
        vector<int> temp;
        
        sort(S.begin(), S.end());
        
        int len = 1 << S.size();
        
        for( int i = 0 ; i < len ; i++ ) {
            for(int j = 0 ; j < S.size() ; j++ ) {
                if( i & (1<<j) ) {
                    temp.push_back(S[j]);
                }
            }
            s.insert(temp);
            temp.clear();
        }
        
        for( set< vector<int> >::iterator itr = s.begin(); itr != s.end() ; itr++ ) {
            ans.push_back(*itr);
        }
        
        return ans;
        
    }
};

{% endhighlight %}
</div>
