---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question longest-substring-without-repeating-characters
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - longest-substring-without-repeating-characters Solution
tags:
- competitive-programming
- programming
title: LEETCODE longest-substring-without-repeating-characters Solution
---
The correct, optimal and working solution for programming question longest-substring-without-repeating-characters on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/longest-substring-without-repeating-characters/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
        int n = s.length();
        int hash[256];
        
        for( int i = 0 ; i < 256; i++ ) {
            hash[i] = -1;
        }
        
        int i = 0;
        for( ; i < n ; i++ ) {
            if( hash[s[i]] == -1 ) {
                hash[s[i]] = i;
            }
            else {
                break;
            }
        }
        
        int start = 0 , end = i-1;
        int result = end-start + 1;
        
        for( i = i; i < n ; i++ ) {
            
            char c = s[i];
            int lastindex = hash[c];
            
            if( lastindex == -1 ) {
            }
            else if( lastindex != -1 && lastindex >= start ) {
                start = lastindex + 1;
            }
            
            end = i;
            hash[c] = i;
            result = max(result,end-start+1);
        }
        
        result = max(result,end-start+1);
        return result;
        
    }
};

{% endhighlight %}
</div>
