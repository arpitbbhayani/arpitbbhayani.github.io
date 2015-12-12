---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for next-permutation
type: dummy
---

Following is the solution for Leetcode Question: [next-permutation](https://leetcode.com/problems/next-permutation/)

{% highlight cpp %}
class Solution {
public:
    void nextPermutation(vector<int> &num) {
        
        bool ans = next_permutation(num.begin(), num.end());
        if( ans == false ) {
            sort(num.begin(), num.end());
        }
    }
};
{% endhighlight %}