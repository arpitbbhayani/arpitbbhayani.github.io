---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question 3sum-closest on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question 3sum-closest on leetcode
---

Following is the solution for Leetcode Question: [3sum-closest](https://leetcode.com/problems/3sum-closest/)

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
