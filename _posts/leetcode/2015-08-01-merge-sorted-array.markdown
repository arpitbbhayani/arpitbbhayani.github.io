---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question merge-sorted-array on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - merge-sorted-array Solution
tags:
- competitive-programming
- programming
title: LEETCODE merge-sorted-array Solution
---
The correct, optimal and working solution for programming question merge-sorted-array on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/merge-sorted-array/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
