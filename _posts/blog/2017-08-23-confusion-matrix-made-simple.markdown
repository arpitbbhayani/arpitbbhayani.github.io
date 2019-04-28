---
title: Confusion Matrix Made Simple
img: https://arpitbhayani.me/static/images/confusion-matrix/confusion-matrix.jpg
layout: post
comments: true
tags:
 - confusion-matrix
 - data-science
categories: techie
seo:
 tags:
  - confusion matrix
  - data science
  - data mining
  - true positive
  - true negative
  - false positive
  - false negative
  - tp, tn, fp, fn
 description: Confusion matrix has always been very confusing; we try to mug it up before examination and then after a few days we don't even remember the difference between false positive and true negative. Hence I develop a simple trick to understand and remember it
---

When I started with Data Mining 101, the first thing I came across was known as “The Confusion Matrix”. It seemed interesting at first so I started diving deep. It looked very simple at first, but then when more terms were introduced, things become complicated rather confusing; and then I realized the reason it is called **“The Confusion Matrix”**.

The terms True/False Positives/Negatives are really very confusing to remember and hence I found a sleek way to understand it.

> Just add “ly predicted as” between two words

So,
True Positive → Truly predicted as Positive
False Positive → Falsely predicted as Positive
True Negative→ Truly predicted as Negative
False Negative → Falsely predicted as Negative

## Interpreting True/False Positive/Negative

**True Positive:**
The data point is a True Positive if it is `truly` predicted as `positive`. If I try to elaborate `truly` we get something like this: The data point is a True Positive if it is actually positive and is truly predicted as positive.

For a food lover:

> When a Burger is predicted as Burger and not Hotdog it comes under True Positive.

 - Burger - Positive Class
 - Hotdog - Negative Class

For an animal lover:

> When a Dog is predicted as Dog and not Cat it comes under True Positive.

 - Dog - Positive Class
 - Cat - Negative Class

**False Positive**:
It will be interesting when we try to interpret  False Positive.
The data point is a False Positive if it is `falsely` predicted as `positive`. If I try to elaborate `falsely` we get something like this: The data point is `False Positive` if it is actually `Negative` but it is `falsely` predicted as `positive`.

Again, for a food lover:

> When a Hotdog is predicted as Burger, it comes under False Positive

Again, for an animal lover

> When a Cat is predicted as Dog, it comes under False Positive

Rest you can derive on your own 😉

## Conclusion

In conclusion I would like to say … add “ly predicted as” in the middle.
