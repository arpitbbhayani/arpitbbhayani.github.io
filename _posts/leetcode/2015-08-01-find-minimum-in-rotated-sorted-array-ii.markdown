---
layout: post
title: find-minimum-in-rotated-sorted-array-ii
author: Arpit Bhayani
categories: leetcode
comments: true
---

Leetcode Question Code: [find-minimum-in-rotated-sorted-array-ii](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

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