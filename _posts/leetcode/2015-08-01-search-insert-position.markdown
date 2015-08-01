---
layout: post
title: search-insert-position
author: Arpit Bhayani
categories: leetcode
comments: true
---

Leetcode Question Code: [search-insert-position](https://leetcode.com/problems/search-insert-position/)

{% highlight cpp %}
#include <algorithm>

class Solution {
public:
    int searchInsert(int A[], int n, int target) {
        return (lower_bound(A,A+n,target) - A);
    }
};
{% endhighlight %}