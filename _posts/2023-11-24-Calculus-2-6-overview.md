---
title: Technique of Integration
subtitle: Trig integration and Trig substitution. 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# Trigonometric integrals $\int \sec^{m}(x)\tan^n(x)dx$

To integrate $\sec^{m}(x)\tan^{n}(x)$, we consider the following cases:

1. If $m$ is even and nonzero, then we will use the substitution rule by letting $u=\tan(x)$ (so $du=\sec^2(x)dx$) and the trig identity $\sec^2(x) = \tan^2(x)+1$ to replace trig functions in terms of $u$. By doing so, integrals of trig functions becomes integrals of polynomials. 

2. If $n$ is odd, then we will use the substitution rule by letting $u=\sec(x)$ (so $du=\sec(x)\tan(x)dx$) and the trig identity $\tan^2(x) =\sec^2(x)-1$ to replace trig functions in terms of $u$. By doing so, integrals of trig functions becomes integrals of polynomials.


|m\n| $n$ is odd | $n$ is even |
|---|:----------:|:-----------:|
| $m$ is odd | use 2.  |  |
| $m$ is even and $>0$| use 1. or use 2. | use 1. |  

The remanining cases:

* Case 1 ($m=0$) We will use the trig identity $\tan^2(x)=\sec^2(x)-1$, so $\int\tan^2k(x)dx$ becomses
$$\int\tan^{2(k-1)}(x)(\sec^2(x)-1)dx = \int\tan^{2(k-1)}(x)\sec^2(x) - \int\tan^{2(k-1)}.$$
The first part of the integral belong the the case where $n$ is even and nonzero, and the second part has degree less than the previous integral. We will repeat this process untill we reduce the degree to $1$ or $0$.

* Case 2 ($m$ is odd and $n$ is even) We will use integration by part.

# Trigonometric substitution

| pattern | trig identity | substitution |
|:--------:|:------------:|:------------:|
| $a^2-x^2$ | $1-\sin^2(x) = \cos^2(x)$ ($1-\cos^2(x)=\sin^2(x)$) | $u=a\sin(x)$ ($u=a\cos(x)$) |
| $x^2 -a^2$  | $\tan^2(x) = \sec^2(x)-1$ | $u=a\sec(x)$ |
| $x^2+a^2$ | $\sec^2(x) = \tan^2(x)+1$ | $u=a\tan(x)$ |

## Complete Square

Whenever we see somthing like $x^2+2ax$ in an integral, and substitution is not applicable. Try to complete the square.
