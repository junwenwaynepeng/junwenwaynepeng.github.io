---
layout: page
title: How to evaluate limits
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 1-definition-of-limits
next_page: 1-2-asymptotes
---
# How to evaluate limits

## Limits Law

**Theorem.**
Suppose $c$ is a real constant, and both 
$$\lim_{x\to a}f(x)\text{ and }\lim_{x\to a}g(x)$$
exist. Then,
1. $\displaystyle\lim_{x\to a} f(x)\pm g(x) = \lim_{x\to a}$
2. $\displaystyle\lim_{x\to a} f(x)g(x) = \lim_{x\to a}f(x)\lim_{x\to a}g(x)$
3. $\displaystyle\lim_{x\to a} \frac{f(x)}{g(x)} = \frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}$ if $\displaystyle\lim_{x\to a}g(x)\neq 0$
4. $\displaystyle\lim_{x\to a} (f(x))^{(b/c)} = \left(\lim_{x\to a}f(x)\right)^{(b/c)}$ if $c$ is not odd and $b/c$ is in its lowest terms (最簡分數形式).


## Kill a common zero and the rationalization

There are two scenarios where you might want to consider employing this technique. The first scenario arises when you encounter an indeterminate form, specifically $\frac{0}{0}$, and the denominator takes the form of $\sqrt{\cdot}-\sqrt{\cdot}$ or $1-\cos(x)$. The second scenario occurs when you are working with a limit as $x$ approaches infinity, and direct evaluation leads to the indeterminate form $\infty - \infty$. These are two common situations where the technique we'll discuss becomes particularly useful.

To illustrate these scenarios, let's explore several typical examples.

**Example 1.** $\displaystyle\lim_{x\to 0}\frac{x^2}{\sqrt{|x^2+2|}-\sqrt{|x^2-2|}}$

**Example 2.** $\displaystyle\lim_{x\to\infty}\sqrt{x}-\sqrt{x+1}$

**Example 3.** $\displaystyle\lim_{x\to 0}\frac{x^2}{1-\cos(x)}$


## Help from some well-known limits

The following limits are useful when we tried to evaluate other limits:
- $\displaystyle\lim_{x\to 0}\frac{\sin(x)}{x}=1$.
	> **Example.** $\displaystyle\lim_{x\to 0}\frac{\sin(2x)}{\sin(3x)} = \lim_{x\to 0}\frac{\sin(2x)\cdot 3x}{2x\cdot\sin(3x)}\cdot\frac{3x}{2x} = \frac{3}{2}$.

## The Squeeze theorem

**Theorem.** Let $I$ be an interval containing the point $a$. Let $g$, $f$, and $h$ be functions defined on $I$, except possibly at $a$ itself. Suppose that for every $x$ in $I$ not equal to $a$, we have
$$g(x)\leq f(x)\leq h(x)$$
and also suppose that
$$\lim_{x\to a}g(x)=\lim_{x\to a}h(x)=L.$$
Then $\displaystyle\lim_{x\to a}f(x)=L$.


## Indeterminate form

We refer to a limit as having an 'indeterminate form' when it cannot be straightforwardly determined by direct evaluation. The following are most common indeterminate forms:

$$\frac{0}{0},\\ \pm\frac{\infty}{\infty},\\ 0\cdot\infty,\\ \infty-\infty,\\ 0^0,\\ 1^\infty,\\ \text{and }\infty^0.$$


## L'Hôpital's Rule

**Theorem(L'Hôpital's rule)**
Let $f(x)$ and $g(x)$ be differentiable at $x=a$, and $g'(x)\neq 0$ for some interval containing $a$. If the limit $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}$ is indeterminate form and $\displaystyle\lim_{x\to a}\frac{f'(x)}{g'(x)}$ is DNE and not equal to $\pm\infty$, then
$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}.
$$

**Remark.** $x\to a$ can be changed to $x\to a^+$, $x\to a^-$, $x\to \infty$, or $x\to -\infty$.

We give two examples when L'Hopital rule is not applicable.

**Example:** The limit $\lim_{x\to 0}\frac{x+1}{2x+1}$ is not an indeterminate form, so L'Hôpital's Rule does not apply. Therefore, we cannot use L'Hôpital's Rule here. The limit evaluates to $\frac{1}{2}$.

**Example:** Although the limit $\lim_{x\to \infty}\frac{x-\cos(x)}{x-\sin(x)}$ is initially of an indeterminate form, we cannot use L'Hôpital's Rule directly. The actual limit is $\lim_{x\to\infty}\frac{1-\frac{\cos(x)}{x}}{1+\frac{\sin(x)}{x}}=1$. L'Hôpital's Rule is not applicable here, as it would lead to an incorrect result of "DNE" (Does Not Exist).