---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for remove-element
---

Following is the solution for Leetcode Question: [remove-element](https://leetcode.com/problems/remove-element/)

{% highlight cpp %}
class Solution {
public:
    int removeElement(int A[], int n, int elem) {
        int index = 0;
        for( int i = 0 ; i < n ; i++ ) {
            if( A[i] == elem ) {
                
            }
            else {
                A[index++] = A[i];
            }
        }
        return index;
    }
};
{% endhighlight %}