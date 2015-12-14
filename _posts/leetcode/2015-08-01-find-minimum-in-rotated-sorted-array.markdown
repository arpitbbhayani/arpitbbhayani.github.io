---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for find-minimum-in-rotated-sorted-array
---

Following is the solution for Leetcode Question: [find-minimum-in-rotated-sorted-array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

{% highlight cpp %}
class Solution {
public:
    int findMin(vector<int> &num) {
        
        int n = num.size();
        
        if( n == 1 ) {
            return num[0];
        }
        
        int low = 0 , high = n-1;
        
        while ( low<= high ) {
            
            int mid = low + (high-low)/2;
            
            if( mid != n-1 && num[mid] > num[mid+1] ) {
                return num[mid + 1];
            }
            else if( mid != 0 && num[mid-1] > num[mid] ) {
                return num[mid];
            }
            else if (num[low] < num[mid] ) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return num[0];
    }
};
{% endhighlight %}