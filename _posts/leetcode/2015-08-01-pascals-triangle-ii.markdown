---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for pascals-triangle-ii
---

Following is the solution for Leetcode Question: [pascals-triangle-ii](https://leetcode.com/problems/pascals-triangle-ii/)

{% highlight cpp %}
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        
        vector<int> ans;
        ans.push_back(1);
        
        for( int i = 0 ; i < rowIndex ; i++ ) {
            ans.insert(ans.begin(),1);
            for( int j = 1 ; j < ans.size() - 1 ; j++ ) {
                ans[j] = ans[j] + ans[j+1];
            }
        }
        
        return ans;
    }
};
{% endhighlight %}