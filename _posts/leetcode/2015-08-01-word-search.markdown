---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question word-search on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - word-search Solution
tags:
- competitive-programming
- programming
title: LEETCODE word-search Solution
---
The correct, optimal and working solution for programming question word-search on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/word-search/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:
    
    int ** visited;
    
    const char * str;
    
    int row = 0 , col = 0;
    
    int nx[4] = {-1,1,0,0};
    int ny[4] = {0,0,-1,1};
    
    bool issafe( int x, int y ) {
        if( x >=  0 && x < row && y >= 0 && y < col ) {
            return true;
        }
        return false;
    }
    
    bool check( vector< vector<char> > &board, int i, int j, const char * str ) {
        
        if( visited[i][j] == 1 ) {
            return false;
        }
        
        if( board[i][j] == *str && *(str+1) == '\0' ) {
            return true;
        }
        
        visited[i][j] = 1;
        
        if( board[i][j] == *str ) {
            for( int k = 0 ; k < 4 ; k++ ) {
                int newx = i + nx[k];
                int newy = j + ny[k];
                
                if( issafe(newx,newy) ) {
                    bool temp = check(board,newx,newy,str+1);
                    if( temp == true ) {
                        return true;
                    }
                }
            }
        }
        
        visited[i][j] = 0;
        
        return false;
        
    }
    
    bool exist(vector<vector<char> > &board, string word) {
        
        str = word.c_str();
        row = board.size();
        col = board[0].size();
        
        
        visited = (int **) calloc(sizeof(int *) , row);
        for( int i = 0 ; i < row ; i++ ) {
            visited[i] = (int *) calloc(sizeof(int) , col);
        }
        
        for( int i = 0 ; i  < row ; i++ ) {
            for( int j = 0 ; j < col ; j++ ) {
                if( board[i][j] == str[0] ) {
                    bool ans = check(board,i,j,str);
                    if( ans == true ) {
                        return true;
                    }
                }
            }
        }
        
        return false;
        
    }
};

{% endhighlight %}
</div>
