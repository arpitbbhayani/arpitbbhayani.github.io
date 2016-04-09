---
categories: leetcode
comments: true
img: https://s-media-cache-ak0.pinimg.com/736x/7e/ac/21/7eac217b7b1c55ab7fd56758e4e181be.jpg
layout: post
seo:
  description: Here is the solution for programming question insert-interval on leetcode
  tags:
  - solution
  - source code
  - programming
tags:
- competitive-programming
- programming
title: Solution for programming question insert-interval on leetcode
---

Following is the solution for Leetcode Question: [insert-interval](https://leetcode.com/problems/insert-interval/)

{% highlight cpp %}
/**
 * Definition for an interval.
 * struct Interval {
 *     int start;
 *     int end;
 *     Interval() : start(0), end(0) {}
 *     Interval(int s, int e) : start(s), end(e) {}
 * };
 */
class Solution {
public:
    vector<Interval> insert(vector<Interval> &intervals, Interval newInterval) {
        
        if( intervals.size() == 0 ) {
            intervals.push_back(newInterval);
            return intervals;
        }
        
        int i = 0;
        while( i < intervals.size() && intervals[i].start < newInterval.start ) {
            i++;
        }
        intervals.insert(intervals.begin() + i, newInterval);
        
        
        stack<Interval> s;
        
        s.push(intervals[0]);
        
        for( int i = 1 ; i < intervals.size(); i++ ) {
            
            Interval curr = intervals[i];
            Interval ons = s.top();
            
            
            if( curr.start > ons.end ) {
                s.push(curr);
            }
            else {
                if( curr.end > ons.end ) {
                    
                    ons.end = curr.end;
                    
                    s.pop();
                    s.push(ons);
                }
            }
            
        }
        
        intervals.clear();
        while( s.empty() == false ) {
            intervals.insert(intervals.begin(),s.top());
            s.pop();
        }
        
        return intervals;
        
    }
};
{% endhighlight %}