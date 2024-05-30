---
id: 4d51acc7-e385-4281-bc63-0a42f63efdc1
layout: post
date: 2024-05-14
title: Positive and Negative Orientation
subtitle: Oriented Surface, flux, and Stokes’
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Oriented Surface


An oriented surface is a two-dimensional surface that has a specific "up" and "down" side. These orientations are determined by a normal vector, which is a vector that is perpendicular to the surface at every point. The direction of the normal vector specifies the orientation of the surface. In the context of flux integrals, the orientation of the surface is important because it determines the direction in which flow is considered positive.


Let's denote the _oriented surface_ as $\mathbf{S}$ (or $\vec{S}$), which is a subset of $\mathbb{R}^3\times\mathbb{R}^3$ (This allows us to store information about points and normal vectors.). We define an orientation on a surface $S$ by choosing a continuous **unit normal vector field** $\mathbf{N}$ on $S$. The function $\mathbf{N}$ assigns to each point $p$ in $S$ a unit vector $\mathbf{N}(p)$ in $\mathbb{R}^3$ such that for any point $p$ in $S$, the vector $\mathbf{N}(p)$ is orthogonal to the tangent plane to $S$ at $p$. This orientation determines the "up" and "down" sides of the surface. Therefore, $\mathbf{S}$ is $\\{(p,\mathbf{N}(p))|p\in S\\}.$


If $S$ can be represented by a parametric surface $\mathbf{r}(u,v)$, then we can compute $\mathbf N$ as follows:


$$
\mathbf{N}_1=\frac{\mathbf{r}_u\times \mathbf{r}_v}{|\mathbf{r}_u\times \mathbf{r}_v|}\quad\text{or}\quad\mathbf{N}_2=\frac{\mathbf{r}_v\times \mathbf{r}_u}{|\mathbf{r}_v\times \mathbf{r}_u|}=-\mathbf{N}_1.
$$


In many instances, the choice between these two depends on the context of the question.


**Example.** Let us find an oriented surface $\vec{S}$ for a sphere of radius $a$. The parametric surface of a sphere of radius $a$ is given by


$$
\mathbf{r}(\phi,\theta)=a\sin\phi\cos\theta\mathbf{i}+a\sin\phi\sin\theta\mathbf{j}+a\cos\phi\mathbf{k}
$$


for $0\leq\phi\leq \pi$ and $0\leq\theta<2\pi$. Then we find


$$
\mathbf{r}\mathbf{r}_\theta = -a\sin\phi\sin\theta\mathbf{i}+a\sin\phi\cos\theta\mathbf{j}
$$


and so we have


$$
\mathbf{r}_\phi\times\mathbf{r}_\theta=a^2\sin^2\phi\cos\theta\mathbf{i}+a^2\sin^2\phi\sin\theta\mathbf{j}+a^2\sin\phi\cos\phi\mathbf{k}
$$


and $|\mathbf{r}_\phi\times\mathbf{r}_\theta|=a^2\sin\phi$. Therefore, the orientation induced by $\mathbf{r}(\phi,\theta)$ is defined by the unit normal vector


$$
\mathbf{N}=\frac{\mathbf{r}_\phi\times \mathbf{r}_\theta}{|\mathbf{r}_\phi\times \mathbf{r}_\theta|} =\frac{1}{a}\mathbf{r}(\phi,\theta).
$$


We can also consider $\vec{S}=(\mathbf{r}(\phi,\theta),\frac{1}{a}\mathbf{r}(\phi,\theta))$ where the first coordinate contains the information about the point on the surface, while the second coordinate holds the information about the orientation at correspondent points.


Orientation of a surface is determined by the direction of the normal vector. In the context of surface integrals of vector field, this is significant because it affects the resultant sign of the integral, and therefore, the interpretation of the result.


A surface is said to have a _positive orientation_ if the chosen direction of the normal vector is outward. In the context of a solid object, this means the normal vector points away from the center of the object. A positively oriented surface is often associated with a positive flux, assuming that the vector field points outward from the object.


Conversely, a surface has a _negative orientation_ if the normal vector points inward, towards the center of the object. A negatively oriented surface is associated with a negative flux, assuming that the vector field points outward from the object.


In practical terms, the choice of positive or negative orientation often depends on the particular problem or the convention used. The key point is to be consistent within each problem in order to ensure that the results are interpreted correctly.


