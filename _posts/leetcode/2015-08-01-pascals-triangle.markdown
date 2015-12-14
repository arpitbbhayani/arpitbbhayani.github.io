---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for pascals-triangle
---

Following is the solution for Leetcode Question: [pascals-triangle](https://leetcode.com/problems/pascals-triangle/)

{% highlight cpp %}
class Solution {
public:
    vector<vector<int> > generate(int numRows) {
        
        vector< vector<int> > v;
        
        if( numRows == 0 ) {
            return v;
        }
        
        vector<int> t,u;
        t.push_back(1);
        v.push_back(t);
        
        for( int i = 1 ; i < numRows ; i++ ) {
            t = v[i-1];
            u.clear();
            int sum = 0;
            for( int j = 0 ; j < i ; j++ ) {
                u.push_back(sum+t[j]);
                sum = t[j];
            }
            u.push_back(1);
            v.push_back(u);
        }
        return v;
    }
};
{% endhighlight %}