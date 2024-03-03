---
id: 95f5fbd6-3233-4b24-b62d-666eb2ed64de
layout: post
date: 2024-03-01
title: Limits(Convergent cases), partial derivatives, and Tangent planes
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [calculus-3,calculus,overview]
categories: [post]

---

# Limits (convergent case)


There are two primary methods to establish that a limit exists. One can obtain a limit either by directly evaluating the function at the given point, after some possible algebraic manipulation, or by employing the squeeze theorem (definition or inequalities).


**Example.** $\displaystyle\lim_{(x,y)\to (1,1)}\frac{x^2-y^2}{x-y} = \lim_{(x,y)\to (1,1)} x+y = 2 $.


**Example.** Evaluate that $\displaystyle\lim_{(x,y)\to (0,0)}\frac{5(xy)^3}{x^2+y^2}$. 


<u>Method 1.</u>


Here, we provide two methods that differ from the one presented in class. Since we want both $x$ and $y$ to approach $0$, we may assume that both $|x|$ and $|y|$ are less than $1. $ Thus, we have


$$
\left|\frac{5x^3y^3}{x^2+y^2}\right|<\min\left\{\right\}\leq 5\min\{|x|,|y|\}
$$


The first inequality is because $x$ and $y$ are symmetric. The second inequality is because we can write $\left|\frac{x^3}{x^2+y^2}\right|$  as $\left|\frac{x^2}{x^2+y^2}\right|\left|x\right|$. Thus, for any $\varepsilon>0$, we may choice $\delta=\varepsilon$ such that whenever $\min\{|x|,|y|\}<\delta$, we have 


$$
\left|\frac{5x^3y^3}{x^2+y^2}\right|<\varepsilon.
$$


<u>Method 2.</u>


Let $(x,y)=(r\cos(\theta), r\sin(\theta))$. Then, we have 


$$
\left|\frac{5x^3y^3}{x^2+y^2}\right|\leq \frac{5r^3\sin^{3}(\theta)\cos^{3}(\theta)}{r^2} = \frac{5}{8}r\sin^3(2\theta)<r^3.
$$


It implies the limit is $0$.


---


# Partial Derivative


## Definition


We define the partial derivative of a function $f$ to a variable $x$ as


$$
f_x(a,b)=\lim_{h\to 0}\frac{f(a+h,b)-f(a,b)}{h}
$$


and similarly


$$
f_y(a,b)=\lim_{h\to 0}\frac{f(a,b+h)-f(a,b)}{h}
$$


The definition of $f_x$ is equivalent to the following two steps:

- STEP 1: evaluate the function $f(x,b)$
- STEP 2: differentiate $f (x,b)$ with respect to $x$

The above interpretation will be very useful for us to evaluate higher-order derivatives, e.g. $f_{xy}$.


## Notations


We use the following notations to denote a partial derivative:


$$
f_x = f_1 = \frac{\partial f}{\partial x} = D_xf = D_1f
$$


and similarly


$$
f_y = f_2 = \frac{\partial f}{\partial y} = D_{y}f =D_2f
$$


The indices $1$ and $2$ indicate that $x$ is always the first variable and $y$ is the second when we choose variables for a function. We read the symbol $\partial$ as “partial”, and we call $D$ the differential operator.


## Clairaut's Theorem


**Theorem**


Suppose $f$ is defined on a disk $D$ that contains the point $(a,b)$. If the function $f_{xy}$ and $f_{yx}$ are continuous on $D$ then 


$$
f_{xy}(a,b)=f_{yx}(a,b)
$$


This theorem proposes the subsequent two observations:

- If $f$ is solely a composition and combination (sum, product, and division) of basic functions, then $f_{xy}=f_{yx}$, i.e. partial differential is symmetric.
- To locate an example where $f_{xy}(a,b)\neq f_{yx}(a,b)$, we must view $f$ as a conditional function, and $(a,b)$ lies on the condition's boundary

**Example.** Consider


$$
f(x,y) = \begin{cases}
\frac{xy(x^2-y^2)}{x^2+y^2},\
&(x,y)\in\mathbb{R}^2\setminus\{(0,0)\}\\
0, &(x,y)=(0,0)\end{cases}.
$$


Its partial derivatives are


$$
f_x(x,y) = \begin{cases}
\frac{x^4y+4x^2y^3-y^5}{(x^2+y^2)^2},\ &(x,y)\in\mathbb{R}^2\setminus\{(0,0)\}\\
0,&(x,y)=(0,0)
\end{cases},
$$


$$
f_x(x,y) = \begin{cases}
\frac{x^5-4x^3y^2-xy^4}{(x^2+y^2)^2},\ &(x,y)\in\mathbb{R}^2\setminus\{(0,0)\}\\
0,&(x,y)=(0,0)
\end{cases},
$$


and


$$
f_{xy}(x,y) = f_{yx}(x,y) = \frac{x^6+9x^4y^2-9x^2y^4-y^6}{(x^2+y^2)^3}\qquad\text{for}\ (x,y)\neq(0,0).
$$


Note that


$$
\lim_{(t,0)\to(0,0)}f_{xy}(x,y)=1\qquad\text{and}\qquad\lim_{(0,t)\to(0,0)}f_{xy}(x,y)=-1,
$$


so $f_{xy}$ (and hence $f_{yx}$) is not continuous at $(0,0)$. In fact, we have $f_{xy}(0,0) = -1$ and$f_{yx}(0,0)=1$.


# Tangent Plane


Consider the graph $z=f(x,y)$. If it exists, the tangent plane of $f$ at $(a,b)$ has a normal vector of $(f_{x}(a,b), f_{y}(a,b), -1)$ and passes through the point $(a,b,f(a,b))$. We will establish the conditions for its existence next week. The equation for this tangent plane is:


$$
f_x(a,b)(x-a)+f_y(a,b)(y-b)-(z-f(a,b))=0
$$


Just like we did for one-variable functions, we can use the tangent plane to approximate a function.

