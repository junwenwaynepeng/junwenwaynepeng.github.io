---
id: c9b06f76-9de2-4ef0-8b14-d2031bf11c0e
layout: post
date: 2024-05-17
title: Stokes’ Theorem and Divergence Theorem
subtitle: Generalization of Green’s theorem and some examples
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Examples of Stokes' Theorem


**Example.** Evaluate $\int_C\mathbf{F}\cdot d\gamma$, where $\mathbf{F}(x,y,z)=-y^2\mathbf{i}+x\mathbf{j}+z^2\mathbf{k}$ and $C$ is the curve of intersection of the plane $y+z=2$ and the cylinder $x^2+y^2=1$. (Orient $C$ to be counterclockwise when viewed from above.)


_Sol)_ The curve $C$ (an ellipse) is shown in below.


[embed](https://www.desmos.com/3d/ny7zgcbfol)


We can evaluate the line integral by parameterizing the curve $C$ which is $\cos t\mathbf{i}+\sin t\mathbf{j} +2-\sin(t).$ However, it is easier to use Stokes' Theorem. We first compute


$$
\text{curl}\mathbf{F}=\det\left|
\begin{matrix}
\mathbf{i} & \mathbf{j} &\mathbf{k}\\\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\\\
-y^2 & x & z^2
\end{matrix}\right|=(1+2y)\mathbf{k}
$$


Stokes' Theorem allows us to choose any (oriented, piecewise-smooth) surface with boundary curve $C$. Among the many possible such surfaces, the most convenient choice is the elliptical region $S$ in the plane $y+z=2$ that is bounded by $C$. If we orient $S$ upward, then $C$ has the induced. Note that $S$ is a graph, and the parametrized surface $S$ is


$$
\mathbf{r}(x,y)=x\mathbf{i}+y\mathbf{j}+(2-y)\mathbf{k}\quad\text{with }D:x^2+y^2\leq 1.
$$


We will need the upward unit normal vector of $S$ later. Let us compute
Now, Using Stokes' theorem, we have


$$
\mathbf{r}_x\times \mathbf{r}_y=\left|\begin{matrix} \mathbf{i} & \mathbf{j} & \mathbf{k}\\\\
1 & 0 & 0\\\\
0 & 1 & -1\end{matrix}\right|=\mathbf{j}+\mathbf{k}.
$$


$$
\begin{align*}
\int_C\mathbf{F}\cdot d\gamma & =\iint_S\text{curl}(\mathbf{F})\cdot d\vec{S}=\iint_D\text{curl}(\mathbf{F})\cdot (\mathbf{r}_x\times\mathbf{r}_y)dA\\\\
& = \iint_D1+2ydA = \int_0^{2\pi}\int_0^1(1+2\sin(\theta))rdrd\theta\\\\
& = \pi
\end{align*}
$$


**Remark.** Note that Stokes' theorem implies that If $S_1$ and $S_2$ have the same boundary curve, i.e. $\partial S_2=\partial S_2$, that is simple and closed, then we have 


$$
\iint_{S_1}\text{curl}\mathbf{(F)}d\vec{S}= \iint_{S_2}\text{curl}(\mathbf{F})d\vec{S}.
$$


Note that the orientations of $S_1$ and $S_2$ are both either upward or downward (roughly speaking). If we consider $-S$ as the oriented surface opposite to $S$, we arrive at the following corollary.


**Corollary.** Let $S$ be a simple closed curve. Then, we have


$$
\iint_S\text{curl}(\mathbf{F})d\vec{S}=0
$$


This remark also led to an advanced method of using Stokes' theorem. Suppose we want to evaluate a surface integral along a surface, $S$, where the vector field on $S$ might complicate the integral. If we note that the vector field inner product with the normal vector on $S'$ is constant or perhaps zero where $S'$ shares the same boundary as $S$, we can evaluate the surface integral over $S'$ instead of $S$.


**Example.** Use Stokes' Theorem to compute the integral $\iint_S\text{curl}(\mathbf{F})\cdot  d\vec{S}$, where $\mathbf{F}(x,y,z)=xz\mathbf{i}+yz\mathbf{j}+xy\mathbf{k}$ and $S$ is the part of the sphere $x^2+y^2+z^2=4$ that lies inside the cylinder $x^2+y^2=1$ and above the $xy$-plane.


_sol)_ Note that the surface $S$ and the disc $S'=\\{(x,y,z)|x^2+y^2=1, z=\sqrt{3}\\}$ share the same boundary, and the unit normal vector of $S'$ is $\mathbf{k}$. Moreover, we compute


