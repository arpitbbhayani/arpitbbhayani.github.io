---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question pascals-triangle-ii on
    leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question pascals-triangle-ii on leetcode
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