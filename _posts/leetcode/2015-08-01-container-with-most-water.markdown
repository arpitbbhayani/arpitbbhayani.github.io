---
categories: leetcode
comments: true
img: https://gun.io/static/uploads/web%20dev.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for container-with-most-water
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