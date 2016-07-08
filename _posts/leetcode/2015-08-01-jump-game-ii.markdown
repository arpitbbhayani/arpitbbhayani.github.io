---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question jump-game-ii on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - jump-game-ii Solution
tags:
- competitive-programming
- programming
title: LEETCODE jump-game-ii Solution
---
The correct, optimal and working solution for programming question jump-game-ii on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/jump-game-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