# Surface Integrals of Vector Fields; Flux


Flux integral can be thought of in terms of water flow. Imagine you have a surface that is submerged in a flowing river. The flux integral would measure how much water is flowing through that surface. If the water is flowing perpendicular to the surface, more water will pass through it, resulting in a higher flux. If the water is flowing parallel to the surface, less water will pass through it, resulting in a lower flux. 


Suppose $S$ is the surface, with the orientation determined by the direction of flow. Let the fluid flowing through $S$ have a density of $\rho(x,y,z)$ and a velocity field of $v(x,y,z)$. The rate of flow per unit area is then given by the vector field $\rho v$.
If we divide $S$ into small patches $S_{ij}$, the $S_{ij}$ is near planar and so we can approximate the mass of fluid per unit time crossing $S_{ij}$ in the direction of the normal $\mathbf{N}$ by the quantity


$$
(\rho v\cdot\mathbf{N})A(S_{ij})
$$


where $\rho$, $v$, and $\mathbf{N}$ are evaluated at some point on $S_{ij}$. By summering these quantities as a Riemann sum and taking the limit we get the surface integral of the function $\rho v\cdot \mathbf{N}$ over $S:$


$$
\iint_S\rho v\cdot\mathbf{N}dS = \lim_{m,n\to\infty}\sum_{i=1}^m\sum_{j=1}^n(\rho v\cdot \mathbf{N})A(S_{ij})
$$


and this is interpreted physically as the rate of flow through $S$.


The notation can be simplified by denoting $\rho v$ as a vector field $\mathbf{F}$. Then, the double integral $\iint_S F\cdot NdS$ can be referred to as the surface integral of the vector field $F$. This is another abbreviation.


$$
\iint_SF\cdot \mathbf{N}dS=\iint_SFd\vec{S}
$$


You can easily remember this as $d\vec{S}=\mathbf{N}dS$. Note that if $S$ is a parametric surface, we can further expand the double integral.


$$
\iint_SFd\vec{S}=\iint_SF\cdot \mathbf{N}dS=\iint_D F\cdot\frac{\mathbf{r}_u\times \mathbf{r}_v}{|\mathbf{r}_u\times \mathbf{r}_v|}|\mathbf{r}_u\times \mathbf{r}_v|dA = \iint_D F\cdot(\mathbf{r}_u\times \mathbf{r}_v)dA
$$


where the parametric surface $\mathbf{r}:D\to S$ represents $S$. This formula assumes that the orientation $\mathbf{N}$ of $S$ is induced by $r_u\times r_v$.  It's important to determine if this is the direction you want. For the opposite orientation, we multiply by $-1$.


# Stokes' Theorem


Stokes' Theorem is a fundamental theorem in vector calculus that relates the surface integral of a vector field to the line integral of the vector field around the boundary of the surface. Formally, 


**Theorem.** If $\mathbf{F}$ is a vector field whose components have continuous first partial derivatives on an open region that contains a piecewise-smooth surface $S$, and $S$ is a surface with a non-empty boundary denoted as $\partial S$, and $\partial S$ is a simple, closed piecewise-smooth space curve. If we view the surface from the top, let the orientation of the curve be counter-clockwise. We then use the right-hand rule to define the surface orientation. We let $\mathbf{N}$ be the upward-pointing (i.e. coefficient of $\mathbf{k}$ is positive) unit normal on S. Then


$$
\int_{\partial S}F\cdot d\gamma =\iint_S\text{curl} F\cdot d\vec{S}.
$$


In essence, Stokes' Theorem says that the total circulation of a vector field $\mathbf{F}$ around the boundary curve of a surface $S$ is equal to the total flux of the curl of $\mathbf{F}$ through $S$. This theorem is incredibly useful in physics and engineering for solving problems related to fluid flow, electromagnetism, and more.


**Remark.** Note that if $S$ lies in the $xy$-plane, then the upward unit normal vector is $\mathbf{k}$. We can see Stokes' theorem implies Green's theorem


$$
\int_{\partial S}F\cdot d\gamma=\iint_S\text{curl}F\cdot d\vec{S} =\iint_S\text{curl}F\mathbf{k}dS.
$$


Thus, we can view Stokes' theorem as a generalization of Green's theorem, extending the applicable surface from a flat one to a convex one.

