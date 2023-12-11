---
title: Constant Coefficient ODE
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

A constant coefficient ordinary differential equation is an equation of the form

$$a_ny^{(n)}+a_{n-1}y^{(n-1)}+\cdots a_0=0$$

where $a_i$ are complex numbers.

# Differentail operation

We denote $D(y)=y'$ and refer to $D$ as a differential operation. This notation proves particularly useful when dealing with linear ODEs, where all coefficients of the differential equation are independent of $y$, such as in a constant coefficient ODE.

In general, a constant coefficient differential operation is denoted by $P(D) = a_nD^n+\a_{n-1}D^{n-1}+\cdots+a_0$. When $P(D)$ applies on $y$, it yields $a_ny^{(n)}+a_{n-1}y^{(n-1)}+\cdots a_0=0$. We note that $P(D)$ satisfies the following two properties:
$$P(D)(f+g) = P(D)(f)+P(D)(g)$$
and
$$P(D)(cf)=cP(D)(f),$$
so we know that such a differential operation is linear. In fact, it can be viewed as a linear transformation from the perspective of linear algetra. The solutions of The solutions of $P(D)(y)=0$ then constitute the kernel of the linear transformation $P(D)$. Notably, understanding it as a kernel helps us determine if we have already found all solutions of a linear ODE.

# General Solutions of $(D-a)(y)=0$

We note that $y'-ay$ is separable, so we can simply integrate both side of the following equation

$\frac{1}{y}dy = a dx.$

The general solution is $Ce^{ax}$.

# General Solutions of $(D-a)(D-b)(y)=0$

We observe that $(D-a)(D-b)=(D-b)(D-a)$, and if $y$ is a solution of one of the degree 1 differental operations, say $(D-a)$, then it is a solution of $(D-a)(D-b)$ because we have
$$(D-b)(D-a)(y) = (D-b)(0) = 0.$$

Therefore, we can easily conclude that $C_1e^{ax}$ and $C_2e^{bx}$ are solutions of the differentail equation. The following computation:

$$
\begin{align}
(D-a)(D-b)(C_1e^{ax}+C_2e^{bx}) &= (D-a)(D-b)(C_1e^{ax})+(D-a)(D-b)(C_2e^{bx})\\ \\ \text{because of linearity}\\\\
&=(D-b)(D-a)(C_1e^{ax}) + (D-a)(D-b)(C_2e^{bx})\\ \\ \text{because of commutity}\\\\
&= 0+0 =0
\end{align}
$$

Thus, $C_1e^{ax}+C_2e^{bx}$ is a solution of the differentail equation. In fact, it is the general solution of the differential equation because the $\{e^{ax},e^{bx}\}$ forms a basis of the kernel of $(D-a)(D-b)$. To understand these, it requires you have basic knownledge of linear algebra.

# Examples

**Example 1** The general solutions of $y''-ky=0$ is $C_1e^{\sqrt{k}x} + C_2e^{-\sqrt{k}x}$ where $C_1$ and $C_2$ are complex numbers.

**Example 2** The general solution of $y''-ky =0$ is $C_1e^{\sqrt{k}ix} + C_2e^{-\sqrt{k}ix}$ where $C_1$ and $C_2$ are complex numbers. Moreover, since $e^{ix}$ can be expressed as $\cos(x)+i\sin(x)$, the general solution can also be expressed as $C_1\cos(\sqrt{k}x) + C_2\sin(\sqrt{k}x)$.

