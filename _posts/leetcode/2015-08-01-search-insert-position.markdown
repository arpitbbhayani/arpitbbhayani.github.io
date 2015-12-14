---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-insert-position
---

Following is the solution for Leetcode Question: [search-insert-position](https://leetcode.com/problems/search-insert-position/)

{% highlight cpp %}
#include <algorithm>

class Solution {
public:
    int searchInsert(int A[], int n, int target) {
        return (lower_bound(A,A+n,target) - A);
    }
};
{% endhighlight %}