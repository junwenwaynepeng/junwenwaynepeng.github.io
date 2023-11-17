---
title: Application of integration
subtitle: Area, volume, and arc length
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# Concept

The integral $\displaystyle\int_a^b f(x)dx$ can be interpreted as the sum of all tiny \(f(x)dx\) values from \(a\) to \(b\). Many applications of integration are based on this fundamental concept. To illustrate how this concept is used, let's consider the following geometric question.

# Area

Find the area of the region enclosed by a curve $y=f(x)$ from $a$ to $b$ where $f$ is continuous and positive for all $x\in[a,b]$.

$$\text{A} = \int_a^b dA = \int_a^bf(x)dx$$

where $dA=f(x)dx$ represents a tiny rectangle under the curve with the size of length $f(x)$ and width $dx$.

# Arc length

Find the arc length of a curve $y=f(x)$ from $a$ to $b$.

$$\text{Arc Legnth} = \int_a^b dL = \int_a^b \sqrt{1+f'(x)^2}dx$$

where $dL=\sqrt{dx^2+dy^2} = \sqrt{1+\left(\frac{dy}{dx}\right)^2}$ is the length of a tiny line segment from the point $(x,f(x))$ to $(x+dx,f(x+dx))$.

# Volume of a solid

## The disk method

Find the volume of the solid of revolution generated when the finite region $S$ that lines between $x=a$, $x=b$, and $y=f(x)$ is revolved about $x$-axis.

$$V=\int_{a}^bdV = \int_a^b f(x)^2\pi dx.$$

## The washer method

Find the volume of the solid of revolution generated when the finite region $S$ that lines between $x=a$, $x=b$, $y=f(x)$, and $y=g(x)$ with $f(x)>g(x)$ on $[a,b]$ is revolved about $x$-axis.

$$V=\int_{a}^bdV = \int_a^b \left(f(x)^2-g(x)^2\right)\pi dx.$$

## The cylinder method

Find the volume of the solid of revolution generated when the finite region $S$ that lines between $x=a$, $x=b$, and $y=f(x)$ is revolved about $x=c$ with $b>a>c$.

$$V=\int_a^bdV = \int_a^b2 (x-c)\pi f(x)dx.$$y