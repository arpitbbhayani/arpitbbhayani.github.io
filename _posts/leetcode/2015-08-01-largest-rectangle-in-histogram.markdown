---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for largest-rectangle-in-histogram
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