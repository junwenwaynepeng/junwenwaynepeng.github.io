---
id: dd592514-69a9-4716-84d7-7072df26ec4a
layout: post
date: 2024-03-08
title: Directional derivative, Gradient, and Second Derivative Test
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [calculus 3,overview,calculus]
categories: [post]

---

# Directional derivative


Let $\vec{u}=(\cos(\theta),\sin(\theta))$ represent a unit vector, $z=f(x,y)$ denote a real-valued function, and $p=(a,b)$ be a point within the domain of $f.$ The _directional derivative_ of $f$ at $p$ along $\vec{u}$ is defined as


$$
\nabla_{\vec{u}}f(p)\coloneqq \lim_{t\to 0}\frac{f(p+t\vec{u})-f(p)}{t}
$$


For some fixed $\theta$, we let $G(t)= f(a+t\cos(\theta),b+t\sin(\theta))$. Then, the chain rule implies


$$
G'(0) = \frac{\partial f}{\partial x}\frac{\partial x}{\partial t} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial t}=f_x\cos\theta+f_y\sin\theta =(f_x(p),f_y(p))\cdot(\cos(\theta),\sin\theta).
$$


The vector $(f_x(p),f_y(p))$ is referred to as the _gradient_ of $f$ at $p$, and it is denoted as $\nabla f(p)$. We use the fact that the inner product of two vectors $\vec{v}$ and $\vec{w}$ can also be compute by


$$
\vec{v}\cdot\vec{w} = |\vec{v}||\vec{w}|\cos(\psi)
$$


where $\psi$ is the angle between $\vec{v}$ and $\vec{w}$. So, we have


$$
\nabla_{\vec{u}}f(p)=\nabla f(p)\cos(\phi)
$$


where $\phi$ is the angle between $\nabla f$ and the unit vector $\vec{u}$. The following theorem combines these observation.


**Theorem.** Let $f(x,y)$ be differentiable at $p$. Then, we have


$$
\nabla_{\vec{u}}f(p)=\max_{\vec{v}}(\nabla_{\vec{v}}f(p))
$$


if $\vec{u}=\frac{\nabla f(p)}{|\nabla f(p)|}$, and


$$
\nabla_{\vec{u}}f(p)=\min_{\vec{v}}(\nabla_{\vec{v}}f(p))
$$


if $\vec{u}=-\frac{\nabla f(p)}{|\nabla f(p)|}$.


**Example.**  Find each of the directional derivatives.

1. $\nabla_{\vec{u}}f(2,0)$ where $f(x,y)=xe^{xy}+y$ and $\vec{u}$ is the unit vector in the direction of $\theta=\frac{2\pi}{3}$.
2. $\nabla_{\vec{u}} f$ where $f(x,y,z)=x^3+3x^2y+xyz$ and $\vec{u}$ is the vector $(1,1,2)$

_sol)._

1. $\nabla_{\vec{u}}f(2,0) = f_x(2,0)\cos(2\pi/3) + f_y(2,0)\sin(2\pi/3)$. 
We compute $f_x(x,y)=e^{xy}+xye^{xy}$ and $f_y(x,y)=x^2e^{xy}+1$. Therefore, we have

$$
\nabla_{\vec{u}}f(2,0)=-\frac{1}{2}+\frac{5\sqrt{3}}{2}.
$$

1. The unit vector parallel to  $(1,1,2)$ is $\frac{(1,1,2)}{\sqrt{1+1+4}}$. We compute $f_x(x,y,z) = 3x^2+6xy+yz$, $f_y(x,y,z)=3x^2+xz$, and $f_z(x,y,z)=xy$, so we have

$$
\nabla_{\vec{u}}f = \frac{(3x^2+6xy+yz)+(3x^2+xz)+2(xy)}{\sqrt{6}}.
$$


## Gradient is perpendicular to level curve(surface)


This was illustrated in our discussion of the tangent plane. Let's note that if $z=f(x,y)$, the gradient $(f_x(p),f_y(p))$ of $f$ at point $p$ is perpendicular to the level curve $f(x,y)=f(p)$. Furthermore, the vector $(f_x(p),f_y(p),-1)$ is normal to the tangent plane of the graph $z=f(x,y)$ at point $p$. It can be interpreted as the gradient of the three-variable function $z-f(x,y)$ at $p$. This is because the graph $z=f(x,y)$ can be viewed as a level surface $z-f(x,y)=0$.


# Maximum and minimum of the value of $f$


A point p within the domain of $f$ is called _critical point_ of $f$ if the gradient of $f$ at $p$ equals the zero vector. A point $p$ within the domain of $f$ is called _singular point_ of $f$ if the gradient of $f$ doesn't exist at $p$. Like the one dimensional case, a point is considered maximum or minimum of $f$ only if the point is a critical or singular point of $f.$


**Example.** Find all the critical points of $f(x,y)=3x^2y+y^3-3x^2-3y^2+2$. 


_sol)_ We compute the gradient


$$
\nabla f = (6xy-6x,3x^2+3y^2-6y).
$$


By setting the gradient to the zero vector, we obtain the following system of equations:


$$
\begin{cases}
6xy-6x=0\\\\
3x^2+3y^2-6y=0
\end{cases}
$$


The first equation implies that $x=0$ or $x=1$. If we assume $x=0$, then the second equation becomes $3y^2-6y=0$. This gives us two critical points: $(0,0)$ and $(0,2)$. When $y=1$, the second equation becomes $3x^2-3=0$. This gives us another two critical points $(1,1)$ and $(-1,1)$. Since $f$ is continuous and smooth on its domain, there is no singular point.


## The second derivative test


The discriminant of $f$ at a point $p$ within the domain of $f$ is defined as


$$
D=\det\left|\begin{matrix}
f_{xx}(p) & f_{xy}(p)\\\\
f_{yx}(p) & f_{yy}(p)
\end{matrix}\right|
$$


By Clairaut's theorem, we can also express $D$ as $f_{xx}(p)f_{yy}(p)-f_{xy}(p)^2$. We can use $D$ to determine whether a critical point is a maximum or minimum. This criterion is known as the second derivative test.


**Theorem (the second derivative test).** Suppose the second derivatives of $f$ exist, and $p$ is a critical point of $f$. Then, we have the following criteria:

1. If $D>0$ and $f_{xx}(p)>0$ ($f_{yy}>0$ equivalently), then $p$ is a minimum.
2. If $D>0$ and $f_{xx}(p)<0$ ($f_{yy}<0$ equivalently), then $p$ is a maximum.
3. If $D<0$, then $p$ is a saddle point
4. If $D=0$, then we cannot draw any conclusion without additional work.

**Example.** Continuing from the above example, we calculate:


$$
D=(6y-6)^2-(6x)^2.
$$


For the points $(0,0)$ and $(0,2)$, we observe that $D>0$. Given $f_{xx}(0,0)<0$, we can conclude that $(0,0)$ is a maximum. Similarly, since $f_{xx}(0,2)>0$, $(0,2)$ is a minimum.


For the points $(1,1)$ and $(-1,1)$, we observe that $D<0$. Thus, we can conclude that we have saddle point at $(1,1)$ and $(-1,1)$.

