---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question sort-colors on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question sort-colors on leetcode
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