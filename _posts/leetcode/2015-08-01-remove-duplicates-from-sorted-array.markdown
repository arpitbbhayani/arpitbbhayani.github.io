---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question remove-duplicates-from-sorted-array
    on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question remove-duplicates-from-sorted-array on leetcode
---

Following is the solution for Leetcode Question: [remove-duplicates-from-sorted-array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

{% highlight cpp %}
class Solution {
public:
    int removeDuplicates(int A[], int n) {

        if( n == 0 ) {
            return 0;
        }

        int index = 1;
        int curr = A[0];
        for( int i = 1 ; i < n ; i++ ) {
            if( A[i] == curr ) {
                
            }
            else {
                A[index++] = A[i];
                curr = A[i];
            }
        }
        return index;
    }
};
{% endhighlight %}