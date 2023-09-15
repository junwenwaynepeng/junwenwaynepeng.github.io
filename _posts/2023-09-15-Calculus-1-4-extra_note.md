---
title: Derivative Implies Continuity
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

**Theorem.** If $f$ is differentiable (i.e. derivative exists) at $x=a$, then $f$ is continuous at $x=a$.

**Proof.** We have the following trivial equality

$$(f(x)-f(a)) = \frac{f(x)-f(a)}{x-a}(x-a).$$

Moreover, since the deriviative exists, both limits $\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$ and $\displaystyle\lim_{x\to a}x-a$ exist. We therefore get

$$\lim_{x\to a}f(x)-f(a) = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}(x-a) = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}\lim_{x\to a}(x-a) = 0$$