# Calculus 3 Worksheet 1

## Questions

1. Find partial derivative $\partial f/\partial x$ and $\partial f/\partial y$ of the following function

	* $f(x,y) = \ln(xy)\tan(xy)$.
	* $f(x,y) = u^2-v^2$, $u=\sec(x)$, and $v=\tan(y)$.

2. Let $F(x,y)$ be a differtiable function. Let $F_x(x,y)=G(x,y)$ and $F_y(x,y)=H(x,y)$.

	* Find $u$ and $v$ such that $F(u,v) = F(x^3+1,2x)=f(x)$.
	* Use chain rule to find $f'(x)$, and express the answer in terms of $G$ and $H$.
	* Use the same reasoning to find the derivative of $f(x)=F(x,x)$, and express the derivative in terms of $G$ and $H$.

3. The gradient $\nabla F(a,b)$ of a function $F(x,y)$ at $(a,b)$ is a vector defined by $(F_x(a,b), F_y(a,b))$. The gradient of a function can utilize to find the directional derivative $F_{(u,v)}$ of $F$ along a vector $(u,v)$. It is 
 \[F_{(u,v)}(a,b)=\nabla F(a,b)\cdot \dfrac{(u,v)}{|(u,v)|}\]
where $\|(u,v)\|=\sqrt{u^2+v^2}$ is the length of the vector $(u,v)$. Use the above introduction to calculate

	* The gradient of $F(x,y)=x^2+y^2$ at $(1,1)$ and $(0,0)$.
	* Observe that how the length of the gradient changes with respect to the point.
	* Find the directional derivative of $F$ at $(1,1)$ along the vector (3,4).
	* Confirm that the largest directional derivative of $F$ at $(1,1)$ is along the vector $(1,1)$. 

## Answers

1. 
	* $f_x=\dfrac{1}{x}\tan(xy) + \ln(xy)\sec^2(xy)y$, $f_y=\dfrac{1}{y}\tan(xy) + \ln(xy)\sec^2(xy)x$.
	* $\dfrac{\partial f}{\partial x} = \dfrac{\partial f}{\partial u}\dfrac{\partial u}{\partial x} + \dfrac{\partial f}{\partial v}\dfrac{\partial v}{\partial x}\\ = 2(\sec(x))\sec(x)\tan(x) - 2(\tan(x))\cdot 0 = 2\sec^2(x)\tan(x).$ Similarly, $\dfrac{\partial f}{\partial y} = -2\tan(y)\sec^2(y)$.

2.
	* $u=x^3+1$ and $v=2x$.
	* $f'(x) = \dfrac{\partial F}{\partial u}\dfrac{\partial u}{\partial x} + \dfrac{\partial F}{\partial v}\dfrac{\partial v}{\partial x} = G(x^3+1,2x)\cdot 3x^2 + H(x^3+1,2x)\cdot 2$.
	* We set $u=x$ and $v=x$, so $f'(x) = G(x,x) + H(x,x)$.

3. The partial derivatives of $F$ are $\partial F/\partial x = 2x$ and $\partial F/\partial y=2y$.
	* $\nabla F(1,1) = (2,2)$.
	
	* $\nabla F(3,4)\dfrac{3}{|3|}$.
	* The largest directional derivative of $F$ at $(1,1)$ is attained along any vector that points to the same direction as the gradient $(2,2)$, including $(1,1)$.
	* The length of the gradient at any point $(a,b)$ is $|\nabla F(a,b)| = 2\sqrt{a^2+b^2} = 2|(a,b)-(0,0)|$. We observe that the length of the gradient is twice the distance between the point and the origin.
	