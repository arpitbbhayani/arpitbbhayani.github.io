---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
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