---
layout: page
title: Techniques of Integration
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 4-the-fundamental-theorem-of-calculus
nex_page: 5-application-of-integrals
---

# Antiderivative Table
In the following table, $f$ and $g$ are functions of $x$, and $C$ is a constant.
| $f$ | antiderivative of $f$ |
|:---:|:---------------------:|
| $f$ | $F+C$ |
| $g$ | $G+C$ |
| $f+g$ | $F+G+C$ |
| $cf$ | $cF+C$ |
| $c$  | $cx+C$ |
| $x^n$ (for $n\neq -1$) | $\frac{x^{n+1}}{n+1}+C$ |
| $x^{-1}$ | $\ln|x|+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ (for $a\neq 1$) | $a^x\ln(a)+C$ |
| $\cos(x)$ | $\sin(x)+C$ |
| $\sin(x)$ | $-\cos(x)+C$ |
| $\sec^2(x)$ | $\tan(x)+C$ |
| $\sec(x)\tan(x)$ | $\sec(x)+C$ |
| $\frac{1}{1+x^2} | $\arctan(x)+C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin(x)+C$ |

# The substitution Rule

We use the substitution rule, a.k.a. u sub, a.k.a. change of variables, to deal with integration of the form

$$\int f(g(x))g'(x)dx.$$

There are three major types:

## $u$ is in a function

**Example 1.** $\int\sqrt{2x+1}dx$

**Example 2.** $\int 2^xdx = \int e^{ln 2 x}dx$

**Example 3.** $\int x\sqrt(1+x^2)dx$

**Example 4.** $\int x^2\sin(x^3)dx$

**Example 5.** $\int x^3\sqrt(1+x^2)dx$

## $u$ is a denomiator

**Example 6.** $\int \frac{3x^2}{x^3+1}dx$

**Example 7.** $\int \frac{x^5}{x^3+1}dx$

**Example 8.** $\int \tan(x) dx =\int \frac{\sin(x)}{\cos(x)}dx$

## $u$ is a numerator

**Example 9.** $\int\frac{\ln(x)}{x}dx$

## Hidden case

Sometime it is not easy to see we have to use u sub as our first step. 

**Example 10.** $\int\frac{1}{\cos(x)(\sin(x)+1)}dx$

**sol)** We let $u=\sin(x)$, so $du=\cos(x)dx$ (i.e. $dx=\frac{1}{\cos(x)}du$). Thus, we have
$$\int\frac{1}{\cos(x)(\sin(x)+1)}dx=\int\frac{1}{\cos^2(x)(u-1)}du = \int\frac{1}{(1-u^2)(u-1)}du.$$

# Integration by part

The integration by part is a consequent of the multiplication rule of derivative and the fundamental theorem of Calculus. Using $d(uv) = udv + vdu$, we derive
$$\int udv = uv-\int vdu.$$

The followings are examples:

**Example 1** $\int \ln(x) dx$

**Example 2** $\int x\sin(x) dx$

**Example 3** $\int x^2e^x dx$

**Example 4** $\int e^x\sin(x) dx$

**Example 5** $\int tan^{-1}(x)dx$ and $\int\sin^{-1}(x)dx$.

**Example 6** $\int \sin^2(x)dx$

If an integral is of the form of a multiplication of two different types of functions, then we can almost certain we will use the integration by part as our first step. However, it is the only situation we will consider the integration by part. For example, the Example 6 above is not a multiplication of two different types of functions.

# Trig Integrals

## Trigonometric integrals $\int \sin^{m}(x)\cos^n(x)dx$

To integrate $\sin^{m}(x)\cos^{n}(x)$, we consider the following cases:

1. If $m$ or $n$ is odd, say $m$ is odd, then we will use the substitution rule by letting $u=\cos(x)$. Using the trig identity $\sin^2(x) = 1-\cos^2(x)$, the integrals of trig functions become integrals of polynomials. 

2. If both $m$ and $n$ are even, we can use integration by part to reduce the $m$ and $n$ by $2$, i.e. an integral of $\sin^m(x)\cos^n(x)$ becomes an integral of $\sin^{m-2}(x)\cos^n(x)$ or $\sin^{m}(x)\cos^{n-2}(x)$ depending on how you set up your $u$ and $dv$. Another simpler method is use the double angle formulas:
$$\sin^2(\theta) = \frac{1-\cos(2\theta)}{2}\text{ and }\cos^{2}(\theta)=\frac{1+\cos(2\theta)}{2}.$$

|m\n| $n$ is odd | $n$ is even |
|---|:----------:|:-----------:|
| $m$ is odd | use 1. by setting either $u=\cos(x)$ or $u=\sin(x)$ | use 1. by setting $u=\cos(x)$ |
| $m$ is even| use 1. by setting $u=\sin(x)$ | Use double angle formula or integration by part to reduce the degree $m$ and $n$ until do able | 

## Trigonometric integrals $\int \sec^{m}(x)\tan^n(x)dx$

To integrate $\sec^{m}(x)\tan^{n}(x)$, we consider the following cases:

1. If $m$ is even and nonzero, then we will use the substitution rule by letting $u=\tan(x)$ (so $du=\sec^2(x)dx$) and the trig identity $\sec^2(x) = \tan^2(x)+1$ to replace trig functions in terms of $u$. By doing so, integrals of trig functions becomes integrals of polynomials. 

2. If $n$ is odd, then we will use the substitution rule by letting $u=\sec(x)$ (so $du=\sec(x)\tan(x)dx$) and the trig identity $\tan^2(x) =\sec^2(x)-1$ to replace trig functions in terms of $u$. By doing so, integrals of trig functions becomes integrals of polynomials.


|m\n| $n$ is odd | $n$ is even |
|---|:----------:|:-----------:|
| $m$ is odd | use 2.  |  |
| $m$ is even and $>0$| use 1. or use 2. | use 1. |  

The remanining cases:

* Case 1 ($m=0$) We will use the trig identity $\tan^2(x)=\sec^2(x)-1$, so $\int\tan^2k(x)dx$ becomses
$$\int\tan^{2(k-1)}(x)(\sec^2(x)-1)dx = \int\tan^{2(k-1)}(x)\sec^2(x) - \int\tan^{2(k-1)}.$$
The first part of the integral belongs the the case where $n$ is even and nonzero, and the second part has degree less than the previous integral. We will repeat this process untill we reduce the degree to $1$ or $0$.

* Case 2 ($m$ is odd and $n$ is even) We will use the integration by part.

## Multiplication of trig functions with distinct angles

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

where $r_i^{(j)}(x) = A_{i,j}^{(d-1)}X^{d-1}+\cdots A_{i,j}^{(d-2)}X^{d-2}+\cdot +A_{i,j}^{(0)}$ and $A_{i,j}^{(k)}$ are some variables.

**STEP 4.** Common the denominator, and compare the coefficients. We can set up an system of linear equations.

**STEP 5.** Solving the above system of linear equations, we will complete the process of the partial fraction.

# Special Cases
## Use geometry to solve a definite integral

**Example 10.** $\int_-1^1\sqrt{1-t^2}dt$ is the area of upper semicircle.

**Theorem.** Let $f$ be a continuous function on $[-a,a]$. Then, 
1. If $f$ is even, i.e. $f(-x)=f(x)$, then $\int_{-a}^{a}fdx = 2\int_0^afdx$.
2. If $f$ is odd, i.e. $f(-x)=-f(x)$, then $\int_{-a}^{a}fdx = 0$.