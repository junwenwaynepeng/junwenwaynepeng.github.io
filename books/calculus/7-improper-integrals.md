---
layout: page
title: Improper Integrals
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 6-2-probability
next_page: 8-ordinary-differential-equations
---

# Improper Integral

When we integrate $f(x)$ from $a$ to $b$ where $a$ or $b$ is a pole of $f$, or $a$ (or $b$) is infinity (or negative infinity), we will use improper integral. 

**Case ($a$ is a pole)** $\displaystyle\int_a^bf(x)dx = \lim_{t\to a^+}\int_t^bf(x)dx$

**Case ($b$ is a pole)** $\displaystyle\int_a^bf(x)dx = \lim_{t\to b^-}\int_a^{t}f(x)dx$

**Case ($a$ is negative infinity)** $\displaystyle\int_{-\infty}^bf(x)dx = \lim_{t\to -\infty}\int_t^bf(x)dx$

**Case ($b$ is infinity)** $\displaystyle\int_a^\infty f(x)dx = \lim_{t\to \infty}\int_a^\infty f(x)dx$

**Case (both $a$ and $b$ are poles or infinities)** We will let $c$ be an arbitrary number in $a$ and $b$. And write $\int_a^bf(x)dx$ as $\int_a^cf(x)dx + \int_c^bf(x)dx$ where both integrals are one of the above form (Case 1~4). The result of this improper integral is independed to the choice of $c$. 

# The Comparison Theorem

Sometime, we only care about if an integral or an infinite series is convergent or not. We can compare the integral that we are interested with another integral that is much easier to evaluate.

**Theorem(The Comparison Theorem)** 
If $f(x)>g(x)$ for $x\in[a,b]$, then $\int_a^bf(x)dx\geq \int_a^b g(x)dx$.

**Corollary.**
- $\sum_{n=1}^\infty \frac{1}{n}$ is divergent.
- $\sum_{n=1}^\infty \frac{1}{n^2}$ is convergent.
