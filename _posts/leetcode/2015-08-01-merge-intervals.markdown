---
categories: leetcode
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question merge-intervals on leetcode
  tags:
  - solution
  - source code
  - programming
  - leetcode
  - merge-intervals Solution
tags:
- competitive-programming
- programming
title: LEETCODE merge-intervals Solution
---
The correct, optimal and working solution for programming question merge-intervals on leetcode

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://leetcode.com/problems/merge-intervals/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

class Compare {
        public:
            bool operator()(const Interval &a, const Interval &b) {
                if( a.start < b.start ) {
                    return true;
                }
                else {
                    return false;
                }
            }
};


class Solution {
public:
    vector<Interval> merge(vector<Interval> &intervals) {
        Compare compare;
        sort(intervals.begin(), intervals.end(), compare);
        
        if( intervals.size() == 0 ) {
            return intervals;
        }
        
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
            intervals.insert(intervals.begin(), s.top());
            s.pop();
        }
        
        
        return intervals;
    }
};

{% endhighlight %}
</div>
