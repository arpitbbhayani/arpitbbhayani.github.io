---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question unique-paths-ii on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question unique-paths-ii on leetcode
---

Following is the solution for Leetcode Question: [unique-paths-ii](https://leetcode.com/problems/unique-paths-ii/)

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