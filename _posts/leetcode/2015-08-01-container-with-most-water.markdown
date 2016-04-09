---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question container-with-most-water
    on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question container-with-most-water on leetcode
---

Following is the solution for Leetcode Question: [container-with-most-water](https://leetcode.com/problems/container-with-most-water/)

{% highlight cpp %}
class Solution {
public:
    int maxArea(vector<int> &height) {
        
        int result = INT_MIN;
        
        int low = 0 , high = height.size()-1;
        
        while ( low < high ) {
            
            int area = (high-low) * min(height[high] , height[low]);
            
            if( height[low] < height[high] ) {
                low++;
            }
            else {
                high--;
            }
            
            result = max(result,area);
            
        }
        
        return result;
    }
};
{% endhighlight %}