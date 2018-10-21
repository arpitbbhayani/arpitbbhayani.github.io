---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Kth Row of Pascal's Triangle on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Kth Row of Pascal's Triangle Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT kth-row-of-pascals-triangle Solution
---
The correct, optimal and working solution for programming question [kth-row-of-pascals-triangle](https://www.interviewbit.com/problems/kth-row-of-pascals-triangle/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/kth-row-of-pascals-triangle/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight go %}
package main

import (
	"fmt"
)

func getRow(A int) []int {
	A++
	triangle := make([][]int, A, A)
	for i := range triangle {
		triangle[i] = make([]int, i+1, i+1)
	}

	triangle[0][0] = 1
	for i := 1; i < A; i++ {
		triangle[i][0] = 1
		for j := 1; j <= i; j++ {
			if j < i {
				triangle[i][j] = triangle[i-1][j] + triangle[i-1][j-1]
			} else {
				triangle[i][j] = 0 + triangle[i-1][j-1]
			}
		}
	}

	return triangle[A-1]
}

func main() {
	fmt.Println(getRow(0))
}

{% endhighlight %}
</div>
