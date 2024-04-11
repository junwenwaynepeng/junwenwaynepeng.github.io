---
id: c224e7e4-35ee-462f-a1bd-ba40c0bc8318
layout: post
date: 2024-04-10
title: Transformation & Change of Variables
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

![](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-10-01.png)


$$
\iint_{R'}f(x(u,v),y(u,v))\left|\frac{\partial(x,y)}{\partial(u,v)}\right|dudv =\iint_{R}f(x,y)dxdy 
$$


# Examples


**Example 1. (**$R'$ **and** $\Phi$ **are given)** Give $B=[0,1]\times[0,1]$ and $\Phi(u,v)=(u^2-v^2,2uv)$. Evaluate $\iint_{\Phi(B)}f(x,y)dxdy$. 


> 💡 Strategy: Use formula directly


**sol)** $\iint_{\Phi(B)}f(x,y)dxdy=\int_0^1\int_0^1f(u^2-v^2,2uv)(4u^2+4v^2)dudv.$


**Example 2. (**$\Phi$ **and** $R$ **are given)** Given $x=4s+t$ and $y=s-2t$, try to compute the integral $\int_Rx+ydA$, where $R$ is the parallelogram with vertices $(x,y)=(0,0)$, $(4,1)$, $(7,-5)$, and $(3,-6)$.


> 💡 Strategy: Frist, find the inverse function of $\Phi$, the $\Psi$. Then, use $R$ and $\Psi$ to find $R'$.


**sol)** To find $\Psi$, we have to solve the system of equations


$$
\begin{cases}
x=4s+t\\\\
y=s-2t
\end{cases}
$$


for $s$ and $t$. Hence, we have $s=\frac{2x+y}{9}$ and $t=\frac{x-4y}{9}$. 


Next, we use the inverse function $\Psi$ to map the points of $R$ to $R'$. The mapped region $R'$ is the rectangle with vertices $(s,t)=\Psi(0,0)=(0,0)$, $\Psi(4,1)=(1,0)$, $\Psi(7,-5)=(1,3)$, and $\Psi(3,-6)=(0,3)$. Therefore, the integral is


$$
\iint_Rx+ydA=\int_0^1\int_{0}^{3}(5s-t)\left|\det\left(\begin{matrix}4 & 1\\\\1 &-2\end{matrix}\right)\right|dvdu.
$$


**Example 3. (Only give** $R$**)** Evaluate $\displaystyle\int_{1/4}^{1}\int_{1/x^2}^{4/x}\ln(x^2y)dydx + \int_{1}^4\int_{1/x}^{4/x^2}\ln(x^2y)dydx.$


> 💡 Strategy: Draw the region $R$, and we will find that $R$ is inclosed by the curve $u(x,y)=c_1$, $u(x,y)=c_2$, $v(x,y)=c_1'$, and $v(x,y)=c_2'$. Then, we will define $\Psi(x,y)=(u(x,y),v(x,y))$ and $R'=[c_1, c_2]\times[c_1',c_2']$. Finally, we will find $\Phi$ and use formula to evaluate the integral.Draw the range $R_1=\\{(x,y)|\frac{1}{4}\leq x\leq 1, \frac{1}{x}\leq y\leq\frac{4}{x^2} \\}$ and $R_2=\\{(x,y)|1\leq x\leq 4, \frac{1}{x^2}\leq y\leq \frac{4}{x}\\}$ toegther. We note that $R_1\cup R_2$ are enclosed by $xy=1$, $xy=4$, $x^2y=1$, and $x^2y=4$. Hence, we define $\Psi(x,y)=(xy, x^2y)$ and $R' = [1,4]\times[1,4]$. To find $\Phi$, we have to solve the following system of equations


![](https://junwenwaynepeng.github.io/assets/img/posts/2024-04-10-02.png)


$$
\begin{cases}
u=xy\\\\
v=xy^2
\end{cases}
$$


for $x$ and $y$. That is $x=\frac{u^2}{v}$ and $y=\frac{v}{u}$. Therefore, the integral is


$$
\int_1^4\int_1^4\ln(v)Jdu dv
$$


where the jacobian


$$
J=\left|\det\left(\begin{matrix}\frac{2u}{v} & -\frac{u^2}{v^2}\\\\-\frac{v}{u^2} & \frac{1}{u}\end{matrix}\right)\right|=\frac{1}{v}.
$$


Thus, we can use $u$-sub to solve the integral.

