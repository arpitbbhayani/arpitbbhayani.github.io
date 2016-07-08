---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: post
seo:
  description: Here is the solution for programming question insert-interval on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - insert-interval Solution
tags:
- competitive-programming
- programming
title: LEETCODE insert-interval Solution
---
The correct, optimal and working solution for programming question insert-interval on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/insert-interval/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
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
</div>
