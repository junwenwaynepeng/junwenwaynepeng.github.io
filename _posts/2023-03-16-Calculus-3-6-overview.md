---
title: Calculus 3-6 Overview
subtitle: Second Order Test and Lagrange Multipliers
tags: ["Calculus 3", "class overview"]
---
1. Second order test for extreme values: We learned how to use the second order test to determine whether a critical point of a two-variable function is a maximum, minimum, or saddle point. The first step is to set the gradient to be a zero vector, i.e.
$$\nabla f(x,y) = (0,0)$$
in order to find critical points. Then we compute its discriminant, namely
$$
D(x,y) = \left|\begin{matrix}
\frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial x\partial y}\\\\
\frac{\partial^2 f}{\partial x\partial y} & \frac{\partial^2 f}{\partial y^2}
\end{matrix}\right|(x,y).
$$
Suppose $(a,b)$ is a critical point, then we can say:
* $f$ has a **minimum** at $(a,b)$ if $D(a,b)>0$ and $\frac{\partial^2 f}{\partial x^2}>0$.
* $f$ has a **maximum** at $(a,b)$ if $D(a,b)>0$ and $\frac{\partial^2 f}{\partial x^2}<0$.
* $f$ has a **saddle** point at $(a,b)$ if $D(a,b)<0$.
* It is indeterminate if $D(a,b)=0$

2. Least squares method: We applied the second order test to deduce a formula for the least squares method. The game theory in the textbook is also a very interesting application of the second-order test and worth reading.

3. Constrained optimization with Lagrange multipliers: We introduced the method of Lagrange multipliers for finding extreme values of a function subject to constraints. We also discussed the interpretation of the Lagrange multipliers in terms of the geometry of the problem and learned how to set up the Lagrange equations and how to solve them to find the extreme values of the function. To summarize this method, if we want to find the extreme values of a function $g(x,y)$ subject to a constrain $f(x,y)=0$, the critical points $(a,b)$ are solutions of the following system of equations
$$
\begin{cases}\nabla g= \lambda\nabla f\\\\
\ f(x,y)=0\end{cases}.
$$
The $\lambda$ is called **Lagrange multiplier** which is also an unknown in the equestion. 