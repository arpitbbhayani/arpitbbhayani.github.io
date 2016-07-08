---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question best-time-to-buy-and-sell-stock-ii
    on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - best-time-to-buy-and-sell-stock-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE best-time-to-buy-and-sell-stock-ii Solution
---
The correct, optimal and working solution for programming question best-time-to-buy-and-sell-stock-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
