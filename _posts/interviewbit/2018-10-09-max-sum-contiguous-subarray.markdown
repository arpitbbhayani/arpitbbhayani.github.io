---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Max Sum Contiguous Subarray on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Max Sum Contiguous Subarray Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT max-sum-contiguous-subarray Solution
---
The correct, optimal and working solution for programming question [max-sum-contiguous-subarray](https://www.interviewbit.com/problems/max-sum-contiguous-subarray/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/max-sum-contiguous-subarray/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight cpp %}
package main

import (
	"fmt"
)

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func maxSubArray(A []int) int {
	currentMax := A[0]
	globalMax := A[0]
	for i := 1; i < len(A); i++ {
		currentMax = max(A[i], currentMax+A[i])
		globalMax = max(globalMax, currentMax)
	}
	return globalMax
}

func main() {
	fmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))
}

{% endhighlight %}
</div>
