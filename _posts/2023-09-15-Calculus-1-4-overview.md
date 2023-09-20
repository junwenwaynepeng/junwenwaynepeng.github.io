---
title: Continuity and Derivative
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# Continuity

1. We used but didn't specifically talk about it. If $f$ is continuous, then the following property holds: $$\lim_{x\to a}f(g(x)) = f(\lim_{x\to a}g(x)).$$
**Example.** $\displaystyle\lim_{x\to\infty}\tan^{-1}(x^2+1)$.

2. Continuity is a local property, and there exist examples where a function is continuous at a specific point but nowhere else. Although I didn't explicitly mention it in class, it should be apparent that if we say $f(x)$ is defined for $x \geq a$ and we assert that $f$ is continuous at $a$, this implies that $\lim_{x\to a^{+}}f(x)=f(a)$.

3. Intermediate value thorem

# Derivative

1. The derivative of $f$ is defined as the limit: $$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$ provided that this limit exists. The procedure of determining a derivative is commonly referred to as differentiation.

2. We represent the $n$-th derivative using various notations. It can be denoted as $f'$, $f''$, $f'''$, and $f^{(n)}$ for $n>3$. Another notation involves the use of the differential operator $\frac{d}{dx}$, where the $n$-th derivative is expressed as $\frac{d^n f}{dx^n}$.

3. Differential operations exhibit some convenient algebraic rules that coincidentally align with fraction multiplication and division. These rules include: $$\frac{d}{dx}\frac{d^{n-1}f}{dx^{n-1}}=\frac{d^nx}{dx^n},\ \frac{df}{dt}\frac{dt}{dx} = \frac{df}{dx}\text{ and }\frac{dy/dt}{dx/dt}=\frac{dy}{dx}.$$ These rules are helpful for simplifying expressions involving derivatives.

4. We calculuate the derivatives of some basic functions.