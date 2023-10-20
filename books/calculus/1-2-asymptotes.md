---
layout: page
title: Asymptotes
subtitle: Horizonta, vertical and slant asymptotes
right-toc: true
left-toc: true
book: calculus
next_page: 1-git-and-github
---

# Asymptotes

## Vertical Asymptotes

We say $x=a$ is a *vertical asysmptote* of a curve $y=f(x)$ if one of the following is true:

$$\lim_{x\to a^+}f(x)=\pm\infty\text{ or }\lim_{x\to a^-}f(x)=\pm\infty.$$

## Horizontal Asymptotes

We say $y=a$ is a *horizontal asymptote* of a curve $y=f(x)$ if one of the following is true:

$$\lim_{x\to \infty}f(x)=a$$\text{ or }\lim_{x\to-\infty}f(x)=a.$$

## Slant Asymptotes

We say $y=(ax + b)$ is a *slant asymptote* of a curve $y=f(x)$ if

$$
\lim_{x\to\infty} [f(x) - (ax + b)] = 0
$$

For rational functions, where $f(x) = \frac{F(x)}{G(x)}$, with both $F$ and $G$ being polynomials, a slant asymptote exists when the degree of the numerator $F$ is one greater than the degree of the denominator $G$ (i.e., $\deg(F) = \deg(G) + 1$). In such cases, $f(x)$ can be expressed as $ax + \frac{R(x)}{G(x)}$, and the slant asymptotes can be given as:

$$
y = ax + \lim_{x\to\infty}\frac{R(x)}{G(x)}.
$$

For non-rational functions, the existence of slant asymptotes can be determined by checking the limit:

$$
\lim_{x\to\infty}\frac{f(x)}{x}.
$$

(or $\lim_{x\to-\infty}\frac{f(x)}{x}$). If this limit exists, it implies that there may be a slant asymptote of the form $ax + b$, where $a$ is the limit and $b=\displaystyle\lim_{x\to\infty}f(x)-ax$.