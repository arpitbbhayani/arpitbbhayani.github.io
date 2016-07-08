---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question maximum-product-subarray
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - maximum-product-subarray Solution
tags:
- competitive-programming
- programming
title: LEETCODE maximum-product-subarray Solution
---
The correct, optimal and working solution for programming question maximum-product-subarray on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/maximum-product-subarray/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:

    int max3(int a, int b, int c) {
        return max(a,max(b,c));
    }
    
    int min3(int a, int b, int c) {
        return min(a,min(b,c));
    }

    int result;
    int maxp = INT_MIN, minn = INT_MAX;
    int oldmaxp, oldminn;

    int maxProduct(int A[], int n) {
        
        if(n == 0) {
            return 0;
        }
        
        result = A[0];
        oldmaxp = max(A[0],1);
        oldminn = min(A[0],1);
        
        for( int i = 1 ; i < n ; i++ ) {
            maxp = max3(oldmaxp * A[i], oldminn * A[i], A[i]);
            minn = min3(oldminn * A[i], oldmaxp * A[i], A[i]);
            result = max(result, maxp);
            oldmaxp = maxp;
            oldminn = minn;
        }
        return result;
        
    }
};

{% endhighlight %}
</div>
