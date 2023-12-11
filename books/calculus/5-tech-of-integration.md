---
layout: page
title: Techniques of Integration
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 4-the-fundamental-theorem-of-calculus
nex_page: 5-application-of-integrals
---

# Antiderivative Table
In the following table, $f$ and $g$ are functions of $x$, and $C$ is a constant.
| $f$ | antiderivative of $f$ |
|:---:|:---------------------:|
| $f$ | $F+C$ |
| $g$ | $G+C$ |
| $f+g$ | $F+G+C$ |
| $cf$ | $cF+C$ |
| $c$  | $cx+C$ |
| $x^n$ (for $n\neq -1$) | $\frac{x^{n+1}}{n+1}+C$ |
| $x^{-1}$ | $\ln|x|+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ (for $a\neq 1$) | $a^x\ln(a)+C$ |
| $\cos(x)$ | $\sin(x)+C$ |
| $\sin(x)$ | $-\cos(x)+C$ |
| $\sec^2(x)$ | $\tan(x)+C$ |
| $\sec(x)\tan(x)$ | $\sec(x)+C$ |
| $\frac{1}{1+x^2} | $\arctan(x)+C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin(x)+C$ |

# The substitution Rule

We use the substitution rule, a.k.a. u sub, a.k.a. change of variables, to deal with integration of the form

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

## Important

Sometime it is not easy to see we have to use u sub as our first step. 

**Example 10.** $\int\frac{1}{\cos(x)(\sin(x)+1)}dx$

**sol)** We let $u=\sin(x)$, so $du=\cos(x)dx$ (i.e. $dx=\frac{1}{\cos(x)}du$). Thus, we have
$$\int\frac{1}{\cos(x)(\sin(x)+1)}dx=\int\frac{1}{\cos^2(x)(u-1)}du = \int\frac{1}{(1-u^2)(u-1)}du.$$