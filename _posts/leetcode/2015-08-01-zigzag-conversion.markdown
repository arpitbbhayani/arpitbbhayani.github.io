---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question zigzag-conversion on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - zigzag-conversion Solution
tags:
- competitive-programming
- programming
title: LEETCODE zigzag-conversion Solution
---
The correct, optimal and working solution for programming question zigzag-conversion on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/zigzag-conversion/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    string convert(string s, int nRows) {
        vector< char > t[nRows];
        
        int index = 0;
        int direction = 1;
        
        for( int i = 0 ; i < s.length(); i++ ) {
            t[index].push_back(s[i]);
            index += direction;
            
            if( direction == 1 ) {
                index = min(index, nRows-1);
            }
            else {
                index = max(index,0);
            }
            
            if( index == nRows-1 || index == 0) {
                direction *= -1;
            }
            
        }
        
        string result;
        for( int i = 0 ; i < nRows ; i++ ) {
            for( int j = 0 ; j < t[i].size(); j++ ) {
                result.append<char>(1,t[i][j]);
            }
        }
        
        return result;
        
    }
};

{% endhighlight %}
</div>
