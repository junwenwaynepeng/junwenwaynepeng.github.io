---
id: a4da393d-db4d-46e9-8158-1c2b02f04f01
layout: post
date: 2024-05-22
title: Application of Maclaurin Series
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Find the Derivative $f^{(n)}$ for Some Large $n$


To calculate the $n$th derivative of a function $f$ at $x=c$, using the Taylor series of $f$ about $a$, rewrite $f(x)$ as $\sum a_n(x-c)^n$. Then, use the formula $a_n=\frac{f^{(n)}}{n!}$ to derive the $n$th derivative of $f$.


**Example.** Let $f(x)=\sqrt{1+x}$. Find $f^{(100)}(0).$


**Sol)** We know the Maclaurin series for $\sqrt{1+x}$ is $\sum_{n=0}^\infty\binom{1/2}{n}x^n$. Therefore, the $100$th derivative of $f$ at $0$ is $\binom{1/2}{100}\cdot100!$.


# Approximation


The Maclaurin series can provide an approximation for a function by expanding it as an infinite sum of terms calculated from the values of its derivatives at a single point. This method can be particularly useful when the function is complex and difficult to differentiate directly.


Let us define the degree $n$ Taylor polynomial of a function $f$ be $T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k$. This polynomial can be used to approximate the function around the point $a$ with an error that decreases as $n$ increases.


**Example.** Use the degree 5 Taylor polynomial $T_5(x)$ to estimate $e$.


**Sol)** We know that the Maclaurin series for $e^x$ is $\sum_{n=0}^\infty\frac{x^n}{n!}$. Therefore, the degree 5 Taylor polynomial for $e^1$ is $\sum_{n=0}^5\frac{1^n}{n!}$ which equals $1+1+\frac{1}{2}+\frac{1}{6}+\frac{1}{24}+\frac{1}{120}$.


**Example.** Use the degree $3$ Taylor polynomial $T_3(x)$ to estimate $\sin(1)$.


**Sol)** We know that the Maclaurin series for $\sin(x)$ is $\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}x^{2n+1}$. Therefore, the degree 3 Taylor polynomial for $\sin(1)$ is $1-\frac{1^3}{3!}$ which equals $1-\frac{1}{6}$.


## What is the magnitude of the error in the above approximation?


The error of the above estimation is given by the following relation


$$
f(x)=\sum_{n=0}^\infty a_n(x-c)^n = \underbrace{\sum_{n=0}^m a_n(x-c)^n}_{T_m(x)} + \underbrace{\sum_{n=m+1}^\infty a_n(x-c)^n}_{R_m(x)}.
$$


Thus, the exact error of an estimation by a degree $m$ Taylor polynomial is denoted by $R(a)$. In many cases, $R_m(a)$ is difficult to directly evaluation, so we need to find a bound for $|R_m(a)|$. The goal is to find some constant $C$ such that $|R_m(a)|\leq C$. The constant $C$ is not unique. You might provide an obvious constant, but it may not be of significant value. Alternatively, you can use inequality judiciously to provide a more precise bound. The alternative series has a straightforward method for determining the upper bound. We will discuss this separately in the following sections.


### Not alternative series


Generally, there isn't a single method to set a boundary here. Commonly used methods include trigonometric inequality and establishing an inequality for each term. Ideally, after assigning an inequality to each term, we can derive a geometric series that is computable.


**Example.** Provide a bound for the error of approximating $e$ using a degree $5$ Taylor polynomial $T_5(x)$.


**sol)** We have to give a bound for $R_5(1)$. That is to find a constant $C$ such that


$$
\left|\sum_{n=6}^\infty\frac{1}{n!}\right|<C.
$$


We use the following inequality, for $n\geq 6$, we have


$$
\frac{1}{n!}=\frac{1}{1\cdot 2\cdots 5\cdot 6\cdot 7\cdots n}<\frac{1}{6^{n-5}}.
$$


Therefore, we have


$$
\sum_{n=6}^\infty\frac{1}{n!}\leq \sum_{n=1}^\infty\left(\frac{1}{6}\right)^{n}.
$$


### Alternative series


The Alternating Series Approximation Theorem provides a bound on the error in the approximation of a function by its Taylor series. The theorem states:


**Theorem** If an alternating series $\sum(-1)^ma_m(x-c)^m$ satisfies the conditions of the Alternating Series Test, then the absolute value of the difference between the sum of the first $n$ terms of the series and the sum of the entire series, i.e. $|R_m(x)|,$ is less than or equal to the absolute value of the $(n+1)$th term. That is


$$
|R_m(x)|\leq a_{m+1}(x-c)^m
$$


This theorem provides a practical method for estimating the error in approximating a function using an alternating series.


**Example.** Provide a bound for the error of approximating $\sin(1)$ using a degree $3$ Taylor polynomial $T_3(x)$.


**sol)** Since $\sin(1)=\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}$ is an alternating series and satisfies the conditions of the Alternating Series Test, so, by the Alternating Series Approximation Theorem, we have


$$
|R_3(x)|=\left|\sum_{n=2}^\infty\frac{(-1)^n}{(2n+1)!}\right|\leq \frac{1}{5!}.
$$


# Evaluate Limit


The Maclaurin series can also be used to evaluate limits of functions as they approach a certain value. By substituting the variable in the series with the limit value, we can calculate the limit of the function.


**Example.** Evaluate $\lim_{x\to 0}\frac{e^x - 1}{x}$.


**Sol)** We know that the Maclaurin series for $e^x$ is $\sum_{n=0}^\infty\frac{x^n}{n!}$. Substituting $x=0$ in the series, we get $\lim_{x\to 0}\frac{1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots - 1}{x} = \lim_{x\to 0}1+\frac{x}{2!}+\frac{x^2}{3!}+\cdots = 1$.

