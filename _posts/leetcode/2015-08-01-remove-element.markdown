---
layout: post
title: remove-element
author: Arpit Bhayani
categories: leetcode
comments: true
---

Leetcode Question Code: [remove-element](https://leetcode.com/problems/remove-element/)

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