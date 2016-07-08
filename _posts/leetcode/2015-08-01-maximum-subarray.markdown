---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question maximum-subarray on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - maximum-subarray Solution
tags:
- competitive-programming
- programming
title: LEETCODE maximum-subarray Solution
---
The correct, optimal and working solution for programming question maximum-subarray on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/maximum-subarray/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int maxSubArray(int A[], int n) {
        
        int flagn = 0 , flagp = 0;
        
        for( int i = 0 ; i < n ;i++ ) {
            if( A[i] < 0 ) {
                flagn = 1;
            }
            else {
                flagp = 1;
            }
            
            if( flagn == 1 && flagp == 1 )
            break;
            
        }
        
        int result = A[0];
        if( flagn == 1 && flagp == 0 ) {
            for( int i = 1; i < n ; i++ ) {
                result = max(result,A[i]);
            }
            return result;
        }
        
        result = 0;
        if( flagn == 0 && flagp == 1 ) {
            for( int i = 0 ; i < n ; i++ ) {
                result += A[i];
            }
            return result;
        }
        
        int temp = 0;
        for( int i = 0 ; i < n ;  i++ ) {
            temp += A[i];
            if( temp < 0 ) {
                temp = 0;
            }
            result = max(result,temp);
        }
        return result;
    }
};

{% endhighlight %}
</div>
