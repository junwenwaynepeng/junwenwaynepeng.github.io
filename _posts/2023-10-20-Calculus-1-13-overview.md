---
title: L'Hôpital's Rule
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

We say a limit $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}$ is called an indeterminate form if the fraction $\displaystyle\frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}$ is of one of the following form
$$\frac{0}{0},\\ \pm\infty.$$

**Theorem(L'Hôpital's rule)**
Let $f(x)$ and $g(x)$ be differentiable at $x=a$, and $g'(x)\neq 0$ for some interval containing $a$. If the limit $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}$ is indeterminate form and $\displaystyle\lim_{x\to a}\frac{f'(x)}{g'(x)}$ is DNE and not equal to $\pm\infty$, then
$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}.
$$

**Remark.** $x\to a$ can be changed to $x\to a^+$, $x\to a^-$, $x\to \infty$, or $x\to -\infty$.

We give two examples when L'Hopital rule is not applicable.

**Example:** The limit $\lim_{x\to 0}\frac{x+1}{2x+1}$ is not an indeterminate form, so L'Hôpital's Rule does not apply. Therefore, we cannot use L'Hôpital's Rule here. The limit evaluates to $\frac{1}{2}$.

**Example:** Although the limit $\lim_{x\to \infty}\frac{x-\cos(x)}{x-\sin(x)}$ is initially of an indeterminate form, we cannot use L'Hôpital's Rule directly. The actual limit is $\lim_{x\to\infty}\frac{1-\frac{\cos(x)}{x}}{1+\frac{\sin(x)}{x}}=1$. L'Hôpital's Rule is not applicable here, as it would lead to an incorrect result of "DNE" (Does Not Exist).