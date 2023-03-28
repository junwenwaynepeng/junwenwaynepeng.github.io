---
title: Calculus 3 homework 2
subtitle: Tangent spaces and Partial Derivative
tags: ["Calculus 3", "homework"]
css: 
  - ../assets/css/collapse.css
js:
  - ../assets/js/collapse.js
---

# Calculus 3 Homework 2

1. To find tangent plain of the surface $z=f(x,y)$ at $(a,b)$, we can either consider using linear approximation or consider that the surface is a level surface of the function $w=F(x,y,z)$, where $F(x,y,z)=z-f(x,y)$, for $w=0$, and then we use the fact that a gradient is perpendicular to the level surface.
	* Use linear approximation to find the tangent space of $z=\frac{xy^2}{x^2+y^2}$ at $(1,1)$.
	* Use level surface to find the the tangent space again

2. Suppose
	\[f(x,y)=\begin{cases}\frac{xy(x^2-y^2)}{x^2+y^2}\ & if (x,y)\neq (0,0) \\\ 0,\ & if (x,y)=(0,0)\end{cases}.\]
	* Find $\frac{\partial^2 f}{\partial x\partial y}$.
	* Find $\frac{\partial^2 f}{\partial y\partial x}$.
	* Show that $\frac{\partial^2 f}{\partial x\partial y}(0,0)\neq \frac{\partial^2 f}{\partial y\partial x}(0,0).$
	(Hint: Assume that $f(0,0)$ exists (which is actually equal to $0$). First, find $\partial f/\partial x$ and $\partial f/\partial y$. Then, to find $\partial^2 f/\partial y\partial x$, plug in $0$ for $x$ (since we will fix $x$ and calculate the derivative with respect to $y$), apply $\partial/\partial y$, and finally plug in $y=0$. Following this method, we can find $\partial^2 f/\partial y\partial x(0,0)$. To find $\partial^2 f/\partial x\partial y$, switch the order of differentiation and plug in $0$.)

3. Find the Taylor expansion of $\sin(x)\ln(1-y)$ at $(0,0)$ upto order 3.

# Solutions

<div class="collapse">
  <button class="collapse-btn">Show Answer</button>
  <div class="collapse-content.show">
    1. test
    2. test
    3. test
  </div>
</div>
