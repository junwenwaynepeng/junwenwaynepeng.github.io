---
title: The Integration Techniques
subtitle: The integration by part and the trignometric integration
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# The integration by part

The integration by part is a consequent of the multiplication rule of derivative and the fundamental theorem of Calculus. Using $d(uv) = udv + vdu$, we derive
$$\int udv = uv-\int vdu.$$

The followings are examples:

**Example 1** $\int \ln(x) dx$

**Example 2** $\int x\sin(x) dx$

**Example 3** $\int x^2e^x dx$

**Example 4** $\int e^x\sin(x) dx$

**Example 5** $\int tan^{-1}(x)dx$ and $\int\sin^{-1}(x)dx$.

**Example 6** $\int \sin^2(x)dx$

# Trigonometric integrals

To integrate $\sin^{m}(x)\cos^{n}(x)$, we consider the following cases:

1. If $m$ or $n$ is odd, say $m$ is odd, then we will use the substitution rule by letting $u=\cos(x)$. Using the trig identity $\sin^2(x) = 1-\cos^2(x)$, the integrals of trig functions become integrals of polynomials. 

2. If both $m$ and $n$ are even, we can use integration by part to reduce the $m$ and $n$ by $2$, i.e. an integral of $\sin^m(x)\cos^n(x)$ becomes an integral of $\sin^{m-2}(x)\cos^n(x)$ or $\sin^{m}(x)\cos^{n-2}(x)$ depending on how you set up your $u$ and $dv$. Another simpler method is use the double angle formulas:
$$\sin^2(\theta) = \frac{1-\cos(2\theta)}{2}\text{ and }\cos^{2}(\theta)=\frac{1+\cos(2\theta)}{2}.$$


|m\n| $n$ is odd | $n$ is even |
|---|:----------:|:-----------:|
| $m$ is odd | use 1. by setting either $u=\cos(x)$ or $u=\sin(x)$ | use 1. by seeting $u=\cos(x)$ |
| $m$ is even| use 1. by setting $u=\sin(x)$ | Use double angle formula or integration by part to reduce the degree $m$ and $n$ until do able |  

