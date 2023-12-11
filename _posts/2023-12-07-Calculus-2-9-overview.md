---
title: Ordinary Differential Equations
subtitle: Separable form, integral factor, direction field, and mixing problems
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# Techniques of solving order 1 ODEs

## Separable form

If a differential equation is of the form $\frac{dy}{dx} = \frac{P(x)}{Q(y)}$ (or equivalently $y'=P(x)Q(y)$), then we solve the equation by 
$$\int P(x)dx = \int Q(y)dy.$$

## Integral factor (non separable form)

If a differential equation is of the form $y'+P(x)y=Q(x)$ (note that the leading coefficient is 1), then we will find its integral factor 
$$I=e^{\int P(x)dx}$$
and the solution is
$$y=\int IQ(x)dx.$$

# Direction Field

Direction Field of the logistic model $P' = k P(1-\frac{1}{P})$
<div class="compute">
P,t = var('P t')
M = 3 
k = 0.7 
plot_slope_field(k * (1-P/M) * P, (t,0,5), (P,0,M*2))
</div>


Direction Field of the logistic model $y' = \frac{y}{x}$
<div class="compute">
y,x = var('y x')
plot_slope_field(y/x, (x,-5,5), (y,-5,5))
</div>

Direction Field of the logistic model $y' = -\frac{x}{y}$

<div class="compute">
y,x = var('y x')
plot_slope_field(-y/x, (x,-5,5), (y,-5,5))
</div>

Direction Field of the logistic model $y' = \left(\frac{y}{x}\right)^2$

<div class="compute">
y,x = var('y x')
plot_slope_field((y/x)^2, (x,-5,5), (y,-5,5))
</div>

Direction Field of the logistic model $y' = -\left(\frac{x}{y}\right)^2$

<div class="compute">
y,x = var('y x')
plot_slope_field(-(x/y)^2, (x,-5,5), (y,-5,5))
</div>

# Orthogonal trajectories

Given a family of curves $\{C_k\}$ where $k$ is a parameter that can be expressed by $x$ and $y$, an orthogonal trajectory of the family is a curve $C$ such that every intersection of $C$ and $C_i$ are perpendicular. To find $C$, we follow the following steps:

**Step 1** Find $\frac{dy}{dx}=f(x,y)$ of $C_k$

**Step 2** Replace $k$ in $f(x,y)$ in terms of $x$ and $y$.

**Step 3** Let $\frac{dy}{dx} = -\frac{1}{f(x,y)}$

**Step 4** Solve the last ODE.