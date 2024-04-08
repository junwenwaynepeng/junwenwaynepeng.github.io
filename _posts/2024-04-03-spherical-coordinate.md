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


![](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-03-04.png)


A point $(x,y,z)$ in Euclidean coordinate can be obtained from its spherical coordinate $(\rho, \phi, \theta)$, where $r\in[0,\infty]$, $\phi\in[0,\pi]$, and $\theta\in[0,2\pi]$, by 


$$
x=\rho\sin(\phi)\cos(\theta),\text{ }y=\rho\sin(\phi)\sin(\theta),\text{ and }z=\rho\cos(\phi)
$$


From the last eqaulity, we obtain $\phi=\arccos(\frac{z}{\rho})$.  This could be useful in determining the limits of $\phi$ in a triple integral.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/247f3762-d77e-4b53-bd8c-974b8647dfc2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240408T072155Z&X-Amz-Expires=3600&X-Amz-Signature=245187d4f877acb50f5068ba331e96b469ee1b863c0b16811998d178f9063bbe&X-Amz-SignedHeaders=host&x-id=GetObject)


## Integration on a spherical coordinate


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


![](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-03-05.png)


We can interpret $\rho^2\sin(\phi)$ as the ratio of volume change when we switch the measure from $dxdydz$ to $d\rho d\phi d\theta$.

