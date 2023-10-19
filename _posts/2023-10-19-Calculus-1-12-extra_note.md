---
title: Racetrac principle
subtitle: 
tags: [calculus, calculus-1, extra note]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

In calculus, the racetrack principle describes the behavior and development of two functions based on their derivatives. This principle originates from a straightforward concept: if I run faster than you, I should reach the finish line sooner.

In symbols:

If $f'(x) > g'(x)$ on an open interval containing $[a, b]$ and $f(a) = g(a)$, then $f(b) > g(b$).

The proof of this statement is a straightforward application of the mean value theorem. Consider the function $h(x) = f(x) - g(x)$, which implies $h' = f' - g'$ is greater than 0 on $[a, b]$ based on our assumption. Now, for the sake of contradiction, suppose $f(b) - g(b) \leq 0$. According to the mean value theorem, there exists some $c$ such that $h'(c)(b - a) = h(b) - h(a) = f(b) - g(b) \leq 0$. However, this contradicts the fact that $h'$ is positive. Therefore, we can conclude that $f(b) > g(b)$.

**Example.** Let $f$ be a differential function on positive real number. If $f'(x)>1$ and $f(0)=0$, then $f(x)>x$.
