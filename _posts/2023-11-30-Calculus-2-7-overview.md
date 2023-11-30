---
title: Technique of Integration Overview
subtitle: Partial fraction, overview, improper integral, comparison test, and Probability 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
mermaid: true
---

# Partial Fraction

To integrate a rational function $\frac{p(x)}{q(x)}$ where both $p(x)$ and $q(x)$ are polynomials, we will employee this technique to write this rational function as sum rational functions. We follows the following process to rewrite $\frac{p(x)}{q(x)}$.

**STEP 1.** Use long division to find $h(x)$ and $r(x)$ and express

$$\frac{p(x)}{q(x)} = h(x)+\frac{r(x)}{q(x)}.$$

**STEP 2.** Factorize $q(x)$ into irreducible factors over $\mathbb{Q}$. More precisely, we write

$$q(x)=q_1(x)^{a_1}\cdots q_n^{a_n}$$

with $q_i\neq q_j$ for all $i\neq j$ and with $a_i\geq 1$ for all $i$.

**STEP 3.** Use the factorization in STEP 3 to rewrite $\frac{r(x)}{q(x)}$. 

$$
\begin{align}
\frac{r(x)}{q(x)}  = & \frac{r_{1}^{(1)}(x)}{q_1(x)} + \frac{r_{1}^{(2)}(x)}{q_1^2(x)} + \cdots \frac{r_1^{(a_1)}(x)}{q_1^{a_1}(x)}+\\\\
&  \frac{r_{2}^{(1)}(x)}{q_2(x)} + \frac{r_{2}^{(2)}(x)}{q_2^2(x)} + \cdots \frac{r_2^{(a_2)}(x)}{q_2^{a_2}(x)}+\\\\
& \cdots +\\\\
& \frac{r_{n}^{(1)}(x)}{q_n(x)} + \frac{r_{n}^{(2)}(x)}{q_n^2(x)} + \cdots \frac{r_n^{(a_n)}(x)}{q_n^{a_1}(x)}
\end{align}
$$

where $r_i^{(j)} = A_{i,j}^{(d-1)}X^{d-1}+\cdots A_{i,j}^{(d-2)}X^{d-2}+\cdot +A_{i,j}^{(0)}$ and $A_{i,j}^{(k)} are some variables.

**STEP 4.** Common the denominator, and compare the coefficients. We can set up an system of linear equations.

**STEP 5.** Solving the above system of linear equations, we will complete the process of the partial fraction.

# Overview of Techniques of Integrations
```mermaid
%%{init: {"flowchart":{"useMaxWidth": 0}}}%%
flowchart LR;
  Start[<a href='#'>$\int f(x)dx$</a>];
  AntiderivativeTable[<a href='#'>Antiderivative table</a>];
  USub[<a href='#'>U sub</a>];
  IBP[<a href='#'>Integration by part</a>];
  TrigIntegral[<a href='#'>Trig integrals</a>];
  TrigSub[<a href='#'>Trig sub</a>];
  PF[<a href='#'>Partial fraction</a>];
  SC[<a href='#'>Special case</a>];
  Start-->AntiderivativeTable;
  Start-->USub;
  Start-->IBP;
  Start-->TrigIntegral;
  Start-->TrigSub;
  Start-->PF;
  Start-->SC;
  USub-->AntiderivativeTable
  USub-->IBP;
  USub-->TrigSub;
  USub-->PF;
  IBP-->AntiderivativeTable
  IBP-->TrigIntegral;
  IBP-->TrigSub;
  IBP-->SC;
  PF-->USub;
  PF-->TrigSub;
```

# Improper Integral

When we integrate $f(x)$ from $a$ to $b$ where $a$ or $b$ is a pole of $f$, or $a$ (or $b$) is infinity (or negative infinity), we will use improper integral. 

**Case (a is a pole)** $\displaystyle\int_a^bf(x)dx = \lim_{t\to a^+}\int_t^bf(x)dx$

**Case (b is a pole)** $\displaystyle\int_a^bf(x)dx = \lim_{t\to b^-}\int_a^{t}f(x)dx$

**Case (a is negative infinity)** $\displaystyle\int_{-\infty}^bf(x)dx = \lim_{t\to -\infty}\int_t^bf(x)dx$

**Case (b is infinity)** $\displaystyle\int_a^\inftyf(x)dx = \lim_{t\to \infty}\int_a^\inftyf(x)dx$

# The Comparison Theorem

Sometime, we only care about if an integral or an infinite series is convergent or not. We can compare the integral that we are interested with another integral that is much easier to evaluate.

**Theorem(The Comparison Theorem)** 
If $f(x)>g(x)$ for $x\in[a,b]$, then $\int_a^bf(x)dx\geq \int_a^b g(x)dx$.

**Corollary.**
- $\sum_{n=1}^\infty \frac{1}{n}$ is divergent.
- $\sum_{n=1}^\infty \frac{1}{n^2}$ is convergent.


# Probability

We say a function $f(x)$ is a probability density function if 

$$\int_{-\infty}^\infty f(x)dx=1.$$

We use the notion $P(a\<X\<b)$ to represent the probability of an event whenever $x$ is greater than $a$ or less than $b$, and it is

$$P(a<X<b) = \int_a^bf(x)dx.$$