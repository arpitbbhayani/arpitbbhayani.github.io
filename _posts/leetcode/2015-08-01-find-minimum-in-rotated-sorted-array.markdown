---
layout: post
title: find-minimum-in-rotated-sorted-array
author: Arpit Bhayani
categories: leetcode
comments: true
---

Leetcode Question Code: [find-minimum-in-rotated-sorted-array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

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