$$
\text{curl}(\mathbf{F})=\det\left|\begin{matrix}
\mathbf{i} & \mathbf{j} & \mathbf{k}\\\\
\frac{\partial}{\partial x} & 
\frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\\\
xz & yz & xy \end{matrix}\right| = (x-y)\mathbf{i} + (x-y)\mathbf{j} +0\mathbf{k}
$$


Thus, the inner product of $\text{curl}(\mathbf{F})$ and $\mathbf{k}$ is $0$, and we conclude that the surface integral is $0$.


# Divergence Theorem


Let $E$ be a simple solid region and let $S$ be the boundary surface of $E$, given with positive (outward) orientation. Let $F$ be a vector field whose component functions have continuous partial derivatives on an open region that contains $E$. Then


$$
\iint_S\mathbf{F}\cdot d\vec{S}=\iiint_E\text{div}(\mathbf{F})dV
$$


**Remark.** Stokes' theorem expands on Green's theorem by transforming the region enclosed by the simple and closed curve in Green's theorem into a non-flat surface. Conversely, the divergence theorem broadens Green's theorem by increasing the dimension of the theorem. In other words, Stokes' theorem extends the rotational form of Green's theorem, while the divergence theorem extends its flux form. From a physical perspective, the divergence theorem is easier to comprehend. The flux integral measures the amount of a fluid flowing through an imagined surface, which can also measure the expansion caused by the vector field in the region surrounded by this imagined surface.


**Example.** Find the flux of the vector field $\mathbf{F}(x,y,z)=z\mathbf{i}+y\mathbf{j}+x\mathbf{k}$ over the unit sphere $x^2+y^2+z^2=1$.


_sol)_ First we compute the divergence of $\mathbf{F}$:


$$
\text{div}(\mathbf{F})=1
$$


The unit sphere $S$ is the boudary of the unit ball $B$ given by $x^2+y^2+z^2\leq 1$. Thus the divergence Theorem gives the flux as the volume of $B$, that is $4\pi/3$.


**Example.** Evaluate $\iint_S\mathbf{F}\cdot d\vec{S}$, where 


$$
\mathbf{F}(x,y,z)=xy\mathbf{i}+(y^2+e^{xz^2})\mathbf{j}+\sin(xy)\mathbf{k}
$$


and $S$ is the surface of the region $E$ bounded by the parabolic cylinder $z=1-x^2$ and the planes $z=0$, $y=0$, and $y+z=2$.


_sol)_ Computing the flux directly will be extremely challenging for two reasons. First, the surface $S$ is a combination of four continuous surfaces. This means you would need to compute the surface integral four times, which is complex, even if Stokes' theorem might reduce the number. Second, the vector field itself is more complicated compared to its divergence 


$$
\text{div}(\mathbf{F})=3y,
$$


which is easier to handle. Therefore, we use the Divergence theorem to transform the given surface integral into a triple integral. The easiest way to evaluate the triple integral is to express $E$ as a type 3 region:


$$
E=\\{(x,y,z)|-1\leq x\leq 1, 0\leq z\leq 1-x^2, 0\leq y\leq 2-z\\}.
$$


Then, we have


$$
\iint_S\mathbf{F}\cdot d\vec{S}=\iiint_E\text{div}(\mathbf{F})dV=\frac{184}{35}.
$$

