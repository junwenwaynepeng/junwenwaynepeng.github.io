---
layout: page
title: Geometric application of Integrations
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 6-applications-of-integration
next_page: 6-2-probability
---

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

$$V=\int_a^bdV = \int_a^b2 (x-c)\pi f(x)dx.$$

## Center of Mass

Consider two particles with masses $m_1$ and $m_2$, located at positions $x_1$ and $x_2$, respectively. The center of mass for these two particles is given by:

$$ \frac{m_1x_1 + m_2x_2}{m_1 + m_2} $$

For a system of $n$ particles, the center of mass can be determined using induction:

$$ \text{Center of mass} = \frac{\sum_{i=1}^n m_i x_i}{\sum_{i=1}^n m_i} $$

Applying this formula to a region with uniform density $\delta$, bounded by the curves $y = f(x)$, $x = a$, $x = b$, and $y = 0$, where $f(x)$ is positive and integrable, yields the coordinates of the center of mass $(\bar{x}, \bar{y})$:

$$ \bar{x} = \frac{\int_{a}^b x\delta f(x) \, dx}{\int_a^b f(x) dx} $$

$$ \bar{y} = \frac{\int_a^b \frac{\delta}{2}f^2(x) \, dx}{\int_a^b f(x) dx} $$