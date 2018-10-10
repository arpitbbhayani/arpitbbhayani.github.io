---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Maximum Absolute Difference on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Maximum Absolute Difference Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT maximum-absolute-difference Solution
---
The correct, optimal and working solution for programming question [maximum-absolute-difference](https://www.interviewbit.com/problems/maximum-absolute-difference/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/maximum-absolute-difference/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight go %}
package main

import (
	"fmt"
	"math"
)

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func maxArr(A []int) int {
	maxVal1, maxVal2 := math.MinInt32, math.MinInt32
	minVal1, minVal2 := math.MaxInt32, math.MaxInt32
	for i := 0; i < len(A); i++ {
		maxVal1 = max(maxVal1, A[i]+i)
		minVal1 = min(minVal1, A[i]+i)
		maxVal2 = max(maxVal2, A[i]-i)
		minVal2 = min(minVal2, A[i]-i)
	}
	return max(maxVal1-minVal1, maxVal2-minVal2)
}

func main() {
	fmt.Println(maxArr([]int{1, 3, -1}))
}

{% endhighlight %}
</div>
