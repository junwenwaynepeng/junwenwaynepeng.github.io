---
id: 747063ca-7b82-4964-a52f-d31843bf53d6
layout: post
date: 2024-05-20
title: Sequence and Series
subtitle: How to determine convergence or divergence
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Sequence


**Definition.** A sequence in calculus is a list of numbers that are ordered in a specific manner. Each number in the list is called a term. In mathematical notation, a sequence is often represented as $a_1$, $a_2$, $a_3$, $\ldots$, where $a_1$ is the first term, $a_2$ is the second term, and so on. It is often abbreviated as $\\{a_n\\}_{n=1}^\infty$, $\\{a_n\\}_{n\in\mathbb{N}}$, or simply $\\{a_n\\}$.


## A Sequence Derived from a Function


A sequence can also be derived from a function. If we have a function $f(x)$ defined for all natural numbers $x$, then the sequence derived from this function would be the list of numbers that we get by plugging in natural numbers into the function. So, $f(1)$ would be the first term, $f(2)$ would be the second term, and so on.


**Example.** Consider the function $f(x) = \frac{1}{x}$. The sequence derived from this function would be $f(1) = 1$, $f(2) = \frac{1}{2}$, $f(3) = \frac{1}{3}$, and so on. So, the sequence would be $\\{\frac{1}{n}\\}$.


**Example.** Consider the sequence $\\{\frac{1}{n!}\\}$. This sequence cannot be derived from an obvious function. It's worth noting that mathematicians have found a function $f$ such that $f(n)=\frac{1}{n!}$, but it's not straightforward to write down. This sequence can also be represented recursively by defining $a_n=\frac{1}{n}a_{n-1}$ with the initial condition $a_1=1$.


## How to determine convergence or divergence


If $\displaystyle\lim_{n\to\infty}a_n$ and $\displaystyle\lim_{n\to\infty}b_n$ exist, than we have the following:

- $\displaystyle\lim_{n\to\infty}a_n\pm b_n = \displaystyle\lim_{n\to\infty}a_n\pm\displaystyle\lim_{n\to\infty}b_n$
- $\displaystyle\lim_{n\to\infty}ca_n=c\displaystyle\lim_{n\to\infty}a_n$
- $\displaystyle\lim_{n\to\infty}a_nb_n = \displaystyle\lim_{n\to\infty}a_n\displaystyle\lim_{n\to\infty}b_n$
- if $b_n\neq 0$ and $\displaystyle\lim_{n\to\infty}b_n\neq0$, then $\displaystyle\lim_{n\to\infty}\frac{a_n}{b_n}=\frac{\displaystyle\lim_{n\to\infty} a_n}{\displaystyle\lim_{n\to\infty} b_n}$
- if $f(x)$ is continous, then $\displaystyle\lim_{n\to\infty}f(a_n)=f(\displaystyle\lim_{n\to\infty} a_n)$

If the sequence $\\{a_n\\}$ is derived from a function, we can apply our knowledge of function limits to determine the sequence's limit.


### Limit of a sequnece that is not derived from some obvious function


In this situation, the squeeze theorem is useful.


**Example.** For instance, the sequence $\\{\frac{n!}{n^n}\\}$ satisfies the inequality


$$
0\leq \frac{n!}{n^n}\leq \frac{1}{n}\cdot\frac{2}{n}\cdot\cdots\cdot\frac{n}{n}<\frac{1}{n}.
$$


Therefore, we conclude that $\displaystyle\lim_{n\to\infty}\frac{n!}{n^n}=0$ by the seqeeze theorem.


### Monotonic and Bounded


A sequence is said to be **monotonic** if it is either entirely non-increasing ($a_n\geq a_{n-1}$ for all $n$) or non-decreasing ($a_n\leq a_{n+1}$ for all $n$). A sequence is said to be **bounded** if there exists some number M such that all terms of the sequence are less than or equal to M ($|a_n|\leq M$ for all $n$). The _Monotone Convergence Theorem_ states that every bounded, monotonic sequence is convergent, which is a useful tool in analyzing the behavior of sequences.


# Series


**Definition.** A series is the sum of the terms of a sequence. In mathematical notation, a series can be represented as $a_1 + a_2 + a_3 + \ldots$ or $\displaystyle\sum_{n=1}^\infty a_n$. 


**Definition.** We call $\displaystyle\sum_{n=1}^ma_n$ the $m$_th partial sum_. If the sequence of partial sums converges, we say that the series is _convergent_. If the sequence of partial sums does not converge, we say that the series is _divergent_. If $\displaystyle\sum_{n=1}^\infty|a_n|$ is convergent, then we say the series is _absolutely convergent_. If a series is not absolutely convergent, i.e $\displaystyle\sum_{n=1}^\infty|a_n|$ is divergent, but $\displaystyle\sum_{n=1}^\infty a_n$ is convergent, we say the series is _conditionally convergent_.


