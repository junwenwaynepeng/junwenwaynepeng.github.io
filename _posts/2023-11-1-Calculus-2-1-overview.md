---
title: Definition of Integral
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

**Definition of Definite Integral** We say a function $f(x)$ is integrable on $[a,b]$ and has integral $S$ if for all $\varepsilon>0$, there exists a $\delta>0$ such that for all partition $a=x_0<x_1<\cdots<x_n=b$ with $\displaystyle\max_{i=1,2,\ldots, n}\{x_{i}-x_{i-1}\}<\delta$ and for arbitrary sample points $x_i^*\in[x_{i},x_{i-1}]$ with $i=1,2,\ldots,n$, we have
$$|S-\sum_{i=1}^nf(x_{i}^*)(x_i-x_{i-1})|<\varepsilon.$$ 