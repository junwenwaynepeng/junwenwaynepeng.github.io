---
layout: page
title: Ordinary Differential Equations
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 7-improper-integrals
next_page: 8-1-how-to-solve-order-1-ode
---

An order $n$ ordinary differential equation (ODE) is an equation of the form

$$ f_n(x,y) y^{(n)} + f_{n-1}(x,y)y^{(n-1)} + \cdots + f_1(x,y)y' + f_0(x,y) = 0 $$

where $y^{(i)}$ denotes the $i$-th derivative of $y$. A solution $y$ of the equation is a function in $x$. If a solution is a constant function, then we call such a solution *equilibriant solution*.

## Example 1

For the growth of a population, assuming the growth rate is proportional to the population size $P$ at time $t$, the model is given by the ODE:

$$ \frac{dP}{dt} = kP $$

## Example 2

In another scenario where the growth rate depends on both the population and the environmental capacity, the differential equation becomes:

$$ \frac{dP}{dt} = kP(M - P) $$