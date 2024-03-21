---
id: abdfb5b6-6bc4-44c2-8dac-116fb3710e5a
layout: post
date: 2024-03-15
title: Lagrange Multipliers and Double Integrals
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [overview,calculus,calculus 3]
categories: [post]

---

# Lagrange Multiplier


The Lagrange Multiplier is merely a tool. It doesn't possess any geometric or physical significance. This is because when you multiply a constant to a restriction ($g(x,y,z)=c\implies kg(x,y,z)=kc$), the Lagrange Multiplier alters in response. The absence of a fixed quantity indicates it lacks any real-world explanation.


## Why comparison is sufficient


In your textbook and class examples, we evaluate the function at point $p$ to determine whether it's a maximum or minimum value, subject to constraints on extreme values. If this seems unusual, that's understandable. In Calculus 1, local maxima and minima are identified by examining the second derivative. We don't need to do this in these examples because we're finding extremes on a closed loop, like a circle or ellipse. There are only two values for $f(p)$ in our examples, so the larger one has to be the maximum and the smaller one has to be the minimum. This is the same as finding an extreme value for a continuous function $f(x)$ on a closed interval $[a,b]$. You can simply compare the values to determine which one is the maximum and which one is the minimum if you only have two extreme points.


## Constraint is a region (an inequality)


If we aim to find the extreme value of $f(x,y)$, subject to $g(x,y)\leq c$, we must determine the extreme values of $f$ without any constraints and with the constraint $g(x,y)=c$.


# Double Integral


## Definition


We want to define the double integral of a function $f(x,y)$ over a rectangle. Given
a rectangle $A=\\{(x,y)\mid a<x<b,c<y<d\\}$, we can create a partition of $A$ by partitioning both $[a,b]$ and $[c,d]$. Let $\\{x_1,x_2,\ldots, x_m\\}$ be a partition of $[a,b]$, and let $\\{y_1,y_2,\ldots, y_n\\}$ be a partition of $[c,d]$, We also assign sample points $x_i^{\ast}\in[x_{i},x_{i+1}]$ and $y_i^{\ast}\in [y_i,y_{i+1}]$. Thus, the double integral of $f$ over $A$ is denoted and defined as follows:


$$
\int\int_Af(x,y)dA = \lim_{\max(|x_i-x_{i+1}|,|y_i-y_{i+1}|)\to 0}\sum_{i=1}^m\sum_{j=1}^nf(x_i^{\ast},y_j^{\ast})|x_i-x_{i+1}||y_i-y_{i+1}|
$$


From the given definition, we can see that the double integral of $f(x,y)$ over $A$ represents the volume beneath the surface $y=f(x,y)$ above $A$. 


**Theorem (Fibini)** If $f$ is continuous on $A$, then we have


$$
\int\int_A f(x,y)dA = \int_c^d\int_a^bf(x,y)dxdx = \int_a^b\int_c^df(x,y)dydx.
$$


This means that if $f$ is smooth, the double integration can be done by first integrating $x$ while treating $y$ as a constant, and then integrating $y$ while treating $x$ as a constant, or vice versa. While the order doesn't theoretically matter, one sequence may be more computationally efficient than the other, e.g. $f(x,y)=\frac{y}{x^2+y^2}.$

