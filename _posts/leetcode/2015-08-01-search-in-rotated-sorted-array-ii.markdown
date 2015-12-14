---
categories: leetcode
comments: true
img: https://gun.io/static/uploads/web%20dev.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for search-in-rotated-sorted-array-ii
---

Following is the solution for Leetcode Question: [search-in-rotated-sorted-array-ii](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

{% highlight cpp %}
class Solution {
public:

    bool search(int A[], int n, int target) {
        
        int low = 0 , high = n-1;
        
        while( low <= high ) {
            
            int mid = low + (high-low)/2;
            
            if( A[mid] == target ) {
                return true;
            }
            
            if( A[low] < A[mid] ) {
                // left part is sorted
                
                if( target >= A[low] && target < A[mid] ) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
                
            }
            else if( A[low] > A[mid] ) {
                
                if( target > A[mid] && target <= A[high] ) {
                    low = mid + 1;
                }
                else {
                    high = mid - 1;
                }
                
            }
            else if( A[low] == A[mid] ) {
                low++;
            }
        }
        
        return false;
        
    }
};
{% endhighlight %}