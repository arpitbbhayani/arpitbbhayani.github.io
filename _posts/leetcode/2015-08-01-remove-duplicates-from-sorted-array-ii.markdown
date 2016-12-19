---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question remove-duplicates-from-sorted-array-ii
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - remove-duplicates-from-sorted-array-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE remove-duplicates-from-sorted-array-ii Solution
---
The correct, optimal and working solution for programming question remove-duplicates-from-sorted-array-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int removeDuplicates(int A[], int n) {
        
        if( n == 0 ) {
            return 0;
        }
        
        int count = 1;
        int last = A[0];
        int index = 1;
        
        for( int i = 1 ; i < n ; i++ ) {
            
            if( A[i] == last && count == 1 ) {
                A[index++] = A[i];
                count++;
            }
            else if( A[i] == last ) {
                
            }
            else {
                A[index++] = A[i];
                count = 1;
                last = A[i];
            }
            
        }
        return index;
    }
};

{% endhighlight %}
</div>
