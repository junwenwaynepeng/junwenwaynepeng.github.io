---
title: A research question
subtitle: Searching solutions in a function field over a finite field 
tags: Research, Academic, Question, Finite Field, Function Field, Drinfeld Module
---

Let me set the notations.

* $T$ is trancendental over $\mathbb{F}_{q}$ where $q$ is a power of prime $p$.
* $f$ is a monic polynomial over $\mathbb{F}_{q}[T]$.
* $r$ is an arbitrary integer.
* $\pi$ is an irreducible element in $\mathbb{F}_q[T]$
* 

We want to find an positive integer $B$ such that if $(x_1, x_2,\ldots, x_r)\in \mathbb{F}_{q^r}(T)\times\pi^{n-1}\mathbb{F}_{q^r}(T)\times\cdots\times\pi^{n-1}\mathbb{F}_{q^r}(T)$ is a solution of

$$
\det\left(\begin{matrix}
x_1 & x_2 & \cdots & x_r\\\\
\pi\sigma(x_r) & \sigma(x_1) & \cdots & \sigma(x_{r-1})\\\\
\ldots & \ldots & \ddots & \ldots\\\\
\pi\sigma^{r-1}(x_2) & \pi\sigma^{r-1}(x_3) & \cdots & \sigma^{r-1}(x_1)
\end{matrix}\right) = f,
$$
then $n$, $\deg(x_1)$, $\cdots$, and $\deg(x_r)$ are bounded by $B$.

For example, we can consider the following settings:
* $f=X^2+TX+1$
* $\pi = T$
* $r = 3$
* $p = 5$
