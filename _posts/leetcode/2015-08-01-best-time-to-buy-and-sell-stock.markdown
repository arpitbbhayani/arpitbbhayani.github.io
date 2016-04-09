---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question best-time-to-buy-and-sell-stock
    on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question best-time-to-buy-and-sell-stock on leetcode
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