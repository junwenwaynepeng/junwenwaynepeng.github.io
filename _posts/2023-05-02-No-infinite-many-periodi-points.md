---
title: "Periodic Points and Dynatomic Fileds: A Study of Lehmer's Conjecture"
subtitle: The Existence of Finite Periodic Points Despite Infinite Sequences with Converging Heights to 0
tags: Research, Academic, Number Fields, Dynamical Systems, Periodic Points, Canonical Height, Lehmer's Conjecture
---

In 1998, Francesco Amoroso and Roberto Dvornicich proved Lehmer's conjecture to be true for abelian extensions. This implies that there exists an absolute gap between the Weil height of non-torsion points and torsion points in any abelian extension.

Later, in 2001, Bombieri and Zannier demonstrated the truth of the Northcott theorem for any subfield of $K^{(d)}$, where $K^{(d)}$ denotes the composition of all degree-$d$ field extensions of $K$. Clayton Petsche and Emerald Stacy later provided different approaches to this result.

The overall aim of this problem is to understand the relationship between field extensions, height, and the number of torsion points. For any finite extension $K$ over a number field, the Northcott theorem allows us to deduce that the height $h(K)$ is not dense in $K$, so we should aim of infinite extension over a number field such like the field studied by Amoroso-Dvornicich or Bombieri-Zannier. We are especially interested in the distribution of torsion points which are exactly height-$0$ points in $K$. Amoroso and Dvornicich showed that even though there are infinitely many torsion points, 0 is still an isolated point in $h(K)$. Bombieri and Zannier extended this result to a more general setting by demonstrating that $0$ is always an isolated point, no matter how small the gap is. Furthermore, we won't obtain infinitely many torsion points by adding infinitely many non-torsion points.

What happens if $0$ is no longer an isolated point in $h(K)$? Let us consider an oversimplified example.

###### Example 1

Consider $\mathbb{Q}(\sqrt[\infty]{2})$, where $\sqrt[\infty]{2}$ is an abbreviation for the sequence ${\sqrt{2},\ \sqrt[3]{2},\ \sqrt[4]{2},\ \cdots }\subset \mathbb{R}$. Here, the only height $0$ elements in $\mathbb{Q}(\sqrt[\infty]{2})$ are $1$ and $-1$. Combining this observation with the fact that $\mathbb{Q}(\sqrt{\infty}{2})$ is totally real, every convergent sequence $(\alpha_n)$ with $(h(\alpha_n))$ converging to $0$ converges to either $1$ or $-1$.

However, $\mathbb{Q}(sqrt[\infty]{2})$ is not a Galois field. If we consider the field extension obtained by adding all conjugations of $\sqrt{\infty}{2}$, then we naturally get all torsion points of $\bar{\mathbb{Q}}$. In this case, a convergent sequence with height converging to $0$ might converge to some transcendental elements.

Now, let us introduce dynamical structure into this question and see if we can gain any additional insights.

###### Example 2

Consider the polynomial $f(x)=x^n$. Let $\mathbb{Q}(2^{n^{-\infty}})$ be an infinite field extension obtained by adjoining the inverse dynamical system $\{2,\ 2^{-n},\ 2^{-n^2},\ \ldots\}$. We can reach the same conclusion as above.

If we adjoin all conjugates of $2^{-n^k}$, the resulting field is called the dynamical field of $f$ at $2$ over $\mathbb{Q}$, denoted by $\mathbb{Q}(f^{-\infty}(2))$. We can make the following observations:

- The roots of unity in $\mathbb{Q}(f^{-\infty}(2))$ are $\zeta_{n^k}$ for $k=1,2,3,\ldots$. These points are not only torsion points in the field but also preperiodic points of $f$, as $f^k(\zeta_{n^k})=1$.
- Except for $\pm 1$, there are no other periodic points of $f$ in the field $\mathbb{Q}(f^{-\infty}(2))$.
- Since $f^{-n}(2)$ converges to the unit circle, a convergent sequence with height converging to $0$ not only converges to some transcendental elements but also to periodic points of $f$.

Moreover, we notice that the sequence ${2,\ 2^{-n},\ 2^{-n^2},\ \ldots}$ is a branch on the dynamical tree $\mathbb{T}_f(2)$ that is fixed by some subgroup of the dynamical group $G_f(2)$.

We can summarize our observations with the following questions. Let $f$ be a polynomial and $\alpha\in\mathbb{Q}$. If $f^n(\alpha_n)=\alpha$, then the canonical height $h_f(\alpha_n)=\frac{1}{d^n}(\alpha)$, where $d$ is the degree of $f$. Thus, $0$ is dense in $h_f(\mathbb{Q}(f^{-\infty}(\alpha)))$, which is the field we want to study. Based on the example we considered, we may ask:
- Are there infinitely many periodic points of $f$ in $\mathbb{Q}(f^{-\infty}(\alpha))$? If not, can we conclude that $\mathbb{Q}(\text{Per}(f))\cap \mathbb{Q}(f^{-\infty}(\alpha))$ has finite degree over $\mathbb{Q}$?
- Are there infinitely many preperiodic points of $f$ in $\mathbb{Q}(f^{-\infty}(\alpha))$? Similarly, can we determine the degree of the field intersection $\mathbb{Q}(\text{PrePer}(f))\cap \mathbb{Q}(f^{-\infty}(\alpha))$?
- Can we construct an inverse dynamical sequence that converges to any periodic point of $f$?

## Some observations

We have made some observations about inverse dynamical sequences:

###### Proposition 1.

Let ${a_n}$ be a coherent backward orbit, meaning $f(a_n) = a_{n-1}$ for all $n > 1$. If ${a_n}$ is convergent, it converges to a fixed point of $f$. In particular, if ${a_n}$ converges to a periodic point of $f$ with exact period greater than $1$, then ${a_n}$ cannot be an eventually coherent backward orbit.

**proof.** Since $f$ is continuous everywhere except possibly at poles, we have $f(\lim_n a_n) = \lim_n f(a_n) = \lim_n a_{n-1} = \lim_n a_n$. An eventually coherent backward orbit means that there exists some integer $m$ such that ${a_n}_{n\geq m}$ is a coherent backward orbit, so the last statement follows naturally.

###### Proposition 2.

If ${a_n}$ is not eventually stable, then it cannot be a preperiodic sequence under $f$, i.e., there is no $m$ and $k$ such that ${f^m(a_n)}={f^{m+ik}(a_n)}$ for all $i\geq 0$.

**proof.** If ${a_n}$ is a preperiodic sequence under $f$ with period $k$, then we have ${a_{m+ik}}$ is an eventually coherent backward orbit of $f^k$ for $m=0,1,\ldots, k-1$. Note that ${a_{m+ik}}$ is a subsequence of a coherent backward orbit of $f$, so $\lim_i a_{m+ik}$ either diverges or converges to a fixed point of $f$.

###### Proposition 3.

There are infinitely many backward sequences converge to a periodic point of $f$.

## There are no new periodic points in some dynamical fields

