---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for merge-sorted-array
---

Following is the solution for Leetcode Question: [merge-sorted-array](https://leetcode.com/problems/merge-sorted-array/)

{% highlight cpp %}
class Solution {
public:
    void merge(int A[], int m, int B[], int n) {
        int C[m+n];
        
        int i = 0 , j = 0, k = 0;
        while ( i < m && j < n ) {
            if( A[i] <= B[j] ) {
                C[k++] = A[i++];
            }
            else {
                C[k++] = B[j++];
            }
        }
        
        while ( i < m ) {
            C[k++] = A[i++];
        }
        
        while ( j < n ) {
            C[k++] = B[j++];
        }
        
        for( i = 0 ; i < m+n ; i++ ) {
            A[i] = C[i];
        }
        
    }
};
{% endhighlight %}