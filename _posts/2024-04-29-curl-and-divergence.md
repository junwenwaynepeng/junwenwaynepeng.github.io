---
id: 1b672a69-5598-42fd-a82a-60a602d8c32a
layout: post
date: 2024-04-29
title: Curl and Divergence
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Common notation


A common notation that we will use in our discussions in the following weeks is the vector differential operator $\nabla$ ("del") as


$$
\nabla = \frac{\partial}{\partial x}i+\frac{\partial}{\partial y}j+\frac{\partial}{\partial z}k.
$$


# Definitions


We will define two quantities, a vector and a scalar, by using the outer product and inner product respectively.


## Curl


We define _curl_ of a vector field $F=Pi+Qj+Rk$ over $\mathbb{R}^3$ as


$$
\text{curl}(F) = \nabla\times F=\det\left(
\begin{matrix}
i & j & k\\\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\\\
P & Q & R
\end{matrix}\right).
$$


The expanding of $\text{curl}(F)$ is


$$
\text{curl}(F)=\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)i+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)j+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)k
$$


## Divergence


We define _divergence_ of a vector field $F$ over $\mathbb{R}^3$ (or $\mathbb{R}^2$) as


$$
\text{div}(F) = \nabla\cdot F = \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}.
$$


The divergence of a gradient vector field, symbolized as $\nabla f$, is a concept that frequently comes up:


$$
\text{div}(\nabla f) = \nabla\cdot(\nabla f)=\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}+\frac{\partial^2 f}{\partial z^2}
$$


Following this, we introduce the _Laplace operator_, defined as:


$$
\nabla^2=\nabla\cdot\nabla

$$


The Laplace operator, also known as the Laplacian, plays a significant role in many areas of physics, such as in the study of heat conduction, electricity, and magnetism. It is a second-order differential operator in the n-dimensional Euclidean space, defined as the divergence of the gradient of a function. In simple terms, it measures the difference between a function's average value around a point and the function's value at that point.


# Criteria for a Conservative Vector Field in $\mathbb{R}^3$ and the Meaning of Curl


## Criteria


Similar to a vector field in $\mathbb{R}^2$, we use the first-order partial derivative to determine whether a vector field is conservative. Importantly, the first-order partial derivative of a conservative field corresponds to the second-order partial derivative of certain real functions.


**Theorem.** If $F$ is a vector field defined on all of $\mathbb{R}^3$ whose component functions have continuous partial derivatives and $\text{curl}(F)=0$, then $F$ is conservative vector field. 


## Meaning


By adding $0k$ to a plane vector field, we extend the definition of a plane vector field $F=Pi+Qj$ to a space vector field $F=Pi+Qj+0k$. The curl of $F$ is $0i+0j+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)k$. We observe that the coefficient of $k$ corresponds exactly to the function used in Green's theorem.


Let's use the following graphs to better understand what a curl measures.


![Fig 1](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-29-01.svg)


![Fig 1](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-29-01.svg)


![Fig 2](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-29-02.svg)


Let's examine $\frac{\partial P}{\partial y}$ and $\frac{\partial Q}{\partial x}$ at the origin, which is the center of each graph. This partial differential function $\frac{\partial P}{\partial y}$ measures the change in the $x$-coordinate of vectors along the $y$-axis. In Fig 1, the vectors near the origin change from $\downarrow$ to $\uparrow$ along the $y$-axis, where the $x$-coordinate is unchanged. As a result, $\frac{\partial P}{\partial y}=0$. However, in Fig 2, the vector transitions from $\rightarrow$ to $\leftarrow$, indicating that $\frac{\partial P}{\partial y}<0$.


On the other hand, $\frac{\partial Q}{\partial x}$ measures the change in the $y$-coordinate of vectors along the $x$-axis. In Fig 1, vectors near the origin switch from $\leftarrow$ to $\rightarrow$ along the $x$-axis, hence $\frac{\partial Q}{\partial x}=0$. In contrast, in Fig 2, the vectors switch from $\downarrow$ to $\uparrow$ along the $x$-axis, so $\frac{\partial Q}{\partial x}>0$.


Thus, we analyze that $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0$ for Fig 1, and $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}>0$ for Fig 2. Therefore, we can intuitively suggest that the curl measures the degree of rotation in a vector field.


## Connecting with Green's theorem


The formula


$$
\int_{\partial D}F\cdot d\gamma= \iint_D\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}dA

$$


indicates that on the right-hand side, we total the degree of rotation in a region $D$. On the other side, we measure the work of the vector field acting on the boundary of $D$.

