---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for find-minimum-in-rotated-sorted-array-ii
---

Following is the solution for Leetcode Question: [find-minimum-in-rotated-sorted-array-ii](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

{% highlight cpp %}
class Solution {
public:
    int findMin(vector<int> &num) {
        
        int m = num[0];
        for( int i = 1; i < num.size() ; i++ ) {
            m = min(m,num[i]);
        }
        return m;
        
    }
};
{% endhighlight %}