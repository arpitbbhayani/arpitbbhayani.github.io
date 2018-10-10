---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Repeat and Missing Number Array on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Repeat and Missing Number Array Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT repeat-and-missing-number-array Solution
---
The correct, optimal and working solution for programming question [repeat-and-missing-number-array](https://www.interviewbit.com/problems/repeat-and-missing-number-array/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/repeat-and-missing-number-array/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func repeatedNumber(A []int) []int {
	sum := 0
	shouldBeSum := (len(A) * (len(A) + 1)) / 2
	repeatingNumber := 0

	for i := range A {
		sum += abs(A[i])
		index := abs(A[i]) - 1
		if A[index] > 0 {
			A[index] = -A[index]
		} else {
			repeatingNumber = index + 1
		}
	}

	missingNumber := shouldBeSum - (sum - repeatingNumber)

	return []int{repeatingNumber, missingNumber}
}

func main() {
	fmt.Println(repeatedNumber([]int{3, 1, 2, 5, 3}))
}

{% endhighlight %}
</div>
