---
title: Calculus 3 homework 2
tags: ["Calculus 3", "homework"]
---

# Calculus 3 Homework 2

1. To find tangent plain of the surface $z=f(x,y)$ at $(a,b)$, we can either consider using linear approximation or consider that the surface is a level surface of the function $w=F(x,y,z)$, where $F(x,y,z)=z-f(x,y)$, for $w=0$, and then we use the fact that a gradient is perpendicular to the level surface.
	* Use linear approximation to find the tangent space of $z=\dfrac{xy^2}{x^2+y^2}$ at $(1,1)$.
	* Use level surface to find the the tangent space again

2. Suppose
	\[f(x,y)=\begin{cases}\dfrac{xy(x^2-y^2)}{x^2+y^2}\ & if (x,y)\neq (0,0) \\\ 0,\ & if (x,y)=(0,0)\end{cases}.\]
	* Find $\dfrac{\partial^2 f}{\partial x\partial y}$.
	* Find $\dfrac{\partial^2 f}{\partial y\partial x}$.
	* Show that $\dfrac{\partial^2 f}{\partial x\partial y}(0,0)\neq \dfrac{\partial^2 f}{\partial y\partial x}(0,0).$
	(Hint: You can assume $f(0,0)$ exists (actually, $f(0,0)=0$). You will first find $\partial f/\partial x$ and $\partial f/\partial y$. Then, we interpreate $\partial/\partial y$ as that we fix $x$, i.e. set $x=0$, apply $\partail/\partial y$ t, and plug in $y=0$. Following this way, we find $\partial^2 x/\partial y\partial x(0,0)$. Switching the order of differentiation and plugin $0$, we will find $\partail^2 f/\partial x\partial y$)

4. Find the Taylor expansion of $\sin(x)\ln(1-y)$ at $(0,0)$ upto order 3.