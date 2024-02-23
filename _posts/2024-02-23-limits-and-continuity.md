---
id: 37227ec8-b060-4b0c-9545-f4805db23787
layout: post
date: 2024-02-23
title: Limits and Continuity
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: true
tags: []
categories: [post]
head-package:
  -
    file: "package/sagecell.html"

---

# Definition


**Definition.** Let $f(x,y)$ be a two-variables function on a domain $\Omega\subseteq\mathbb{R}^2$. We say the limit of $f(x,y)$ approaches $L$ as $(x,y)\in\Omega$ approaches $(a,b)$ ($(a,b)$ can be in our not in $\Omega$) and denotes as


$$
\lim_{(x,y)\to(a,b)}f(x,y)=L
$$


if, for all $\varepsilon>0$, there exists a $\delta>0$ such that


$$
\left|f(x,y)-L\right|<\varepsilon
$$


whenever $(x,y)\in B((a,b), \delta)$. Moreover, we say the function $f(x,y)$ is _continous_ at $(a,b)$ if $L$ equals $f(a,b)$.


---


# Limits along paths


Just like a one-dimensional limit has a left and right limit, higher dimensions also have limits along paths. If the limits along two different paths are not the same, then the limit $\displaystyle\lim_{(x,y)\to(a,b)}f(x,y)$ does not exist. To evaluate limits along a specific path, we assign $(x,y)=(f(t),g(t))$. As $t$ approaches $0$, $(f(t),g(t))$ converges towards $(a,b)$. There are two main types of limits along paths we need to examine before stating that the limit exists:

- $(x,y)=(at,bt)$
- $(x,y)=(at^n,bt^m)$ for $n\neq m$

Here, $a$ and $b$ are nonzero real numbers, and $n$ and $m$ are integers.


**Example.** Evaluale the limit $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x^2+y^2}$ if it exists.


	Along $(0, t)$: $\displaystyle\lim_{(x,y)\to (0,0)} \frac{x^2-y^2}{x^2+y^2} = \lim_{t\to 0}\frac{-t^2}{t^2} = -1$.


	Along $(t, 0)$: $\displaystyle\lim_{(x,y)\to (0,0)} \frac{x^2-y^2}{x^2+y^2} = \lim_{t\to 0}\frac{t^2}{t^2} = 1$.


	Thus, we can conclude that the limit doesn’t exist.


Example. Evaluate the limit $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^2+y^4}$ if it exists.


	Along $(at,bt)$: $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^2+y^4} = \lim_{t\to 0}\frac{a^2bt^3}{a^2t^2+b^4t^4} = 0$.


	Along $(at^2,bt)$: $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^2+y^4} = \lim_{t\to 0}\frac{a^2bt^4}{a^2t^4+b^4t^4} = \frac{a^2b}{a^2+b^4}$.


	Thus, we can conclude that the limit doesn’t exists.


---


# The latest example


<div class=compute>
x, y = var(’x,y’)


contour_plot((x*y^2)/(x^2+y^4), (x, -1, 1), (y, -1, 1))
</div>


Observing the contour map of the function near $\frac{xy^2}{x^2+y^4}$, we notice that the level curves intersects at the origin. This reflects the value of the limit along the path $ax=by^2$ are dependent on $a$ and $b$.

