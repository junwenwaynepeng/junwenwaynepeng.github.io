---
title: The Substitution Rule
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# The substitution Rule

We use the substitution rule, a.k.a. change of variables, to deal with integration of the form

$$\int f(g(x))g'(x)dx.$$

There are three major types:

## $u$ is in a function

**Example 1.** $\int\sqrt{2x+1}dx$

**Example 2.** $\int 2^xdx = \int e^{ln 2 x}dx$

**Example 3.** $\int x\sqrt(1+x^2)dx$

**Example 4.** $\int x^2\sin(x^3)dx$

**Example 5.** $\int x^3\sqrt(1+x^2)dx$

## $u$ is a denomiator

**Example 6.** $\int \frac{3x^2}{x^3+1}dx$

**Example 7.** $\int \frac{x^5}{x^3+1}dx$

**Example 8.** $\int \tan(x) dx =\int \frac{\sin(x)}{\cos(x)}dx$

## $u$ is a numerator

**Example 9.** $\int\frac{\ln(x)}{x}dx$

# Integration by part

# Special Cases
## Use geometry to solve a definite integral

**Example 10.** $\int_-1^1\sqrt{1-t^2}dt$ is the area of upper semicircle.

**Theorem.** Let $f$ be a continuous function on $[-a,a]$. Then, 
1. If $f$ is even, i.e. $f(-x)=f(x)$, then $\int_{-a}^{a}fdx = 2\int_0^afdx$.
2. If $f$ is odd, i.e. $f(-x)=-f(x)$, then $\int_{-a}^{a}fdx = 0$.