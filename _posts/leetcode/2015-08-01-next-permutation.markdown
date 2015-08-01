---
layout: post
title: next-permutation
author: Arpit Bhayani
categories: leetcode
comments: true
---

Leetcode Question Code: [next-permutation](https://leetcode.com/problems/next-permutation/)

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