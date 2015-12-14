---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
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