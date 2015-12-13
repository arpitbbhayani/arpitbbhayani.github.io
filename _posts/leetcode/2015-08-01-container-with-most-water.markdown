---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
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