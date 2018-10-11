---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Max Non Negative SubArray on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Max Non Negative SubArray Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT max-non-negative-subarray Solution
---
The correct, optimal and working solution for programming question [max-non-negative-subarray](https://www.interviewbit.com/problems/max-non-negative-subarray/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/max-non-negative-subarray/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

func maxset(A []int) []int {
	var i int
	for i = 0; i < len(A); i++ {
		if A[i] >= 0 {
			break
		}
	}

	if i == len(A) {
		return []int{}
	}

	maxStart, maxEnd, maxSum := i, i, math.MinInt32
	start, end, sum := i, i, 0

	for i = i; i < len(A); i++ {
		if A[i] >= 0 {
			end = i
			sum += A[i]
		} else {
			if (sum > maxSum) || (sum == maxSum && (end-start) > (maxEnd-maxStart)) {
				maxStart, maxEnd, maxSum = start, end, sum
			}
			start, sum = i+1, 0
		}
	}

	if (sum > maxSum) || (sum == maxSum && (end-start) > (maxEnd-maxStart)) {
		maxStart, maxEnd, maxSum = start, end, sum
	}
	return A[maxStart : maxEnd+1]
}

func main() {
	fmt.Println(maxset([]int{0, 0, -1, 0}))
}

{% endhighlight %}
</div>
