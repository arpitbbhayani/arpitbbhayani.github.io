---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question largest-rectangle-in-histogram
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - largest-rectangle-in-histogram Solution
tags:
- competitive-programming
- programming
title: LEETCODE largest-rectangle-in-histogram Solution
---
The correct, optimal and working solution for programming question largest-rectangle-in-histogram on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/largest-rectangle-in-histogram/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int largestRectangleArea(vector<int> &height) {
        
        int n = height.size();
        stack<int> s;
        int result = 0;
        
        int i = 0;
        while( i < n ) {
            
            if( s.empty() || height[i] >= height[s.top()] ) {
                s.push(i);
                i++;
            }
            else {
                int tp = s.top();
                s.pop();
                int h = height[tp];
                int w = (s.empty()) ? i : (i-s.top()-1);
                int area = h * w;
                result = max(result,area);
            }
            
        }
        
        while( !s.empty() ) {
            int tp = s.top();
            s.pop();
            
            int h = height[tp];
            int w = (s.empty()) ? i : (i - s.top() - 1);
            int area = h * w;
            result = max(area,result);
            
        }
        
        return result;
    }
};

{% endhighlight %}
</div>
