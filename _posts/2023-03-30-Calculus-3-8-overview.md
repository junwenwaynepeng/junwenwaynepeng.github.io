---
title: Calculus 3-8 Overview
subtitle: Switching the order of integration and polar coordinate
tags: ["Calculus 3", "Overview"]
---

In the 8th class, we went over a few examples to practice the technique of definite and indefinite integrating a function. The order of integration **won't** change the value of an integral. However, we discussed how the order of integration can sometimes be important, and that it is essential to determine the limits (boundary conditions) of x and y of an area $\Omega$ in order to evaluate a definite double integral correctly.

We then talked about the technique of switching between controlling $y$ by $x$ or controlling $x$ by $y$, depending on which order of integration is easier. We went over a few examples to illustrate how switching between orders of integration can make a computation easier or more difficult.

Here are a few examples that we showed in the class.

## Example

1. $\int\int \frac{y}{\sqrt{x^2+y^2}}dxdy$
    > $I=\int\int\frac{y}{\sqrt{x^2+y^2}}dxdy = \int\int \frac{y}{\sqrt{x^2+y^2}}dydx$. Let $u=x^2+y^2$, and $du = 2ydy$. We arrive
    $$I=\int u^{1/2}dx = \int \sqrt{x^2+y^2}dx = y\int\sqrt{1+(\frac{x}{y})^2}dx.$$
    Let $w=x/y$ and $dw=\frac{1}{y}dx$. We have $I=y^2\int\sqrt{1+w^2}dw$. This integration can be solve by using trig substitution. The relative trig equality is $1+\tan^2\theta=\sec^2\theta$.

2. $\int\int \frac{y}{\sqrt{x^2-y^2}}dxdy$ or $\int\int \frac{y}{\sqrt{y^2-y^2}}dxdy$
3. $\int_{1}^{0}\int_{y}^{1} \sin(x^2)dxdy$

Next, we introduced the concept of polar coordinates. We explained how polar coordinates are different from Euclidean coordinates, and how we can transform between the two coordinate systems. We discussed how a point in polar coordinates is represented by an angle $\theta$ and a radius $r$, and how we can find the x and y values of a point in Euclidean coordinates using the formulas $x = r\cos(\theta)$ and $y = r\sin(\theta)$. Finding the polar coordinate of a point in Euclidean coordinate heavily relies on the sense of geometry. It is important to know that the angle $\theta$ also give you the direction of ray which shows that $r$ is positive or negative.

Finally, we talked about how to find the limits of $\Omega$ in polar coordinates. We explained how to express the boundaries of a region in polar coordinates, and how to use these boundaries to set up a double integral in polar coordinates. We went over a few examples to illustrate the technique of finding limits in polar coordinates and showed how the process is similar to finding limits in Euclidean coordinates. An important thing to keep in mind is that we always consider **counter-clockwise** when we determine the limits of $\theta$.

