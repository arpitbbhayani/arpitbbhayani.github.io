---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for find-minimum-in-rotated-sorted-array-ii
type: dummy
---

Following is the solution for Leetcode Question: [find-minimum-in-rotated-sorted-array-ii](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

{% highlight cpp %}
class Solution {
public:
    int findMin(vector<int> &num) {
        
        int m = num[0];
        for( int i = 1; i < num.size() ; i++ ) {
            m = min(m,num[i]);
        }
        return m;
        
    }
};
{% endhighlight %}