## How to determine convergence or divergence


To determine whether a series converges or diverges, we can use various tests such as the comparison test, root test, ratio test, and the integral test. Each of these tests has its own conditions under which it can be applied, and can provide valuable insights into the behavior of the series. However, it's important to note that not all series can be easily classified as convergent or divergent with these tests.


### Method 1 (Find a closed form of $m$th partial sum)


If you can find a closed form for the $m$th partial sum and prove that it converges, then the series also converges. For example, the series $\\sum_{n=1}^\infty r^n$ (geometric series) has the $m$th partial sum $S_m=\frac{1-r^{m+1}}{1-r}$. If $|r|<1$, then $\displaystyle\lim_{m\to\infty} S_m=\frac{1}{1-r}$, and therefore, the series converges.


### Method 2 (Comparison test a.k.a. the squeeze theorem)


Suppose $a_n$ are positive, then the sequence of the $m$th partial sum of the seriese $\sum a_n$ is monotonic. If we can find the second series $\sum b_n$ such that $b_n\geq a_n$, and $\sum b_n$ is convergent, then $\sum a_n$ is convergent by the montone convergence theorem. For instance, we have


$$
\sum_{n=1}^\infty\frac{1}{n(n+1)}\leq \sum_{n=1}^\infty\frac{1}{n^2}
$$


and the second series is convergent, so the first series is also convergent.


### Method 3 (Integral Test)


The integral test can be applied when the sequence $\\{a_n\\}$ is decreasing and $a_n>0$. If the improper integral $\int_{1}^\infty a_n\, dx$ is convergent, then the series $\sum_{n=1}^\infty a_n$ is also convergent. Conversely, if the integral is divergent, so is the series. Typical examples include using the integral test to demonstrate that z$\sum\frac{1}{n}$ is divergent and $\sum\frac{1}{n^2}$ is convergent.


### Method 4 (Limit Comparison Test)


The limit comparison test can be used when you have a series $\sum a_n$ that is difficult to evaluate, but you can compare it to another series that is easier to evaluate.


**Steps for the Limit Comparison Test:**

1. Choose a second series $\sum b_n$ that you suspect has the same convergence behavior as the first.
2. Divide each term of the first series by the corresponding term in the second series and take the limit as n approaches infinity, i.e. compute

	$$
	\lim_{n\to\infty}\frac{a_n}{b_n}
	$$

3. If the limit is a positive finite number, both series have the same convergence behavior. If the limit is zero and the second series is convergent, then the first series also converges. If the limit is infinity and the second series is divergent, then the first series also diverges. If the limit is zero or infinity, and the second series is the opposite (divergent or convergent), the test is inconclusive.

For example, we can again compare $\sum\frac{1}{n(n+1)}$ with $\sum\frac{1}{n^2}$.


### Method 5 (Special series)

- Alternating series

	This test is applicable to alternating series. If the sequence $\\{b_n\\}$ is decreasing and $\displaystyle\lim_{n\to\infty}b_n = 0$, then the series $\displaystyle\sum_{n=1}^\infty (-1)^na_n$ is convergent. This test is especially useful for series where the terms alternate in sign.

- Telescoping series

	A series is known as a telescope series if it can be expressed in the form $\sum(b_n-b_{n+i})$ for some fixed integer $i$. For instance, we have


	$$
	\sum_{n=1}^\infty\frac{1}{n(n+1)}=\sum_{n=1}^\infty\frac{1}{n}-\frac{1}{n+1}=(1-\frac{1}{2})+(\frac{1}{2}-\frac{1}{3})+(\frac{1}{3}-\frac{1}{4})+\cdots
	$$


	The close form of the $m$th power series is $1-\frac{1}{m+1}$, so the sum of the series is $1$. Note that you can also use the (limit) comparison test on this series by comparing the series with $\sum\frac{1}{n^2}$.


### Method 6 (Ratio test)


The ratio test can be used when your series has terms that are factorials or raised to the power of n.


**Steps for the Ratio Test:**

1. Take the absolute value of the ratio of the $(n+1)$th term to the $n$th term, i.e., compute

	$$
	\text{R} = \left|\frac{a_{n+1}}{a_n}\right| 
	$$

2. Take the limit as $n$ approaches infinity, i.e., compute

	$$
	\text{L} = \lim_{n\to\infty}\text{R}
	$$

3. 
	- If $L < 1$, the series converges absolutely.
	- If $L > 1$, the series diverges.
	- If $L = 1$, the test is inconclusive, and you will need to use a different test.

For example, the series $\sum_{n=1}^\infty\frac{n!}{n^n}$ is convergent by the ratio test since


$$
\lim_{n\to\infty}\left|\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}\right|=\lim_{n\to\infty}\left(\frac{n^n}{(n+1)^n}\right)=\lim_{n\to\infty}\left(\frac{1}{(1+1/n)^n}\right)=\frac{1}{e}<1.
$$

