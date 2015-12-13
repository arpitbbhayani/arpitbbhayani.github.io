---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for best-time-to-buy-and-sell-stock-ii
---

Following is the solution for Leetcode Question: [best-time-to-buy-and-sell-stock-ii](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

{% highlight cpp %}
class Solution {
public:
    int maxProfit(vector<int> &prices) {

        int n = prices.size();

        if( n == 0 ) {
            return 0;            
        }

        int profit = 0;
        int buy = prices[0];
        int sell = INT_MIN;
        
        for( int i = 1 ; i < n ; i++ ) {
            
            if( prices[i] < prices[i-1] ) {
                sell = prices[i-1];
                profit += (sell-buy);
                buy = prices[i];
            }
            
        }
        sell = prices[n-1];
        profit += (sell-buy);
        return profit;
    }
};
{% endhighlight %}