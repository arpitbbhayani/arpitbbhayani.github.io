---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question remove-element on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - remove-element Solution
tags:
- competitive-programming
- programming
title: LEETCODE remove-element Solution
---
The correct, optimal and working solution for programming question remove-element on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/remove-element/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int removeElement(int A[], int n, int elem) {
        int index = 0;
        for( int i = 0 ; i < n ; i++ ) {
            if( A[i] == elem ) {
                
            }
            else {
                A[index++] = A[i];
            }
        }
        return index;
    }
};

{% endhighlight %}
</div>
