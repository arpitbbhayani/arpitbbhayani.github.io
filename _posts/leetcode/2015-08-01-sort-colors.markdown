---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question sort-colors on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - sort-colors Solution
tags:
- competitive-programming
- programming
title: LEETCODE sort-colors Solution
---
The correct, optimal and working solution for programming question sort-colors on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/sort-colors/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    void sortColors(int A[], int n) {
        int c[3] = {0};
        
        for( int i = 0 ; i < n ; i++ ) {
            c[A[i]]++;
        }
        
        int k = 0;
        int index = 0;
        while ( index < 3 ) {
            for( int i = 0 ; i < c[index] ; i++ ) {
                A[k++] = index;
            }
            index++;
        }
    }
};

{% endhighlight %}
</div>
