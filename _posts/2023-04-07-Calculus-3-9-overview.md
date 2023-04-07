---
title: Calculus 3-9 Overview
subtitle: 
tags: Calculus 3, Overview
customjs:
  - 
---

# Integration Using Polar coordinates

In our latest class, we delved deeper into integration and introduced the concept of integration using polar coordinates. We started by discussing how to find the area enclosed by a polar curve using double integration.

## Area enlosed by a polar curve

Suppose $r=r(\theta)$ is a simple curve surrounding the origin. The enclosed area $\Sigma$ is
$$\Sigma: 0\leq \theta\leq 2\pi,\ 0<r\leq r(\theta).$$
Then, the area $A(\Sigma)$ is
$$\int\int_\Sigma rdrd\theta.$$

Here, we integrate $r$ over the area enclosed by the polar curve. At first, the appearance of $r$ in the integration may seem odd, but this is due to the change of variables involved in polar coordinates.

## Polar coordinates make some double integration easier

Another reason of considering integration using polar coordinates is that we might be not able to write down limits of an area $\Omega$ in an double integral $\int\int_\Omega f(x,y)dxdy$. For example, it is not easy to write limits of $x$ and $y$ for $\Omega:x^2+y^2\leq 1$, but is much easier in polar coordinates. Another example which we didn't mention in the class is the following:

* $\int\int_{\Omega} e^{x^2+y^2}dxdy$ for $\Omega:x^2+y^2\leq 1$.

It is not only better to express $\Omega$ in polar coordinates, but also can only be integrated in polar coordinates.

# Change of Variable and Jacobian

To explain the '$r$' above, we introduced the change of variable in two dimensions and compared it with the change of variable in one dimension. In the one-dimensional case, we know that we need something like dx=x'(u)du. Geometrically, a unit in the original variable $x$ might be not a unit in the new variable $u$, so $x'(u)$ is used to reflect this change. Similarly, a unit area $dxdy$ might be not a unit area in new variable $u$ and $v$, so we need something to represent this change. This guy is **Jacobian**
$$
J_{F}(u,v)=\det\left|
\begin{matrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\\\
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
\end{matrix}
\right|
$$
where $F(u,v)=(x(u,v),y(u,v))$ is a change of variable.

To better understand this concept, we provided a few examples of change of variables and used them to explain the role of '$r$' in the beginning.