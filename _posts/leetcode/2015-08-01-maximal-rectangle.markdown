---
categories: leetcode
comments: true
img: http://hdwallpapershub.net/wallpapers/l/1280x800/57/typography_code_javascript_black_background_programmer_syntax_1280x800_56614.jpg
layout: post
tags:
- competitive-programming
title: Leetcode solution for maximal-rectangle
---

Following is the solution for Leetcode Question: [maximal-rectangle](https://leetcode.com/problems/maximal-rectangle/)

{% highlight cpp %}
class Solution {
public:
    int maximalRectangle(vector<vector<char> > &matrix) {
        
        int result = INT_MIN;
        int row = matrix.size();
        
        if( row == 0 ) {
            return 0;
        }
        
        int col = matrix[0].size();
        
        /*if( row == 1 && col == 1 ) {
            return matrix[0][0] - '0';
        }*/
        
        int array[row][col];
        
        for( int i = 0 ; i < row ; i++ ) {
            for( int j = 0 ; j < col; j++ ) {
                if( i == 0 ) {
                    array[i][j] = matrix[i][j] - '0';
                }
                else {
                    if( matrix[i][j] == '0' ) {
                        array[i][j] = 0;
                    }
                    else {
                        // matrix[i][j] has to be 1
                        array[i][j] = array[i-1][j] + (matrix[i][j] - '0');
                    }
                }
            }
            
            stack<int> s;
            int k = 0;
            int m = INT_MIN;
            while( k < col ) {
                if( s.empty() || array[i][k] > array[i][s.top()] ) {
                    s.push(k);
                    k++;
                }
                else {
                    int tp = s.top();
                    s.pop();
                    
                    int h = array[i][tp];
                    int w = (s.empty()) ? k : (k - s.top() - 1);
                    int area = h * w;
                    m = max(m,area);
                }
            }
            
            while( s.empty() == false ) {
                int tp = s.top();
                s.pop();
                int h = array[i][tp];
                int w = (s.empty()) ? k : (k - s.top() - 1);
                int area = h * w;
                m = max(m,area);
            }
            
            result = max(result,m);
            
        }
        return result;
    }
};
{% endhighlight %}