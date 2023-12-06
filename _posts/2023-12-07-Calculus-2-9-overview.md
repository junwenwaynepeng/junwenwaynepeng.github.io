---
title: Ordinary Differential Equations
subtitle: Separable form, integral factor, direction field, and mixing problems
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

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