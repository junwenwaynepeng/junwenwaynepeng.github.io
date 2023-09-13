---
title: Calculus 3 homework 1
tags: ["calculus", "calculus 3", "homework"]
---
# Calculus 3 Homework 1

## Question

1. (page 202)習題 5.2.7.
<ul>
	梯形之下底、上底、高各為100，40，30。計算梯形面積的相對誤差。若測量這些量時之相對誤差控制在 1% 內，求面積相對誤差之最大可能。
</ul>

2. 找到 $z=\frac{xy}{y^2+x^2}$ 在 $(x,\ y)=(1,\ 1)$ 的切平面。

## Answer
1. 
	* (Method 1) The formula or the area $A(a,b,h)=(a+b)h/2$. By the question, we know
	$$\frac{\Delta a}{a}, \frac{\Delta b}{b}, and \frac{\Delta h}{h}< 1\\%.$$
	In particular, we know the error of $a+b$ is at most $2\\%$, i.e.
	$$\frac{\Delta a+\Delta b}{a+b}<2\\%$$
	We want to find a bound for $\frac{\Delta A}{A}$, and
	$$A+\Delta A = A(a+\Delta a, b+\Delta b, h+\Delta h) = (a+b+\Delta a+\Delta b)(h+\Delta h)/2.$$
	After ignoring all nonlinear term of $\Delta a$, $\Delta b$, and $\Delta h$, we arrive
	$$A+\Delta A = \frac{(a+b)h+(\Delta a+\Delta b)h + (a+b)\Delta h}{2},$$
	which implies
	$$\left|\frac{\Delta A}{A}\right| = \left |\frac{(\Delta a +\Delta b) h + (a+b)\Delta h}{(a+b)h}\right| = \left|\frac{\Delta a+\Delta b}{a+b}+\frac{\Delta h}{h}\right|\leq 2\\% + 1\\%$$

	* (Method 2) We can find the linear approximation $L(x,y,z)$ of $A(x,y,z)$ at $(a,b,h)$ which is
	$$L(a,b,h) = A(a,b,h)+\frac{h}{2}(x-a)+\frac{h}{2}(y-b)+\frac{(a+b)}{2}(z-h),$$
	so
	$$\Delta A = L(a+\Delta a,b+\Delta b,h+\Delta h)-A(a,b,h) = \frac{h\Delta a}{2}+\frac{h\Delta b}{2} +\frac{(a+b)\Delta h}{2}.$$
	Then, the following are the same as Method 1.

2. We need
	$$\frac{\partial z}{\partial x} = \frac{y^3-x^2y}{(x^2+y^2)^2}\ \text{and}\ \frac{\partial z}{\partial y} = \frac{x^3-xy^2}{(x^2+y^2)^2}.$$
Thus, $z = \frac{1}{2} + 0 \cdot (x-1) + 0\cdot (y-1)$ is the tangent plain. 