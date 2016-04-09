---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question next-permutation on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question next-permutation on leetcode
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