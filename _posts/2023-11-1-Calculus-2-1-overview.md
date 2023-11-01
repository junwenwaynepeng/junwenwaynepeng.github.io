---
title: Definition of Integral
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---
Let $f(x)$ be a real-valued function on $[a,b]$. To give a Riemann sum of $f$ on $[a,b]$, we employ the following two steps:
1. Give a partition $a=x_0<x_1<\cdots<x_n=b$  of $[a,b]$.
2. Choose sample points $x_i^*$ in each subinterval $[x_{i},x_{i+1}]$ for $i=0,1,\ldots, n-1$.
Then, a Riemann sum is
$$f(x_0^*)(x_1-x_0)+f(x_1^*)(x_2-x_1)+\cdots+f(x_{n-1}^*)(x_{n}-x_{n-1})=\sum_{i=0}^{n-1}f(x_i^*)(x_i-x_{i-1}).$$

(See the following figure)
<div class='compute'>

</div>

**Definition of Definite Integral** We say a function $f(x)$ is integrable on $[a,b]$ and has an integral $S$ if, for every $\varepsilon>0$, there exists a $\delta>0$ such that, for all partitions $a=x_0<x_1<\cdots<x_n=b$ with $\displaystyle\max_{i=1,2,\ldots, n}{x_{i}-x_{i-1}}<\delta$ and for arbitrary sample points $x_i^*\in[x_{i},x_{i-1}]$ with $i=1,2,\ldots,n$, we have
$$|S-\sum_{i=1}^nf(x_{i}^*)(x_i-x_{i-1})|<\varepsilon.$$ 

We denote the integral of $f$ from $a$ to $b$ by $\int_{a}^b f(x)dx$.

There are three types of special Riemann sums:
- Left Riemann sum: $\displaystyle L_n=\sum_{i=1}^n f(x_{i-1})(x_i-x_{i-1})$.
- Right Riemann sum: $\displaystyle R_n=\sum_{i=1}^n f(x_{i})(x_i-x_{i-1})$.
- Midpoint Riemann sum: $\displaystyle M_n=\sum_{i=1}^n f(\frac{x_i+x_{i-1}}{2})(x_i-x_{i-1})$.

**Theorem.** If $f(x)$ is integrable, then
$$\lim_{n\to\infty}L_n=\lim_{n\to\infty}R_n=\lim_{n\to\infty}M_n=\int_{a}^bf(x)dx.$$
