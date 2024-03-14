---
id: fac7440b-248a-4dcc-9f04-c795e56435da
layout: post
date: 2024-03-13
title: Make Sense of the Second Derivative Test and Introduce the Lagrange Multiplier 
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [overview,calculus,calculus 3]
categories: [post]

---

# Why is the determinant?


In the previous lecture, we introduced the second derivative test, which relies on the determinant


$$
D=D(a,b)=\det\begin{bmatrix}
f_{xx}(a,b) & f_{xy}(a,b)\\\\
f_{yx}(a,b) & f_{yy}(a,b)
\end{bmatrix}.
$$


The determinant's meaning can be understood by using degree two Taylor polynomials of a function. Suppose $f$ is smooth in an open neighborhood encompassing $(a,b)$. In that case, the behavior of $f$ is very similar to a degree two Taylor polynomial, defined as follows:


$$
f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)+\frac{1}{2}(f_{xx}(a,b)(x-a)^2+2f_{xy}(a,b)(x-a)(y-b)+f_{yy}(a,b)(y-b)^2)
$$


We consider $(a,b)$ to be a critical point of $f$. Through a linear transformation, we can assume $(a,b)=(0,0)$. Hence, the graph $z=f(x,y)$ is similar to


$$
z=f(0,0)+\frac{1}{2}(f_{xx}(0,0)x^2+2f_{xy}(0,0)xy+f_{yy}(0,0)y^2).
$$


To simplify the notation, we omit $(0,0)$ in the following discussion. The above equation can be normalized to a normal form. That is


$$
\begin{align*}
z & =f(0,0)+\frac{f_{xx}}{2}(x^2+2\frac{f_{xy}}{f_{xx}}xy+\frac{f_{yy}}{f_{xx}}y^2)\\\\
& = f(0,0)+\frac{f_{xx}}{2}\left((x+\frac{f_{xy}}{f_{xx}}y)^2-(\frac{f_{xy}}{f_{xx}^2}+\frac{f_{yy}}{f_{xx}})y^2\right)\\\\
& = f(0,0)+\frac{f_{xx}}{2}\left((x+\frac{f_{xy}}{f_{xx}}y)^2+(\frac{f_{xx}f_{yy}-f^2_{xy}}{f_{xx}^2})y^2\right)
\end{align*}
$$


If the constant $f_{xx}f_{yy}-f_{xy}^2$ is positive, then the graph represnets an elliptic paraboloid (a bullet shape). This helps us determine whether $(0,0)$ is a maximum or minimum. If the constant is negative, then the graph represents a hyperbolic paraboloid (like a saddle shape). Thus, $(0,0)$ is a saddle point.


# Lagrange Multiplier


## $f(x,y)$ subject to one constrain


Let me state the conclusion first. A _Lagrange multiplier_ is an unknown variable that aids in finding the extreme values of a function subject to a constraint equation.


Suppose we want to find a point $(a,b)$ where this point is an extreme value of $f$, subject to the equation $g(x,y)=c$. Upon observation, we note that the gradients of $f$ and $g$ should be parallel. We then introduce a nonzero unknown $\lambda$ such that


$$
\nabla f = \lambda \nabla g.
$$


This yields the following system of equations:


$$
\begin{cases}
f_x = \lambda g_x\\\\
f_y = \lambda g_y\\\\
g(x,y)=c
\end{cases}
$$


## $f(x,y,z)$ subjects to two constrain


Suppose we want to find a point, an extreme value of $f$, subject to the equation $g(x,y,z)=c$ and $h(x,y,z)=k$.


We will introduce two variable $\lambda$ and $\mu$ such that


$$
\nabla f=\lambda\nabla g + \mu\nabla h
$$


This yields the following system of equations:


$$
\begin{cases}
f_x = \lambda g_x + \mu h_x\\\\
f_y = \lambda g_y + \mu h_y\\\\
f_z = \lambda g_z + \mu h_z\\\\
g(x,y,z)=c\\\\
h(x,y,z)=k
\end{cases}
$$

