---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for next-permutation
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