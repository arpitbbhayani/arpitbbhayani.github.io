---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Min Steps in Infinite Grid on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Min Steps in Infinite Grid Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT min-steps-in-infinite-grid Solution
---
The correct, optimal and working solution for programming question [min-steps-in-infinite-grid](https://www.interviewbit.com/problems/min-steps-in-infinite-grid/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/min-steps-in-infinite-grid/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight go %}
package main

import (
	"fmt"
)

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func distance(x1, y1, x2, y2 int) int {
	return max(abs(x2-x1), abs(y2-y1))
}

func coverPoints(A []int, B []int) int {
	steps := 0
	for i := 1; i < len(A); i++ {
		x1, y1, x2, y2 := A[i-1], B[i-1], A[i], B[i]
		steps += distance(x1, y1, x2, y2)
	}
	return steps
}

func main() {
	fmt.Println(coverPoints([]int{4, 8, -7, -5, -13, 9, -7, 8}, []int{4, -15, -10, -3, -13, 12, 8, -8}))
}

{% endhighlight %}
</div>
