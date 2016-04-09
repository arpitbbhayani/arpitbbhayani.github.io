---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question largest-rectangle-in-histogram
    on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question largest-rectangle-in-histogram on leetcode
---

Following is the solution for Leetcode Question: [largest-rectangle-in-histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

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