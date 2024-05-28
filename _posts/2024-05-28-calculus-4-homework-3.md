---
id: f79c3c5f-ff5a-4da8-b486-1c2880ce29f2
layout: post
date: 2024-05-28
title: Calculus 4 Homework 3
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

This is a programming assignment where you are required to use recursion to implement the following functions:

1. $f(n)=n!$. Please print out the first 10 terms.
2. For any $\alpha\neq 0$, define $f(\alpha, n )=\binom{\alpha}{n}$. Print out the first 10 terms when $\alpha=\frac{-1}{2}$.
3. Define $f(1)=1$, $f(2)=2+\frac{1}{1}$, $f(3)=1+\frac{1}{2+\frac{1}{1}}$, $f(4)=2+\frac{1}{1+\frac{1}{2+\frac{1}{1}}}$, $f(5)=1+\frac{1}{2+\frac{1}{1+\frac{1}{2+\frac{1}{1}}}}$. Notice the pattern in the above sequence and print out the first 20 terms. Can you determine if this sequence is convergent by observing the numerical results?
4. (Just for fun) Let's consider nonzero real numbers $a_1$, $a_2$, $\cdots$, $a_n$. We define $f(1)=a_1$, $f(2)=a_2+\frac{1}{a_1}$, $f(3)=a_3+\frac{1}{a_2+\frac{1}{a_1}}$, $\cdots$, $f(n)=a_n+\frac{1}{a_{n-1}+\frac{1}{a_{n-2}+\dots}}$. Furthermore, $f(n+1)=a_1+\frac{1}{f(n)}$, and this pattern continues. The task is to print out the terms of $f$.
