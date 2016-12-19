---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question search-in-rotated-sorted-array
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - search-in-rotated-sorted-array Solution
tags:
- competitive-programming
- programming
title: LEETCODE search-in-rotated-sorted-array Solution
---
The correct, optimal and working solution for programming question search-in-rotated-sorted-array on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/search-in-rotated-sorted-array/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
