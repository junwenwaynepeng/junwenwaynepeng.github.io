---
id: 454aaf00-ef1c-4f69-a426-83613891e8c3
layout: post
date: 2024-04-01
title: Polar Coordinate
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Polar Coordinate


The polar coordinate system is a two-dimensional coordinate system in which each point on a plane is determined by a distance from a reference point and an angle from a reference direction. The reference point (analogous to the origin of a Cartesian system) is called the pole, and the ray from the pole in the reference direction is the polar axis. The distance from the pole is called the radial coordinate or radius, and the angle is the angular coordinate, polar angle, or azimuth.


## Exchange between Polar coordinate and Cartesian system


Given a point $(r,\theta)$ in polar coordinates, its Cartesian equivalent is $(r\cos(\theta), r\sin(\theta))$. Conversely, a Cartesian coordinate $(x,y)$ translates to the polar coordinate $(\sqrt{x^2+y^2},\tan^{-1}(y/x))$ in polar form.


## Integration in Polar Coordinates


Let $R$ be a region. Then, we have


$$
\int\int_Rf(x,y)dxdy = \int\int_Rf(r\cos(\theta),r\sin(\theta))\left|\frac{\partial(x,y)}{\partial(r,\theta)}\right|drd\theta
$$


where the Jacobian is


$$
\left|\frac{\partial(x,y)}{\partial(r,\theta)}\right|=\det\left(\begin{matrix}\frac{\partial x}{\partial r} & \frac{\partial x}{\partial\theta}\\\\ \frac{\partial y}{\partial r}& \frac{\partial y}{\partial\theta}\end{matrix}\right)=\det\left(\begin{matrix}\cos\theta & -r\sin\theta\\\\ \sin\theta & r\cos\theta\end{matrix}\right)=r.
$$


Note that the region $R$ on the right hand side is expressed in terms of the polar coordinate.


## Example


$$
\int_{-1}^1\int_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}}\sqrt{x^2+y^2}dydx
$$


This integrate might appear difficult to integrate at the first glance. However, after change to the polar coordinate, we get


$$
\int_0^1\int_0^{2\pi}r^2drd\theta
$$


which is very easy to integrate. Note that $R=\\{(x,y)|-1\leq x\leq 1,\quad -\sqrt{1-x^2}\leq y\leq \sqrt{1-x^2}\\}$ and $\\{(r,\theta)|0\leq r\leq 1,\quad 0\leq \theta\leq 2\pi\\}$ represent the same region.

