---
layout: page
title: How to solve an order 1 ODE
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 8-ordinary-differential-equations
next_page: 8-2-applications-of-ode
---

## Separable form

If a differential equation is of the form $\frac{dy}{dx} = \frac{P(x)}{Q(y)}$ (or equivalently $y'=P(x)Q(y)$), then we solve the equation by 
$$\int P(x)dx = \int Q(y)dy.$$

## Integral factor (non separable form)

If a differential equation is of the form $y'+P(x)y=Q(x)$ (note that the leading coefficient is 1), then we will find its integral factor 
$$I=e^{\int P(x)dx}$$
and the solution is
$$y=\int IQ(x)dx.$$