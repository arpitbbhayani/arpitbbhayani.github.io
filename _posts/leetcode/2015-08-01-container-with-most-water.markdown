---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question container-with-most-water
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - container-with-most-water Solution
tags:
- competitive-programming
- programming
title: LEETCODE container-with-most-water Solution
---
The correct, optimal and working solution for programming question container-with-most-water on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/container-with-most-water/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
