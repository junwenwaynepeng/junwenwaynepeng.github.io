---
title: The Fundamental Theorem of Calculus
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"

---
![The Fundamental Theorem of Calculus](../assets/img/posts/venn-diagram-FTC.png)

- A function that is continuous everywhere except at a finite number of points with jump discontinuities is integrable but lacks any antiderivatives altogether.
- Volterra's function (the derivative of the function we created in class) has an antiderivative but is not integrable.
- If a function is continuous (and hence integrable), then both antiderivatives and integrals exist and are equivalent in some sense. This is implied by the Fundamental Theorem of Calculus.
- Some continuous functions have no *elementary antiderivatives*, e.g. $\int_a^x f(x)dx$.

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

Now, we let $h$ approach $0$, and so both $u$ and $v$ approach $x$. Hence, we conclude that $\displaystyle\lim_{h\to 0^+}\frac{F(x+h)-F(x)}{h} = f'(x)$. A similar argument will be carried out for the left limit. Therefore, we can conclude that $F'=f$.

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
$$