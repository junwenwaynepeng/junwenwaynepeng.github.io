---
id: 22e56800-ef1a-4f08-90fb-9b34f2d9804b
layout: post
date: 2024-04-17
title: Vector Fields and Line Integrals
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Vector Fields


A vector field $F$ is a function that maps from $\mathbb{R^n}$ to $\mathbb{R}^n$, where $n\geq 2$. For $n=2$, we denote $F$ as


$$
P(x,y)i+Q(x,y)j=\langle P(x,y),Q(x,y)\rangle

$$


Here, $P$ and $Q$ are functions from $\mathbb{R}^2$ to $\mathbb{R}$ and they are the _component functions_ for $F$. For $n=3$, $F$ is denoted as


$$
P(x,y,z)i+Q(x,y,z)j+R(x,y,z)k=\langle P(x,y,z),Q(x,y,z),R(x,y,z)\rangle
$$


We can visualize $F$ by drawing corresponding vectors in its space.


**Example.** $F(x,y)=-yi+xj=\langle -y,x\rangle$ are vectors perpendicular to $\langle x,y\rangle$. Then, the following graph visualizes $F$. (The following is a link to Desmos that draws the vector field $F$)


[embed](https://www.desmos.com/calculator/yi7sig3nfj)


**Example.** Gravitation can be considered a force, and force can be represented by vectors. Therefore, if we place a mass $M$ at the origin, each point in space will exert a force towards the origin. This mass induces a vector field in space, called _gravitation field_. So, what is this function $F$?


A force is defined by its _scalar_ and _direction(a unit vector)_. According to Newton's Law of Gravity, the scalar of this force at a point $(x,y,z)$ is given by


$$
\frac{mMG}{r^2}
$$


In this formula, $m$ represents your mass, $G$ is the gravitational constant, and $r=\sqrt{x^2+y^2+z^2}$ is the distance from the point $(x,y,z)$ to the origin. The direction of gravity is the unit vector parallel to $-\langle x,y,z\rangle$, which is


$$
\frac{\langle -x,-y,-z\rangle}{\sqrt{x^2+y^2+z^2}}.
$$


Putting both information together, we have the gravitation field


$$
F(x,y,z)=\frac{-xmMG}{(\sqrt{x^2+y^2+z^2})^3}i+\frac{-ymMG}{(\sqrt{x^2+y^2+z^2})^3}j+\frac{-zmMG}{(\sqrt{x^2+y^2+z^2})^3}k.
$$


**Example**. The gradient $\nabla f$ of a differentiable function $f:\mathbb{R^2}\to \mathbb{R}$ is a vector field. This vector field is known as the gradient field. If $F$ is a gradient field and $\nabla f=F$, then $f$ is referred to as a _potential function_ for $F$.


# Line Integrals


## Line Integrals with Respect to an Arc Length


A line integral signifies the integration of a function along a smooth curve $C$. We define the line integral using the Riemann sum, taking it as the limit. That is


$$
\int_Cf(x,y)ds = \lim_{n\to\infty}\sum_{i=1}^nf(x_i^\ast,y_i^\ast)\Delta s_i.
$$


The $s$ represents the length of the curve $C$. If $C$ can be parametrized by $(x(t),y(t))$ from $a$ to $b$, then we also have


$$
s(t)=\int_{C_x} ds=\int_{a}^t\sqrt{x'(t)^2+y'(t)^2}dt
$$


where $C_x$ represents a segment of the curve $C$ extending from $(x(a),y(a))$ to $(x(t),y(t))$. Clearly, it implies


$$
ds = \sqrt{x'(t)^2+y'(t)^2}dt.
$$


Therefore, it follows


$$
\int_Cf(x,y)ds = \int_a^b f(x(t),y(t))\sqrt{x'(t)^2+y'(t)^2}dt.
$$


**Remark.** If $C$ is a piecewise-smooth curve, i.e. $C$ is a disjoint union of finitely many smooth curves $C_1, C_2,\ldots, C_n$, then


$$
\int_C fds = \int_{C_1}fds+\cdots\int_{C_n}fds.
$$


## Line Integral with respsect to $x$ and $y$


The definitions of line integrals along a smooth curve $C$ with respect to $x$ and $y$ are given by the limits


$$
\begin{align*}
\int_Cf(x,y)dy = \lim_{n\to\infty}\sum_{i=1}^nf(x_i^\ast,y_i^\ast)\Delta x_i\\\\ 
\int_Cf(x,y)dx = \lim_{n\to\infty}\sum_{i=1}^nf(x_i^\ast,y_i^\ast)\Delta y_i
\end{align*}
$$


where $\Delta s_i^2=\Delta x_i^2+\Delta y_i^2.$ If $C$ can be parametrized by $(x(t),t(t))$ from $a$ to $b$, then 


$$
\int_Cf(x(t),y(t))x'(t)dt\quad\text{and}\quad\int_Cf(x(t),y(t))y'(t)dt.
$$


Let $F(x,y)=P(x,y)i+Q(x,y)j$. In this case, line integrals with respect to $x$ and $y$ often appear together. We then will write


$$
\int_CP(x,y)dx+\int_CQ(x,y)dy=\int_CP(x,y)dx+Q(x,y)dy.
$$


**Remark.** Line integrals along a smooth curve usually depend on the curve $C$, even if the curve has the same starting and ending points. It's intriguing to know what kind of function $F$ has an integral that is independent of the curve and only depends on its starting and ending points.

