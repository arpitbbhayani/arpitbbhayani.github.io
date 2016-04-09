---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question subsets-ii on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question subsets-ii on leetcode
---

Following is the solution for Leetcode Question: [subsets-ii](https://leetcode.com/problems/subsets-ii/)

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