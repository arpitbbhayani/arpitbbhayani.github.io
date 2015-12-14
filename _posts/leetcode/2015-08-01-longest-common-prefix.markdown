---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for longest-common-prefix
---

Following is the solution for Leetcode Question: [longest-common-prefix](https://leetcode.com/problems/longest-common-prefix/)

{% highlight cpp %}
class Solution {
public:
    string longestCommonPrefix(vector<string> &strs) {
        string result;
        
        if( strs.size() == 0 ) {
            return result;
        }
        
        int len = INT_MAX;
        for( int i = 0 ; i < strs.size(); i++ ) {
            len = min(len,(int)strs[i].length());
        }
        
        for( int col = 0; col < len; col++ ) {
            
            int do_all_match = 1;
            for( int i = 0 ; i < strs.size() - 1 ; i++ ) {

                if( strs[i][col] == strs[i+1][col] ) {
                    
                }
                else {
                    do_all_match = 0;
                    break;
                }
            }
            
            if( do_all_match == 1 ) {
                result.push_back(strs[0][col]);
            }
            else {
                break;
            }
            
        }
        
        return result;
    }
};
{% endhighlight %}