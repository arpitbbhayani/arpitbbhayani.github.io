---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question first-missing-positive
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - first-missing-positive Solution
tags:
- competitive-programming
- programming
title: LEETCODE first-missing-positive Solution
---
The correct, optimal and working solution for programming question first-missing-positive on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/first-missing-positive/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:

    int f( int * A , int n ) {
        
        for( int i = 0 ; i < n ; i++ ) {
            int index = abs(A[i]) - 1;
            if( index < n && A[index] > 0 ) {
                A[index] *= -1;
            }
        }
        
        int i = 0;
        for( ; i < n ; i++ ) {
            if( A[i] > 0 ) {
                break;
            }
        }
        
        return i + 1;
    }

    int firstMissingPositive(int A[], int n) {
        
        int index = 0;
        for( int i = 0 ; i < n ; i++ ) {
            if( A[i] <= 0 ) {
                int t = A[i];
                A[i] = A[index];
                A[index] = t;
                index++;
            }
        }
        //cout << "Index = " << index << " and a[index] = " << A[index] << endl;
        return f(&A[index], n - index);
        
    }
};

{% endhighlight %}
</div>
