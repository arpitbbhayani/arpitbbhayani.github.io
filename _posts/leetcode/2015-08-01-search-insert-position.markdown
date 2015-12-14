---
categories: leetcode
comments: true
img: https://gun.io/static/uploads/web%20dev.jpg
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