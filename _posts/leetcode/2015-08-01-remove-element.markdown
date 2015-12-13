---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
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