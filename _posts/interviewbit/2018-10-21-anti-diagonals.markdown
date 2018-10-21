---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Anti Diagonals on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Anti Diagonals Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT anti-diagonals Solution
---
The correct, optimal and working solution for programming question [anti-diagonals](https://www.interviewbit.com/problems/anti-diagonals/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/anti-diagonals/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
</div>
<div class="ui bottom attached active tab" data-tab="solution">
{% highlight go %}
package main

import (
	"fmt"
)

func diagonal(A [][]int) [][]int {
	if len(A) == 0 {
		return [][]int{}
	}

	var index int = 0

	ads := make([][]int, 2*len(A)-1, 2*len(A)-1)
	for i := 0; i < len(ads); i++ {
		ads[i] = make([]int, 0, len(A))
	}

	for column := 0; column < len(A); column++ {
		i, j := 0, column
		for j >= 0 && i < len(A) {
			ads[index] = append(ads[index], A[i][j])
			i++
			j--
		}
		index++
	}

	for row := 1; row < len(A); row++ {
		i, j := row, len(A)-1
		for j >= 0 && i < len(A) {
			ads[index] = append(ads[index], A[i][j])
			i++
			j--
		}
		index++
	}

	return ads
}

func main() {
	A := [][]int{}
	fmt.Println(diagonal(A))
}

{% endhighlight %}
</div>
