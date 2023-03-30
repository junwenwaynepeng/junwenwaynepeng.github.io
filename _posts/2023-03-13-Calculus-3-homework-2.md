---
title: Calculus 3 homework 2
subtitle: Tangent spaces and Partial Derivative
tags: ["Calculus 3", "homework"]
---

1. To find tangent plain of the surface $z=f(x,y)$ at $(a,b)$, we can either consider using linear approximation or consider that the surface is a level surface of the function $w=F(x,y,z)$, where $F(x,y,z)=z-f(x,y)$, for $w=0$, and then we use the fact that a gradient is perpendicular to the level surface.
	* Use linear approximation to find the tangent space of $z=\frac{xy^2}{x^2+y^2}$ at $(1,1)$.
	* Use level surface to find the the tangent space again

2. Suppose
	$$
	f(x,y)=
	\begin{cases}
	\frac{xy(x^2-y^2)}{x^2+y^2}\ & if (x,y)\neq (0,0) \\\\
	 0,\ & if (x,y)=(0,0)
	 \end{cases}.
	 $$
	* Find $\frac{\partial^2 f}{\partial x\partial y}$.
	* Find $\frac{\partial^2 f}{\partial y\partial x}$.
	* Show that $\frac{\partial^2 f}{\partial x\partial y}(0,0)\neq \frac{\partial^2 f}{\partial y\partial x}(0,0).$
	(Hint: Assume that $f(0,0)$ exists (which is actually equal to $0$). First, find $\partial f/\partial x$ and $\partial f/\partial y$. Then, to find $\partial^2 f/\partial y\partial x$, plug in $0$ for $x$ (since we will fix $x$ and calculate the derivative with respect to $y$), apply $\partial/\partial y$, and finally plug in $y=0$. Following this method, we can find $\partial^2 f/\partial y\partial x(0,0)$. To find $\partial^2 f/\partial x\partial y$, switch the order of differentiation and plug in $0$.)

3. Find the Taylor expansion of $\sin(x)\ln(1-y)$ at $(0,0)$ upto order 3.

# Solutions

<details>
<summary> Expand </summary>

1. We Let $f(x,y)=\frac{xy}{x^2+y^2}$, and we calculate
$$f_x=\frac{\partial f}{\partial x} = \frac{y^2(x^2+y^2)-2x^2y^2}{(x^2+y^2)^2} \text{ and }f_y=\frac{\partial f}{\partial y} = \frac{2xy(x^2+y^2)-2xy^3}{(x^2+y^2)^2}.$$
	* By formula, it is $z-f(1,1) = f_x(1,1)(x-1)+f_y(1,1)(y-1)$ which is
	$$z- \frac{1}{2} = \frac{1}{2}(y-1)$$
	* The tangent plain is also a tangent plain of the level surface $z-f(x,y)=0$. We compute the gradient of $F(x,y,z)=z-f(x,y)$ at $(1,1,f(1,1))$. They are
	$$\frac{\partial F}{\partial x} = f_x\text{, }\frac{\partial F}{\partial y} = f_y\text{ and }\frac{\partial F}{\partial z} = 1.$$
	Thus, by formula, the tangent plain is $F_x(1,1,1/2)(x-1) + F_y(1,1,1/2)(y-1) + F_z(1,1,1/2)(z-\frac{1}{2})=0$. 
2. 
	* $\frac{\partial^2 f}{\partial x\partial y} = \frac{x^6+9x^4y^2-9x^2y^4-y^6}{(x^2+y^2)^3}$.	
	* $\frac{\partial^2 f}{\partial x\partial y} = \frac{x^6+9x^4y^2-9x^2y^4-y^6}{(x^2+y^2)^3}$.
	* We interpreter $\frac{\partial^2 f}{\partial x\partial y}(0,0)$ as the derivative of $\frac{\partial f}{\partial y}(x,y)$ along the $x$-axis. Thus, we can set $y=0$ in $\frac{\partial f}{\partial x}(x,y)$ and get
	$$\frac{\partial}{\partial x}\frac{\partial f}{\partial y}(x,0)=1.$$
	Similarly, we interpreter $\frac{\partial^2 f}{\partial y\partial x}(0,0)$ as the derivative of $\frac{\partial f}{\partial x}$ along the $y$-axis. Thus, we can set $x=0$ in $\frac{\partial f}{\partial y}(x, y)$ and get
	$$\frac{\partial}{\partial y}\frac{\partial f}{\partial x}(x,0)=-1.$$
	This shows that $\frac{\partial^2 f}{\partial x\partial y}(0,0)\neq\frac{\partial^2 f}{\partial y\partial x}(0,0)$.
	* (Extra) It actually requires to show that the $f(x,y)$ at $(0,0)$ is continuous and differentiable. To show, it is continuous, we have to show that $f(x,y)\to 0$ as $(x,y)\to 0$. To achieve this, for any $t$, we let $y=tx$, so as $x\to 0$, $(x,y)$ converges to $(0,0)$ along $y=tx$. We examine 
	$$\lim_{x\to 0}f(x,tx) = \lim_{x\to 0}\frac{t(1-t^2)x^4}{(1+t^2)x^2} = 0.$$
	This shows that $f$ is continuous at $(0,0)$. We can use similar idea to show that $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ exist.

3. We know
$$\sin(x) = x-\frac{1}{3!}x^3+\cdots\text{ and }\ln(1-y) = y+\frac{1}{2}y^2+\frac{1}{3}y^3+\cdots.$$
Therefore, $\sin(x)\ln(1-y) = (x-\frac{1}{3!}x^3+\cdots)(y+\frac{1}{2}y^2+\frac{1}{3}y^3+\cdots)$. The order 3 expansion is $xy+\frac{1}{2}xy^2$.

</details>