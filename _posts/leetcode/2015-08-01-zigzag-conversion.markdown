---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for zigzag-conversion
---

Following is the solution for Leetcode Question: [zigzag-conversion](https://leetcode.com/problems/zigzag-conversion/)

{% highlight cpp %}
class Solution {
public:
    string convert(string s, int nRows) {
        vector< char > t[nRows];
        
        int index = 0;
        int direction = 1;
        
        for( int i = 0 ; i < s.length(); i++ ) {
            t[index].push_back(s[i]);
            index += direction;
            
            if( direction == 1 ) {
                index = min(index, nRows-1);
            }
            else {
                index = max(index,0);
            }
            
            if( index == nRows-1 || index == 0) {
                direction *= -1;
            }
            
        }
        
        string result;
        for( int i = 0 ; i < nRows ; i++ ) {
            for( int j = 0 ; j < t[i].size(); j++ ) {
                result.append<char>(1,t[i][j]);
            }
        }
        
        return result;
        
    }
};
{% endhighlight %}