---
id: 0f1fc01e-7bc7-43aa-bb6f-8c2616119176
layout: post
date: 2024-03-14
title: Hints for the First Question of Homework 1
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [quick note,calculus,calculus 3]
categories: [post]

---

Let's apply what we learned in Calculus 1 to the first question of this homework. Given a function $f(x)=x^3$ and $x_0=100$, we want to estimate the relative error of $f(x_0+\Delta x)$, given that the relative error $\frac{\Delta x}{x_0}$ is less than $1\\%$.
What we need to do here is to estimate


$$
\frac{f(x_0+\Delta x)-f(x_0)}{f(x_0)}.
$$


By expanding $f(x_0+\Delta x)$, we obtain $x_0^3+3x_0^2\Delta x +3x_0\Delta x^2+ \Delta x^3$. If we ignore the terms involving $\Delta x^2$ and $\Delta x^3$, the equation simplifies to $x_0^3+3x_0^2\Delta x$. This represents the linear approximation of $f$ at $x_0$. Therefore, the relative error of $f$ is


$$
\frac{3x_0^2\Delta x}{x_0^3} = 3\frac{\Delta x}{x_0} = 3\\%.
$$


The concepts we learn in Calculus 1 can be generalized to higher dimensions. Suppose we need to calculate the relative error of $f(x,y,z)$, given relative errors for $x$, $y$, and $z$. If we closely follow the definition of the relative error of $f$ and ignore all nonlinear terms of $\Delta x$, $\Delta y$, and $\Delta z$, then we obtain


$$
\frac{\text{linear approximation of }f}{f}.
$$


Then, you will use $\frac{\Delta x}{x_0}$, $\frac{\Delta y}{y_0}$, and $\frac{\Delta z}{z_0}$ to estimate the relative error of $f.$

