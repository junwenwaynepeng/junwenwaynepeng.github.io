---
layout: page
title: Applicatoin of Differentiation
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-2-theorems-assuming-differentiability
---

# Tangent lines

The general definition of tangent lines to a curve comes after the definition of derivative. Let $P=(x_0,y_0)$ be a point on a curve,  and suppose the first derivative $\frac{dy}{dx}$ exists at that point. Then, we define the tangent line of the curve at $P$ as
$$y-y_0 = \left.\frac{dy}{dx}\right|_{(x_0,y_0)}(x-x_0).$$

**Remark.** Let $m_1$ and $m_2$ represent the slopes of lines $L_1$ and $L_2$ respectively. If $L_1$ and $L_2$ are perpendicular to each other, then their slopes satisfy the relation $m_1\cdot m_2=-1$. We use this relation to define the normal line to a curve at a point $P$ as
$$y-y_0 = -\left.\frac{dx}{dy}\right|_{(x_0,y_0)}(x-x_0).$$

# Linear Approximation

A linear function $L(x)=mx+b$ is called the linearization of a function $f(x)$ at $x=a$ if $y=L(x)$ is the tangent line to the curve $y=f(x)$ at $x=a$. We can use estimate the value $f(a')$ by evaluating $L(a')$ when $a'$ is near $a$.

## Concavity v.s. over(under)estimation 

**Proposition.** If $f''$ is positive over an interval containing both $a$ and $a'$, then $L(a')$ is an overestimation. Conversely, if $f''$ is negative over an interval containing both $a$ and $a'$, then $L(a')$ is an underestimation.

## Differential

We aim to estimate the error that exists between the actual result $f(x)$ and the result $f(c)$ due to the measurement process.

To do this, we denote the error of actual value $f(x)$ in relation to the measured result $f(c)$ as $\Delta y$. It's important to note that

$$\Delta y = f(x) - f(c) \approx f'(c)(x-c) = \frac{dy}{dx}dx = dy.$$

This revelation indicates that we can employ implicit differentiation to estimate the error, providing a valuable tool for understanding and quantifying measurement uncertainties.

More precisely, we have

$$\Delta y \approx f'(x) dx.$$

## Absolute and relative errors

We call $\Delta y$ the *Absolute error*, and $\frac{\Delta y}{y}$ the *relative error*.

# Increasing and Decreasing Intervals

**Definition.** We define a function $f(x)$ as *increasing* (*decreasing*) on an interval $I$ if, for any two values $x_1$ and $x_2$ within $I$, the condition $x_1 < x_2$ implies that $f(x_1) \leq f(x_2)$ ($f(x_1) \geq f(x_2)$).

The information regarding whether a function is increasing or decreasing can be deduced from the sign of its first derivative. To clarify this relationship, we have the following theorem:

**Theorem.** The function $f(x)$ is increasing on an open interval $I$ if and only if $f'(x) \geq 0$ on that interval.

**proof.** If $f$ is increasing, then, for any $h$ with $x+h\in I$,  the expression $\frac{f(x+h)-f(x)}{h}$ is greater than zero. Consequently, $\displaystyle f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h} \geq 0$.

Conversely, suppose $x_1$ and $x_2$ are in $I$ with $x_1<x_2$. By the mean value theorem, there exists $c\in (x_1,x_2)$ such that
$$f(x_2)-f(x_1)=f'(c)(x_2-x_1)\geq 0.$$
Therefore, $f$ is increasing on $I$.<div style="text-align: right;">∎</div>

