---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Add One To Number on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Add One To Number Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT add-one-to-number Solution
---
The correct, optimal and working solution for programming question [add-one-to-number](https://www.interviewbit.com/problems/add-one-to-number/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/add-one-to-number/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight go %}
package main

import (
	"fmt"
)

func plusOne(A []int) []int {
	carry := 1
	for i := len(A) - 1; i >= 0; i-- {
		A[i] = A[i] + carry
		carry = A[i] / 10
		A[i] = A[i] % 10
	}

	var Ap1 []int
	if carry > 0 {
		Ap1 = append([]int{carry}, A...)
	} else {
		Ap1 = A
	}

	firstNonZero := 0
	for firstNonZero = range Ap1 {
		if Ap1[firstNonZero] != 0 {
			break
		}
	}
	return Ap1[firstNonZero:]
}

func main() {
	fmt.Println(plusOne([]int{0, 0, 9}))
}

{% endhighlight %}
</div>
