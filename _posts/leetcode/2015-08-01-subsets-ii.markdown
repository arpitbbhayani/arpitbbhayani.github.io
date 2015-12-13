---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for subsets-ii
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