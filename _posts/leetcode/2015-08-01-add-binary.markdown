---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for add-binary
---

Following is the solution for Leetcode Question: [add-binary](https://leetcode.com/problems/add-binary/)

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