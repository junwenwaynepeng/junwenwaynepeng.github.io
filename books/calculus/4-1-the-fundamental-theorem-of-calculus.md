---
layout: page
title: the fundamental theorem of calculus
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 4-definite-and-indefinite-integral
nex_page: 5-tech-of-integration
---
**Theorem(the Fundamental Theorem of Calculus, Part 1)** Let $f$ be a continuous real-valued function defined on a closed interval $[a,b]$. Let $F$ be the function defined by
$$F(x)=\int_{a}^x f(t)dt$$
Then, $F'=f$ on $(a,b)$.

**proof.** We will prove that the derivative of $F$ equals $f$ by calculating

$$
\lim_{h\to 0^+}\frac{F(x+h)-F(x)}{h}\text{ and }\lim_{h\to 0^-}\frac{F(x+h)-F(x)}{h}.
$$

For the right limit, we notice that

$$
F(x+h)-F(x) =\int_{a}^{x+h} f(t)dt - \int_a^{x}f(t)dt = \int_{x}^{x+h}f(t)dt.
$$

Since $f$ is a continuous function on $[x,x+h]$, there exist $u,v\in[x,x+h]$ such that $f(u)\leq f(t)\leq f(v)$ for all $t\in[x,x+h]$. By the definition of definite integrals, we have

$$
f(u)(x+h-x)\leq \int_x^{x+h} f(t)dt\leq f(v)(x+h-x),
$$

which implies

$$
f(u)\leq \frac{F(x+h)-F(x)}{h}\leq f(v).
$$

Now, we let $h$ approach $0$, and so both $u$ and $v$ approach $x$. Hence, we conclude that $\displaystyle\lim_{h\to 0^+}\frac{F(x+h)-F(x)}{h} = f(x)$. A similar argument will be carried out for the left limit. Therefore, we can conclude that $F'=f$.

**Theorem(the Fundamental Theorem of Calculus, Part 2)** Let $f$ be a real-valued function on a closed interval $[a,b]$ and $F$ a continuous function on $[a,b]$ which is an antiderivative of $f$ in $(a,b)$:
$$F'=f.$$
If $f$ is Riemann integrable on $[a,b]$, then
$$\int_a^bf(t)dt = F(b)-F(a)$$

**proof(if we assume f is continuous)** If $f$ is continuous, then by part 1 of the fundamental theorem of Calculus we know $G(x)=\int_0^xf(t)dt$ is another antiderivative of $f$. Thus, by a corollary of mean value theorem, $F-G$ is a constant, i.e. $F=G+c$ for some constant $c$. Note that $G(a)=0$ and $G(b)=\int_a^bf(t)dt$, so
$$F(b)-F(a) = G(b)-G(a) = G(b)=\int_a^bf(t)dt$$

**proof** Since $F$ is continuous on $[a,b]$, we can apply the mean value theorem to $F$ on any subinterval in $[a,b]$, i.e.
$$F'(c^\*)(x_2-x_1) = F(x_2)-F(x_1)$$
for $[x_1,x_2]\subseteq [a,b]$ and for some $c^\*\in (x_1,x_2)$. Given a partition $a\leq x_0\<x_1\<x_2\<\cdots\<x_n=b$, we can rewrite $F(b)-F(a)$ as
$$
\begin{align*}
F(b)-F(a) &= F(x_n)-[-F(x_{n-1})+F(x_{n-1})]+\cdots [-F(x_1)+F(x_1)]-F(x_0)\\\\
&= [F(x_n)-F(x_{n-1})]+[F(x_{n-1})-F(x_{n-2})]+\cdots [F(x_1)-F(x_0)]
\end{align*}
$$
Applying the mean value theorem to each subinterval $[x_{i},x_{i+1}]$, we further rewrite
$$
F(b)-F(a) = \sum_{i=0}^{n-1}F(x_{i+1})-F(x_{i}) = \sum_{i=0}^{n-1}F'(c_i^\*)(x_{i+1}-x_i)
$$
for some $c_i^\*\in(x_{i},x_{i+1})$. The sum is a Riemann sum of $f$. Since we assume $f$ is integrable, as $\displaystyle\max_{i=0}^{n-1}\\{x_{i+1}-x_i\\}\to 0$, the Riemann sum will approach $\int_{a}^bf(t)dt$. Therefore, we can conclude that $\int_{a}^bf(t)dt=F(b)-F(a)$. 

**考型** Give you a function in terms of definite integral, and ask you to derive the function.

**Example 1.** Calculuate $\displaystyle \frac{d}{dx}\int_{g(x)}^{f(x)}h(t)dt$.

**Sol)** 

**STEP 1.** Suppose $H(t)=\int h(t)dt$.

**STEP 2.** $\displaystyle\int_{g(x)}^{f(x)}h(t)dt = H(f(x))-H(g(x))$

**STEP 3.** $\displaystyle \frac{d}{dx}\int_{g(x)}^{f(x)}h(t)dt = (H(f(x))-H(g(x))) = H'(f(x))f'(x)-H'(g(x))g'(x)= h(f(x))f'(x)-h(g(x))g'(x).$