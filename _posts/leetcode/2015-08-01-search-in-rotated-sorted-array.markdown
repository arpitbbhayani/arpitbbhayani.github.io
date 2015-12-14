---
categories: leetcode
comments: true
img: https://gun.io/static/uploads/web%20dev.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-in-rotated-sorted-array
---

Following is the solution for Leetcode Question: [search-in-rotated-sorted-array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

{% highlight cpp %}
class Solution {
public:
    int search(int A[], int n, int target) {
        
        int low = 0 , high = n-1;
        
        while( low <= high ) {
            int mid = low + (high-low)/2;
            
            if( A[mid] == target ) {
                return mid;
            }
            else if( A[low] < A[mid] ) {
                if(target >= A[low] && target < A[mid]) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
            else if( A[low] > A[mid] ) {
                if( target > A[mid] && target <= A[high]) {
                    low = mid + 1;
                }
                else {
                    high = mid -1;
                }
            }
            else {
                low ++;
            }
            
        }
        
        return -1;
        
    }
};
{% endhighlight %}