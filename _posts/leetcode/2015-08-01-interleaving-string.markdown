---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question interleaving-string on
    leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - interleaving-string Solution
tags:
- competitive-programming
- programming
title: LEETCODE interleaving-string Solution
---
The correct, optimal and working solution for programming question interleaving-string on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/interleaving-string/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}

class Solution {
public:

    int **hash;

    int _is( string a, string b, string c, int ia, int ib, int ic, int la, int lb, int lc ) {

        if( hash[ia][ib] != -1 ) {
            return hash[ia][ib];
        }

    	if( ia == la && ib == lb && ic == lc ) {
    	    hash[ia][ib] = 1;
    		return 1;
    	}
    
    	if( ia == la && ib == lb && ic != lc ) {
    	    hash[ia][ib] = 0;
    		return 0;
    	}
    	
    	int flag1 = 0, flag2 = 0;
    	if( a[ia] == c[ic] ) {
    		flag1 = _is(a,b,c,ia+1,ib,ic+1,la,lb,lc);
    	}
    	
    	if( b[ib] == c[ic] ) {
    		flag2 = _is(a,b,c,ia,ib+1,ic+1,la,lb,lc);
    	}
    	
    	hash[ia][ib] = flag1 || flag2;
    	return flag1 || flag2;

    }

    bool isInterleave(string s1, string s2, string s3) {
        int la = s1.length();
    	int lb = s2.length();
    	int lc = s3.length();
    	
    	if( la + lb != lc ) {
    		return 0;
    	}
    	
    	if( la == 0 && lb == 0 && lc == 0 ) {
    	    return 1;
    	}
    	
    	hash = (int **) malloc(sizeof(int *) * (la+10));
    	for( int i = 0 ; i < la+10; i++ ) {
    	    hash[i] = (int *) malloc(sizeof(int) * (lb+10));
    	}
    	
    	for( int i = 0 ; i < (la+10) ; i++ ) {
    	    for(int j = 0 ; j < (lb+10) ; j++ ) {
    	        hash[i][j] = -1;
    	    }
    	}

    	return _is(s1,s2,s3,0,0,0,la,lb,lc);
    }
};

{% endhighlight %}
</div>
