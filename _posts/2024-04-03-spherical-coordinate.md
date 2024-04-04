---
id: 9652e11e-f955-4e51-bf55-66a6f2281c1c
layout: post
date: 2024-04-03
title: Spherical Coordinate
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

Spherical coordinates, also known as spherical polar coordinates, are a system of coordinates used in three-dimensional space. They are especially useful in fields such as physics and engineering where problems often involve three dimensions. In spherical coordinates, a point in space is represented by three values: the radial distance from the origin, the polar angle, and the azimuthal angle.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/2d8079fe-ddfe-4256-9118-667990d391a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240404T050334Z&X-Amz-Expires=3600&X-Amz-Signature=bad6e94abe79696b198c9360a118242ed1e1784e5e6930e7cec8576074aac789&X-Amz-SignedHeaders=host&x-id=GetObject)


A point $(x,y,z)$ in Euclidean coordinate can be obtained from its spherical coordinate $(\rho, \phi, \theta)$, where $r\in[0,\infty]$, $\phi\in[0,\pi]$, and $\theta\in[0,2\pi]$, by 


$$
x=\rho\sin(\phi)\cos(\theta),\text{ }y=\rho\sin(\phi)\sin(\theta),\text{ and }z=\rho\cos(\phi)
$$


From the last eqaulity, we obtain $\phi=\arccos(\frac{z}{\rho})$.  This could be useful in determining the limits of $\phi$ in a triple integral.


# Integration on a spherical coordinate


Given a solid $E$ that can be expressed in spherical coordinate, we can integrate $f(x,y,z)$ over $E$ by the triple integral


$$
\iiint_Ef(\rho\sin(\phi)\cos(\theta),\rho\sin(\phi)\sin(\theta),\rho\cos(\phi))\rho^2\sin(\phi)d\rho d\phi d\theta.
$$


The $\rho^2\sin(\phi)$ is obtained by the jacobian


$$
\left|\frac{\partial(x,y,z)}{\partial(\rho,\phi,\theta)}\right| = \det\left(
\begin{matrix}
\sin(\phi)\cos(\theta) & \rho\cos(\phi)\cos(\theta) & -\rho\sin(\phi)\sin(\theta)\\\\
\sin(\phi)\sin(\theta) & \rho\cos(\phi)\sin(\theta) & \rho\sin(\phi)\cos(\theta)\\\\
\cos(\phi) & -\rho\sin(\phi) & 0
\end{matrix}\right).
$$


### Geometric point of view


The following graph illustrates our estimation of a small cube partition using spherical coordinates.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/29aa01f9-6047-4b2b-8da1-62518115c978/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240404T050334Z&X-Amz-Expires=3600&X-Amz-Signature=b25214899ff17b815357f7fdef120103a4f5afd9074849c0837cc67980467ed0&X-Amz-SignedHeaders=host&x-id=GetObject)


We can interpret $\rho^2\sin(\phi)$ as the ratio of volume change when we switch the measure from $dxdydz$ to $d\rho d\phi d\theta$.

