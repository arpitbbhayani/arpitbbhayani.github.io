---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
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