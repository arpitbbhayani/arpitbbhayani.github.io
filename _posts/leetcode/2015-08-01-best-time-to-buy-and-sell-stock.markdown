---
categories: leetcode
comments: true
img: https://gun.io/static/uploads/web%20dev.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for best-time-to-buy-and-sell-stock
---

Following is the solution for Leetcode Question: [best-time-to-buy-and-sell-stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

{% highlight cpp %}
class Solution {
public:
    int maxProfit(vector<int> &prices) {
        
        if( prices.size() == 0)
            return 0;
        
        int minv = prices[0];
        int maxv = 0;
        
        for( int i = 1 ; i < prices.size() ; i++ ) {
            
            maxv = max(maxv,prices[i] - minv);
            minv = min(minv,prices[i]);
        }
        
        return maxv;
        
    }
};
{% endhighlight %}