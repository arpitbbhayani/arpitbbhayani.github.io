---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for unique-paths
---

Following is the solution for Leetcode Question: [unique-paths](https://leetcode.com/problems/unique-paths/)

{% highlight cpp %}
class Solution {
public:
    int uniquePaths(int m, int n) {
        int array[m][n];
        
        for( int i = 0 ; i < m ; i++ ) {
            for( int j = 0 ; j < n ; j++ ) {
                if( i == 0 || j == 0 ) {
                    array[i][j] = 1;
                }
                else {
                    array[i][j] = array[i-1][j] + array[i][j-1];
                }
            }
        }
        return array[m-1][n-1];
    }
};
{% endhighlight %}