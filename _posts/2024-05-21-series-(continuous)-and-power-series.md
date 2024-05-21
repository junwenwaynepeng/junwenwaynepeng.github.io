---
id: 091abad7-5a35-4c67-96f5-25531ef98101
layout: post
date: 2024-05-21
title: Series (Continuous) and Power Series
subtitle: Geometric Series and the Interval of Convergence
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

### Method 7 (Root test)


The root test can be used when your series has terms that are raised to the power of n.


**Steps for the Root Test:**

1. Compute the $n$th root of the absolute value of the $n$th term, i.e., compute

	$$
	\text{R} = \left|a_n\right|^{1/n} 
	$$

2. Take the limit as $n$ approaches infinity, i.e., compute

	$$
	\text{L} = \lim_{n\to\infty}\text{R}
	$$

3. 
	- If $L < 1$, the series converges absolutely.
	- If $L > 1$, the series diverges.
	- If $L = 1$, the test is inconclusive, and you will need to use a different test.

For example, the series $\sum_{n=1}^\infty\frac{2^n}{n^n}$ is convergent by the root test.


# Power Series


## Inspired examples; the geometric series


Consider the geometric series as a basic example of a power series. A geometric series has the form $\sum_{n=0}^\infty ar^n$, where $a$ and $r$ are constants. This series converges if $|r| < 1$ and diverges otherwise. For $|r|<1, $ the sum of the geometric series is


$$
\sum_{n=0}^\infty ar^n=\frac{a}{1-r} 
$$


Therefore, we can express the function $f(x)=\frac{a}{1-x}$ for $|x|<1$ as the sum of a series $\sum_{n=0}^\infty ax^n$. This is not a unique case. In fact, any rational function can be expressed as a series using the geometric series. This prompts us to inquire if there is a universal method to express a function in a closed form as a series in the form of $\sum ax^n$. We refer to such series (those with a variable) as power series.


## Definition of the power series


A power series about $c$ (or centered at $c$) is a series of the form $\sum_{n=0}^\infty a_n (x - c)^n$, where $a_n$ are constants, $c$ is a fixed real number, and $x$ is a variable. The value of $c$ is the center of the power series, and the behavior of the series can change drastically depending on the value of $x$. Therefore, it is critical to knwo for what value $x$ the series is convergent.


## Interval of Convergence


The interval of convergence for a power series is the set of all x-values for which the series converges. It can be calculated by applying the Ratio Test or Root Test to the series and solving the resulting inequality for x. The endpoints of the interval must be checked separately, as the series may converge or diverge at these points.


### Theorem about the interval of convergence


The interval of convergence for a power series will always be an interval centered at $c$. The interval can be finite or infinite, and can include or exclude its endpoints. The series will converge for all $x$-values inside this interval, and diverge for all $x$-values outside the interval. Here is a formal statement:


**Theorem.** Let $I$ be the interval of convergence for a power series $\sum_{n=0}^\infty a_n(x-c)^n$ centered at $c$. Then, $I$ has three possibilites:

1. $I=(-\infty,\infty)$
2. $I=\\{c\\}$ a single point
3. $I=[c-R,c+R)$, $[c-R,c+R]$. or $(c-R,c+R]$

In particular, if the power series converges at one endpoint ($c-R$ or $c+R$) and diverges at the other endpoint ($c+R$ or $c-R$ respectively), then the power series evaluated at the convergent endpoint ($c-R$ or $c+R$) is conditionally convergent.


**Remark.** There exists only one value $x$ for which the power series evaluated at $x$ is conditionally convergent.


**Definition.** In the above theorem, we refer to the real number $R$ as the radius of convergence.


### How to find $R$?


The ratio test and root test can be applied here. The criteria for these tests are defined as follows:


$$
L=\lim_{n\to\infty}\left|\frac{a_{n+1}(x-c)^{n+1}}{a_n(x-c)^n}\right|\quad\text{or}\quad L=\lim_{n\to\infty}\sqrt[n]{|a_n(x-c)^n|}
$$


The series will converge if $L<1$. Thus, it implies


$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right||(x-c)|<1\quad\text{or}\quad\lim_{n\to\infty}\sqrt[n]{|a_n|}|(x-c)|<1,
$$


or equivalently


$$
|x-c|<\frac{1}{\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|}\quad\text{or}\quad|x-c|<\frac{1}{\displaystyle\lim_{n \to\infty}\sqrt[n]{|a_n|}}.
$$


Be aware that if both limits exist, they share the same value. Hence, we can conclude that


$$
R=\frac{1}{\displaystyle\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|}\quad\text{or}\quad\frac{1}{\displaystyle\lim_{n \to\infty}\sqrt[n]{|a_n|}}.
$$


If the limit converges to $0$, then the radius of convergence $R=\infty$. Conversely, if the limit diverges to infinity, then $R=0$. This means the power series only converges at $R$.


### Geometric explantion for the center and the radius


The center of a power series can be imagined as a point on the real number line, and the radius of convergence as the distance from this center to the points where the series starts to diverge. If the radius is infinite, the series converges everywhere on the number line; if it's zero, the series only converges at the center.

