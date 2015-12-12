---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-insert-position
type: dummy
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