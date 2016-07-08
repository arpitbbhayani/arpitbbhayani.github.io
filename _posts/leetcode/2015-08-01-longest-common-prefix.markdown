---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question longest-common-prefix
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - longest-common-prefix Solution
tags:
- competitive-programming
- programming
title: LEETCODE longest-common-prefix Solution
---
The correct, optimal and working solution for programming question longest-common-prefix on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/longest-common-prefix/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        string result;
        
        if( strs.size() == 0 ) {
            return result;
        }
        
        int len = INT_MAX;
        for( int i = 0 ; i < strs.size(); i++ ) {
            len = min(len,(int)strs[i].length());
        }
        
        for( int col = 0; col < len; col++ ) {
            
            int do_all_match = 1;
            for( int i = 0 ; i < strs.size() - 1 ; i++ ) {

                if( strs[i][col] == strs[i+1][col] ) {
                    
                }
                else {
                    do_all_match = 0;
                    break;
                }
            }
            
            if( do_all_match == 1 ) {
                result.push_back(strs[0][col]);
            }
            else {
                break;
            }
            
        }
        
        return result;
    }
};

{% endhighlight %}
</div>
