---
layout: page
title: Geometric application of Integrations
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 6-1-geometic-applications-of-integration
next_page: 7-Improper Integral
---

# Probability density function

We say a function $f(x)$ is a probability density function if 

$$\int_{-\infty}^\infty f(x)dx=1.$$

We use the notion $P(a\<X\<b)$ to represent the probability of an event whenever $x$ is greater than $a$ or less than $b$, and it is

$$P(a<X<b) = \int_a^bf(x)dx.$$

# Cummulative distribution function

This function $P(a<X<x)$ is called *cummulative distribution function* and is denoted by $F_X(x)$. Note that cummulative distribution function is an antiderivative of $f$.

# Expected value

The *expected value* or *expactation*, denoted as $E(x)$, of a probability density function $f(x)$ is defined as the improper integral:

$$ E(x) = \int_{-\infty}^\infty x \cdot f(x) dx $$

This value is analogous to an average and can also be interpreted as the "center of mass" in a certain context.

# Variance

The *variance* of probability density function $f$ is

$$\int_{-\infty}^\infty (x-m)^2f(x)dx$$,

where $m$ is the expected value.