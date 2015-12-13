---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for jump-game-ii
---

Following is the solution for Leetcode Question: [jump-game-ii](https://leetcode.com/problems/jump-game-ii/)

{% highlight cpp %}
class Solution {
    public:
        int jump(int A[], int n) {
            
            int count = 0;
            
            if( n == 0 || n == 1 ) {
                return 0;
            }
            
            for( int i = 0 ; i < n-1 ; ) {
                
                count++;
                
                int m = INT_MIN;
                int mi = i;
                int dest = i;
                int jumpsize = A[i];
                
                for( int j = 1; j <= jumpsize; j++ ) {
                    dest = i + j;
                    if( dest < n-1 && dest + A[dest] > m ) {
                        m = dest + A[dest];
                        mi = dest;
                    }
                    
                    if( dest >= n-1 ) {
                        return count;
                    }
                    
                }
                
                if( m == INT_MIN ) {
                    // Not possible
                    return -1;
                }
                else {
                    i = mi;
                }
                
            }
            
            return count;
            
        }
    };
{% endhighlight %}