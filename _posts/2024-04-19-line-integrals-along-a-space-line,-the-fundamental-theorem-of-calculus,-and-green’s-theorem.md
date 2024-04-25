---
id: 121048a9-bc8d-48e3-96d7-0c6e63a724ac
layout: post
date: 2024-04-19
title: Line integrals along a space line, the fundamental theorem of calculus, and Green’s theorem
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Line Integrals along a Space Line


## with Respect to the Arc Length


The definition of a space line is nearly identical to that of a plane line. When the line can be parametrized, such as $C:\gamma(t)=0$ for $a\leq t\leq b$, we have the following for $f:C\subseteq\mathbb{R}^3\to\mathbb{R}$:


$$
\int_Cfds = \int_a^bf(\gamma(t))|\gamma'(t)|dt=\int_a^bf(x(t),y(t),z(t))\sqrt{(x'(t))^2+(y'(t))^2+(z'(t))^2}dt.
$$


where $\gamma(t)=(x(t),y(t),z(t))$.


## with Respect to the $x$, $y$, and $z$


The line integral with respect to the $x$, $y$, and $z$ can be evaluated as follows:


$$
\int_Cfdx=\int_a^b f(\gamma(t))x'(t)dt,
$$


$$
\int_Cfdy=\int_a^b f(\gamma(t))y'(t)dt,
$$


and


$$
\int_Cfdx=\int_a^b f(\gamma(t))z'(t)dt.
$$


Let $F=Pi+Qj+Rk$. The three line integrals $\int_CPdx$, $\int_CQdy$, and $\int_CRdz$ often appear together, resulting in the following notation:


$$
\int_CPdx+\int_CQdy+\int_CRdz = \int_CPdx+Qdy+Rdz
$$


### Work


The work is an example of those three integrals appearing simultaneously. Suppose we have a force field $F(x,y,z)=P(x,y,z)i+Q(x,y,z)j+R(x,y,z)k$. If an object is moving along a straight line $L$ with the unit directional vector $\vec{v}$, then the work of the force acting on this object is:


$$
\text{work}=\text{force along }\vec{v}\cdot\text{distance}=(F\cdot \vec{v})\cdot|L|
$$


where the dot between $F$ and $\vec{v}$ is the inner product of vector. Thus, the work along a curve $C:\gamma(t)=0$ for $a\leq t\leq b$ can be calculated by


 


$$
\int_CF(\gamma(t))\cdot\frac{\gamma'(t)}{|\gamma(t)|}ds.
$$


Moreover, we know $ds = \sqrt{x'(t)^2+y'(t)^2}dt = |\gamma'(t)|dt$, so we can conclude that


$$
\text{work}=\int_a^b F(\gamma)\cdot \gamma'dt = \int_C Fd\gamma.
$$


We can always remember $F$ as $Pi+Qj$ and $d\gamma$ as $dx i +dyj$, so $\int Fd\gamma=\int pdx+qdy$.


# The Fundamental Theorem for Line Integrals


**Theorem**. Let $C$ be a smooth curve given by the vector function $\gamma(t)$, $a\leq t\leq b$. Let $f$ be a differentiable function of two or three variables whose gradient vector $\nabla f$ is continuous on $C$. Then


$$
\int_C\nabla f\cdot d\gamma= f(\gamma(b))-f(\gamma(a)).
$$


**proof.** The proof of this theorem is an application of the Chain rule. We have


$$
\begin{align*}
\int_C\nabla f\cdot d\gamma &= \int_a^b \nabla f(\gamma(t))\gamma'(t)dt\\\\
&= \int_a^b\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt})dt\\\\
&=\int_a^b\frac{d}{dt}(f(\gamma(t)))dt\\\\
&=f(\gamma(b))-f(\gamma(a)).
\end{align*}
$$


This theorem states that under appropriate conditions, the line integral is independent of the path. A function is deemed path-independent if its line integral does not depend on the path, as specified by the theorem. Suppose $C_1$ and $C_2$ are two piecewise-smooth curves that have the same initial point and terminal point, and let $F$ be path-independent, i.e. $\int_{C_1}Fd\gamma =\int_{C_2}Fd\gamma$. Then, we have


$$
\int_{C_1-C_2}Fd\gamma=\int_{C_1}Fd\gamma-\int_{C_2}Fd\gamma = 0.
$$


Note that $C_1-C_2$ is a path from the initial point to the terminal point, and then back to the initial point. Therefore, it forms a loop. We refer to any such loop as a _closed_ curve. This observation leads to the following lemma.


**Lemma.** $\int_C F\cdot d\gamma$ is independent of path in $D$ if and only if $\int_C F\cdot d\gamma=0$ for every closed path $C$ in $D.$


We define the following in the following discussion:

- A path C is _simple_ if it doesn't cross itself.
- A region D is _open_ if for any point $p\in D$ there exists a disc in $D$ containing $p$.
- A region D is _connected_ if we can connect any two points in the region with a path that lies completely in D.

We aim to demonstrate that if $\int_C F\cdot d\gamma=0$, then $F$ is almost always conservative. Together with the lemma and the first theorem, we arrive at the following conclusion:


**Theorem.** If $F$ is a conservative vector field, then $\int_CF\cdot d\gamma$ is path independent.


The converse of this statement is not true (refer to the worksheet). However, if we limit $F$ to a “nice” domain, we can derive the inverse statement.


Now, let's delve into the specifics of this inverse statement.


**Theorem.** Suppose $D$ is an open, connected domain, and $F$ is a vector field on $D$ that is of class $C^1$. If $\int_C F\cdot d\gamma$ is path independent for every path $C$ in $D$, then $F$ is a conservative vector field, that is, $F=\nabla f$ for some potential function $f$ on $D$.


**Proof.** The proof of this theorem is multifaceted, involving the use of Stoke's theorem, the properties of a simply-connected domain, and the fundamental theorem for line integrals. Detailed proof is outside the scope of this document and can be found in advanced calculus textbooks.

