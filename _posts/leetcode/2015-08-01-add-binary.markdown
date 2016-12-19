---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question add-binary on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - add-binary Solution
tags:
- competitive-programming
- programming
title: LEETCODE add-binary Solution
---
The correct, optimal and working solution for programming question add-binary on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/add-binary/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    string addBinary(string a, string b) {
        
        string result;
        int la = a.length() - 1;
        int lb = b.length() - 1;
        
        int carry = 0;
        int sum = 0;
        
        while( la >= 0 && lb >= 0 ) {
            sum = (carry + (a[la] - '0') + (b[lb] - '0')) % 2;
            carry = (carry + (a[la] - '0') + (b[lb] - '0')) / 2;
            result.append<char>(1,sum+'0');
            la--;
            lb--;
        }
        
        while( la >= 0 ) {
            sum = (carry + (a[la] - '0')) % 2;
            carry = (carry + (a[la] - '0')) / 2;
            result.append<char>(1,sum+'0');
            la--;
        }
        
        while( lb >= 0 ) {
            sum = (carry + (b[lb] - '0')) % 2;
            carry = (carry + (b[lb] - '0')) / 2;
            result.append<char>(1,sum+'0');
            lb--;
        }
        
        if( carry == 1 ) {
            result.append<char>(1,'1');
        }
        
        
        reverse(result.begin(),result.end());
        return result;
    }
};

{% endhighlight %}
</div>
