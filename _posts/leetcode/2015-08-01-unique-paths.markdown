---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
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