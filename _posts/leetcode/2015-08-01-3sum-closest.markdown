---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question 3sum-closest on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - 3sum-closest Solution
tags:
- competitive-programming
- programming
title: LEETCODE 3sum-closest Solution
---
The correct, optimal and working solution for programming question 3sum-closest on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/3sum-closest/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

#include <algorithm>
#include <cmath>

class compar {
    bool operator()( int i, int j ) {
        return i < j;
    }
};

class Solution {
public:

    compar comparobject;

    int threeSumClosest(vector<int> &num, int target) {
        sort(num.begin(), num.end());

        int diff = INT_MAX;
        int ans = INT_MAX;

        for( int k = 0 ; k < num.size() ; k++ ) {

            int i = k+1, j = num.size()-1;

            while ( i < j ) {

                int localsum = num[i] + num[j] + num[k];
                int localdiff = abs(target - localsum);

                if( localdiff < diff ) {
                    diff = localdiff;
                    ans = localsum;
                }

                if( localsum < target ) {
                    i++;
                }
                else if ( localsum > target ) {
                    j--;
                }
                else {
                    break;
                }

            }
        }
        return ans;
    }
};

{% endhighlight %}
</div>
