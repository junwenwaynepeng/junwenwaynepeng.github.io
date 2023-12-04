---
title: Application of Integrals and Differential Equations 
subtitle: Expect values, the center of mass, and the ordinary differential equations 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
mermaid: true
---

# Expected Value

The expected value, denoted as $E(x)$, of a probability density function $f(x)$ is defined as the improper integral:

$$ E(x) = \int_{-\infty}^\infty x \cdot f(x) dx $$

This value is analogous to an average and can also be interpreted as the "center of mass" in a certain context.

# Center of Mass

Consider two particles with masses $m_1$ and $m_2$, located at positions $x_1$ and $x_2$, respectively. The center of mass for these two particles is given by:

$$ \frac{m_1x_1 + m_2x_2}{m_1 + m_2} $$

For a system of $n$ particles, the center of mass can be determined using induction:

$$ \text{Center of mass} = \frac{\sum_{i=1}^n m_i x_i}{\sum_{i=1}^n m_i} $$

Applying this formula to a region with uniform density $\delta$, bounded by the curves $y = f(x)$, $x = a$, $x = b$, and $y = 0$, where $f(x)$ is positive and integrable, yields the coordinates of the center of mass $(\bar{x}, \bar{y})$:

$$ \bar{x} = \frac{\int_{a}^b x\delta f(x) \, dx}{\int_a^b f(x) dx} $$

$$ \bar{y} = \frac{\int_a^b \frac{\delta}{2}f^2(x) \, dx}{\int_a^b f(x) dx} $$

# Ordinary Differential Equations

An ordinary differential equation (ODE) of order $n$ is represented as:

$$ f_n(x,y) y^{(n)} + f_{n-1}(x,y)^{(n-1)} + \cdots + f_0(x,y) = 0 $$

Here, $y^{(i)}$ denotes the $i$-th derivative of $y$. If $f_n(x,y)$ is non-zero, a solution $y$ of the ODE is a function in $x$.

## Example 1

For the growth of a population, assuming the growth rate is proportional to the population size $P$ at time $t$, the model is given by the ODE:

$$ \frac{dP}{dt} = kP $$

## Example 2

In another scenario where the growth rate depends on both the population and the environmental capacity, the differential equation becomes:

$$ \frac{dP}{dt} = kP(M - P) $$