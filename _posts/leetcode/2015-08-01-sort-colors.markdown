---
categories: leetcode
comments: true
img: http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-6.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for sort-colors
---

Following is the solution for Leetcode Question: [sort-colors](https://leetcode.com/problems/sort-colors/)

{% highlight cpp %}
class Solution {
public:
    void sortColors(int A[], int n) {
        int c[3] = {0};
        
        for( int i = 0 ; i < n ; i++ ) {
            c[A[i]]++;
        }
        
        int k = 0;
        int index = 0;
        while ( index < 3 ) {
            for( int i = 0 ; i < c[index] ; i++ ) {
                A[k++] = index;
            }
            index++;
        }
    }
};
{% endhighlight %}