---
id: 5c8cde62-c7d5-4afb-873e-e6da6964e7a1
layout: post
date: 2024-04-03
title: Note for an unfinished computation in today’s course
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

We're considering a change of variables where $x=u^2-v^2$ and $y=2uv$. We aim to express the solid $E=\\{(x,y)|0\leq y\leq 2,\frac{y^2+4}{4}\leq x\leq -\frac{y^2+4}{4}\\}$ in terms of $u$ and $v$. Let's examine the following graph to better understand what we're trying to achieve. We are seeking the area on the left-hand side marked by ??? which will transform into the area enclosed by the blue curves on the right-hand side. 


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/e279f658-a426-4ab0-a158-f71e7abd3b45/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240403T191624Z&X-Amz-Expires=3600&X-Amz-Signature=4f01c371e0985d4db8abedccd248379ec8a418ad7dac000aa1485e9053497fd9&X-Amz-SignedHeaders=host&x-id=GetObject)


If we can find the inverse function of $(u^2-v^2,2uv)$, and express $u$ and $v$ in terms of $x$ and $y$, we can directly map the area on the right to the area of interest. 


We will solve for $u$ and $v$ using the equations $x=u^2-v^2$ and $y=2uv$. We observe $x^2+y^2=(u^2+v^2)^2$. From this, we can deduce that $u^2=\frac{\sqrt{x^2+y^2}+x}{2}$ and $v^2 = \frac{\sqrt{x^2+y^2}-x}{2}$.


Then, the boundary (blue curves) must map to the boundary of ??? (why). Therefore, we only need to examine the results of $y=0$, $y^2=x+4$, and $y^2=-x+4$. 

- $\bold{y=0}$: we have $u^2=\frac{|x|+x}{2}$ and $v=\frac{|x|-x}{2}$. If $x>0$, then we have $u^2=x$ and $v=0$. If $x<0$, we have $u^2=0$ and $v^2=-x=|x|$.
- $\bold{y^2=4x+4}$: we have $u^2=\frac{|x+2|+x}{2}$ and $v^2=\frac{|x+2|-x}{2}$, and note that $-1\leq x\leq 0$ implies that $u^2=x+1$ and $v^2=1$.
- $\bold{y^2=-4x+4}$: we have $u^2=\frac{|x-2|+x}{2}$ and $v^2=\frac{|x-2|-x}{2}$, and note that $0\leq x\leq 1$ implies that $u^2=1$ and $v^2=1-x$

The three items mentioned above can be simplified and represented in the following graph.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/96c29bd7-9676-48f5-97d4-85f96574bdc5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240403T191625Z&X-Amz-Expires=3600&X-Amz-Signature=e85294a6540d315beeca2986753146abbc8c252c665e7d544e543771e3e8f199&X-Amz-SignedHeaders=host&x-id=GetObject)


The “田” shapes are possible lines that maps to the blue curves in the first picture via the map $(u^2-v^2,2uv)$. Moreover, we know that $2uv>0$, so the only possibilities are the green square and purple square in the following figure.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/f3729b31-bf77-46d4-bbc6-78af90557bc4/de346120-2c2a-4451-b2fb-81b78990be77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240403T191624Z&X-Amz-Expires=3600&X-Amz-Signature=788acc0add80abc3a282b16c76e19f8cf19c72d04eee127be8dd563d2d24742b&X-Amz-SignedHeaders=host&x-id=GetObject)


Regarding the integration of $\iint_RydA$ by changing the variables, which squre should we use? The answer is “it doesn't matter.” You can check this yourself.

