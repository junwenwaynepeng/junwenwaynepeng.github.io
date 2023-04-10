---
title: Calculus 3 Practice Exam
subtitle: 
tags: Calculus 3, Practice
sagecell: true
head-package:
	-
		file: "package/sagecell.html"
---

1. Let $f(x,y)=\sqrt{1+x+2y}$.
	1. Find Gradient of $f$, and explain what the meaning of gradient.
	2. Find vectors $\vec{v}$ such that the directional derivative of $f$ along the vector $\vec{v}$ at $(2,3)$ is $0$.
	3. Find an equation of the tangent plain to the graph $z=f(x,y)$ when $x=2$ and $y=3$.
	3. Use the linearization of $f$ at $(2,3)$ to estimate the value of $f(2.01,2.99)$.

2. Let $f(x,y)=x^2y-xy^2$. Suppose both $x$ and $y$ are functions of $t$. Say $x(t)=ln(t)$ and $y(t)=\tan(t)$. Find $\frac{\partial F}{\partial t}$.


3. Suppose the function $f(x,y)=ax^2+bxy+cy^2+3x$ has a saddle point when $x = -\frac{6}{5} and y = -\frac{3}/{5}$. 
	1. Find $a$, $b$, and $c$.
	2. Find the local maximal and local minimal on the region $x^2+y^2\leq 9$.  

4. Evaluate $\int_0^4\int_{\frac{\sqrt{y}}{2}}^1\sqrt{x^3+3}dxdy$.

5. Calculate the area of the region inside a half cardioid
$$r=1-\sin(\theta)$$ 	
    <div class="compute"><script>
    polar_plot(1-sin(x), (x,-pi,pi), color='blue')
    </script></div>

6. Evaluate $\int\int_\Omega (x^2-y^2)dxdy$ where $\Omega$ is enclosed by $y-x=1$, $y-x=0$, $xy=2$ and $xy=1$. 