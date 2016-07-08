---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question unique-paths-ii on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - unique-paths-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE unique-paths-ii Solution
---
The correct, optimal and working solution for programming question unique-paths-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/unique-paths-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int> > &obstacleGrid) {
        
        int r = obstacleGrid.size();
        
        if( r == 0 ) return 0;
        
        int c = obstacleGrid[0].size();
        
        int temp[r][c];
        
        int i = 0;
        for( ; i < c ; i++ ) {
            if( obstacleGrid[0][i] == 1 ) {
                break;
            }
            else {
                temp[0][i] = 1;
            }
        }
        
        while ( i < c ) {
            temp[0][i] = 0;
            i++;
        }
        
        i = 0;
        for( ; i < r ; i++ ) {
            if( obstacleGrid[i][0] == 1 ) {
                break;
            }
            else {
                temp[i][0] = 1;
            }
        }
        
        while ( i < r ) {
            temp[i][0] = 0;
            i++;
        }
        
        for( int i = 1 ; i < r ; i++ ) {
            for( int j  = 1 ; j < c ; j++ ) {
                
                if( obstacleGrid[i][j] == 1 ) {
                    temp[i][j] = 0;
                }
                else {
                    temp[i][j] = temp[i-1][j] + temp[i][j-1];
                }
                
            }
        }
        return temp[r-1][c-1];
    }
};

{% endhighlight %}
</div>
