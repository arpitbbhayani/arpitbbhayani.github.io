---
categories: interviewbit
comments: true
img: https://qph.ec.quoracdn.net/main-qimg-f939681b0b47e5540398244db5c8966f?convert_to_webp=true
layout: programming_post
seo:
  description: Here is the solution for programming question Spiral Order Matrix II on interviewbit
  tags:
  - solution
  - source code
  - programming
  - interviewbit
  - Spiral Order Matrix II Solution
tags:
- competitive-programming
- programming
title: INTERVIEWBIT spiral-order-matrix-ii Solution
---
The correct, optimal and working solution for programming question [spiral-order-matrix-ii](https://www.interviewbit.com/problems/spiral-order-matrix-ii/) on interviewbit

<div class="ui secondary pointing large menu">
  <a class="grey item" data-tab="problem-statement">
    Problem Statement
  </a>
  <a class="active item grey" data-tab="solution">
    Solution
  </a>
</div>
<div class="ui bottom attached tab" data-tab="problem-statement">
    <iframe src="https://www.interviewbit.com/problems/spiral-order-matrix-ii/" width="100%" height="600px" style="overflow: scroll; border: none;"></iframe>
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

func outOfBounds(i, j, n int) bool {
	return !(i >= 0 && i < n && j >= 0 && j < n)
}

func isCovered(i, j int, covered [][]bool) bool {
	if outOfBounds(i, j, len(covered)) {
		return true
	}
	return covered[i][j]
}

func generateMatrix(A int) [][]int {
	n := A
	matrix := make([][]int, n, n)
	for i := range matrix {
		matrix[i] = make([]int, n, n)
	}

	covered := make([][]bool, n, n)
	for i := range covered {
		covered[i] = make([]bool, n, n)
	}

	deltai := []int{0, 1, 0, -1}
	deltaj := []int{1, 0, -1, 0}

	x := 1
	i, j, k := 0, 0, 0
	ni, nj := 0, 0
	max := n*n + 2*n
	for y := 0; y < max; y++ {
		matrix[i][j] = x
		covered[i][j] = true
		ni = i + deltai[k]
		nj = j + deltaj[k]
		if isCovered(ni, nj, covered) {
			k = (k + 1) % 4
			x--
		} else {
			i, j = ni, nj
		}
		x++
	}

	return matrix
}

func main() {
	mat := generateMatrix(10)
	for i := range mat {
		for j := range mat[i] {
			fmt.Print(mat[i][j], " ")
		}
		fmt.Println()
	}
}

{% endhighlight %}
</div>
