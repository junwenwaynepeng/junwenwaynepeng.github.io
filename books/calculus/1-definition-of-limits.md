---
layout: page
title: Definition of Limits
subtitle: From intuitive to arguly
right-toc: true
left-toc: true
book: calculus
next_page: 1-1-how-to-evaluate-limits
---

An initial definition provides an intuitive understanding of limits.

**Definition.** Suppose $f(x)$ is defined when $x$ is near the number $a$ (This means that $f$ is defined around $a$, except possibly at $a$ itself.). Then we write
$$
\lim_{x\to a}f(x)=L
$$
and say "the limit of $f(x)$, as $x$ approaches $a$, equals $L$" if we can make the values of $f(x)$ arbitrarily close to $L$ by restricting $x$ to be sufficiently close to $a$ but not equal to $a$.

When we consider both the left and right limits, we define a limit $\displaystyle\lim_{x\to a} f(x)$ to exist if and only if both the left and right limits exist and satisfy the condition:
$$\lim_{x\to a^{-}}f(x) = \lim_{x\to a^+}f(x)$$

The the precise definition of limits uses the language of $\varepsilon$ and $\delta$.

**Definition.** $\displaystyle\lim_{x\to a}f(x) = L$ exists if for any $\varepsilon>0$, there exists $\delta$ such that $|f(x)-L|<\varepsilon$ while $|x-a|<\delta$ ($|x-a|<\delta$ $\Rightarrow$ $|f(x)-L|<\varepsilon$).
