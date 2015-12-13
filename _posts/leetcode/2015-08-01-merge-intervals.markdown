---
categories: leetcode
comments: true
img: http://listogre.com/wp-content/uploads/2014/11/binary-code-typography-hd-wallpaper-1920x1080-2619-672x372.png
layout: post
tags:
- competitive-programming
title: Leetcode solution for merge-intervals
---

Following is the solution for Leetcode Question: [merge-intervals](https://leetcode.com/problems/merge-intervals/)

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