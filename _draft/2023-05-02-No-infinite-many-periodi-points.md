---
layout: post
title: "Periodic Points and Dynamical Fields: A Study of Lehmer's Conjecture"
subtitle: The Existence of Finite Periodic Points Despite Infinite Sequences with Converging Heights to 0
tags: Research, Academic, Number Fields, Dynamical Systems, Periodic Points, Canonical Height, Lehmer's Conjecture
---

In 1998, Francesco Amoroso and Roberto Dvornicich proved that there exists an absolute gap between the Weil height of non-torsion points and torsion points in any abelian extension. Later, in 2001, Bombieri and Zannier demonstrated the truth of the Northcott theorem for any subfield of $K^{(d)}$, where $K^{(d)}$ denotes the composition of all degree-$d$ field extensions of $K$. Clayton Petsche and Emerald Stacy later provided different approaches to this result.

The overall aim of this problem is to understand the relationship between field extensions, height, and the number of torsion points. For any finite extension $K$ over a number field, the Northcott theorem allows us to deduce that the height $h(K)$ is not dense in $K$, so we should aim of infinite extension over a number field such like the field studied by Amoroso-Dvornicich or Bombieri-Zannier. We are especially interested in torsion points which are exactly height-$0$ points in $K$. Amoroso and Dvornicich showed that even though there are infinitely many torsion points, 0 is still an isolated point in $h(K)$. Bombieri and Zannier extended this result to a more general setting by demonstrating that $0$ is always an isolated point, no matter how small the gap is. Furthermore, we won't obtain infinitely many torsion points by adding infinitely many non-torsion points.

What happens if $0$ is no longer an isolated point in $h(K)$? Let us consider an oversimplified example.

###### Example 1

Consider $\mathbb{Q}(\sqrt[\infty]{2})$, where $\sqrt[\infty]{2}$ is an abbreviation for the sequence ${\sqrt{2},\ \sqrt[3]{2},\ \sqrt[4]{2},\ \cdots }\subset \mathbb{R}$. Here, the only height $0$ elements in $\mathbb{Q}(\sqrt[\infty]{2})$ are $1$ and $-1$. Combining this observation with the fact that $\mathbb{Q}(\sqrt[\infty]{2})$ is totally real, every convergent sequence $(\alpha_n)$ with $(h(\alpha_n))$ converging to $0$ converges to either $1$ or $-1$.

However, $\mathbb{Q}(\sqrt[\infty]{2})$ is not a Galois field. If we consider the field extension obtained by adding all conjugations of $\sqrt{\infty}{2}$, then we naturally get all torsion points of $\bar{\mathbb{Q}}$. In this case, a convergent sequence with height converging to $0$ might converge to some transcendental elements.

Let us now incorporate the dynamical structure into this question to gain further insights. We will utilize the following notations:

- $f$ represents a rational function, and $f^n$ denotes the $n$-th iteration of $f$.
- $\alpha$ denotes a point defined over a field $K$.
- For a positive integer $n$, an $n$-th iteration preimage of $\alpha$ under $f$ is a solution to the equation $f^n(x)=\alpha$.
- The set of all $n$-th iteration preimages of $\alpha$ under $f$ is denoted by $f^{-n}(\alpha)$.
- A periodic point of $f$ satisfies the equation $f^n(x)-x=0$. A point is considered a preperiodic point of $f$ if some iteration of the point under $f$ becomes a periodic point. We denote
$$\text{Per}(f)=\{ \text{all periodic point of }f\}$$
and
$$\text{Per}(f,K)=\{ \text{all periodic point of }f\text{ in }K\}$$
- $K_f(\alpha)$, known as the dynamical field of $f$ at $\alpha$, is a field extension obtained by adjoining all iteration preimages of $\alpha$ under $f$.


###### Example 2

Consider the polynomial $f(x)=x^n$. Let $\mathbb{Q}_f(2)$ be an infinite field extension obtained by adjoining the inverse dynamical system $\{2,\ 2^{-n},\ 2^{-n^2},\ \ldots\}$. We can reach the same conclusion as above.

If we adjoin all conjugates of $2^{-n^k}$, the resulting field is the dynamical field $\mathbb{Q}_f(2)$. We can make the following observations:

- The roots of unity in $\mathbb{Q}_f(2)$ are $\zeta_{n^k}$ for $k=1,2,3,\ldots$. These points are not only torsion points in the field but also preperiodic points of $f$, as $f^k(\zeta_{n^k})=1$.
- Except for $\pm 1$, there are no other periodic points of $f$ in the field $\mathbb{Q}_f(2)$, i.e. $\mathbb{Q}_f(2)\cap\text{Per}(f)=\text{Per}(f,\mathbb{Q})$
- Since $f^{-n}(2)$ converges to the unit circle, a convergent sequence with height converging to $0$ not only converges to some transcendental elements but also to periodic points of $f$.

Moreover, we notice that the sequence ${2,\ 2^{-n},\ 2^{-n^2},\ \ldots}$ is a branch on the dynamical tree $\mathbb{T}_f(2)$ that is fixed by some subgroup of the dynamical group $G_f(2)$.

Let $f$, $g$, and $\pi$ be abstract maps on a set $S$ where $\pi$ is finite to one. Suppose these maps satisfy $\pi\circ f = g\circ \pi$. It is easy to show that the $\pi^{-1}(a)$ is a subset of preperiodic points of $g$ if $a$ is a periodic point of $f$. we will use this observation in the following.

###### Example 3

Consider Chebyshev polynomial

###### Example 4

A rational map $f$ of degree two or higher is called a Lattes map or a finite quotient of an affine map if there exists a flat surface $\mathbb{C}/\Lambda$, an affine map $L(t) = at+b$ from $\mathbb{C}/\Lambda$ to itself, and a finite-to-one holomorphic map $\theta: \mathbb{C}/\Lambda \to \mathbb{C}\setminus \mathcal{E}_f$ that satisfies the semiconjugacy relation $f \circ \theta = \theta \circ L$. In other words, the following diagram commutes:
<iframe class="quiver-embed" src="https://q.uiver.app/?q=WzAsNCxbMCwwLCJcXG1hdGhiYntDfS9cXExhbWJkYSJdLFsxLDAsIlxcbWF0aGJie0N9L1xcTGFtYmRhIl0sWzAsMSwiXFxtYXRoYmJ7Q31cXHNldG1pbnVzXFxtYXRoY2Fse0V9X2YiXSxbMSwxLCJcXG1hdGhiYntDfVxcc2V0bWludXNcXG1hdGhjYWx7RX1fZiJdLFswLDEsIkwiXSxbMCwyLCJcXHRoZXRhIl0sWzEsMywiXFx0aGV0YSJdLFsyLDMsImYiLDJdXQ==&embed" width="344" height="290" style="border-radius: 8px; border: none;"></iframe>

Let's revise the text:

Consider an elliptic curve $E$ defined over $\mathbb{Q}$, where $[2]$ represents the multiplication-by-$2$ endomorphism of $E$. The set $E(K)$ denotes the $K$-rational points of $E$. We define $f=[2]_x$ as the rational function obtained by projecting $[2]$ onto the $x$-coordinate. Let $O$ denote the identity element of $E$, and let $Q = (Q_x, Q_y)$ be a non-torsion point in $E(\mathbb{Q})$. If $Q_1$ and $Q_2$ are distinct points satisfying $[2^n](Q_1) = [2^n](Q_2) = Q$ for some positive integer $n$, then $[2^n](Q_1-Q_2) = O$. This implies that $\mathbb{Q}_f(Q_x)$ contains all preimages of fixed points and preperiodic points of $f$.

Now, let's investigate the periodic points of $f$. Suppose $P=(P_x,P_y)\in E$ satisfies $P_x$ being a periodic point of $f$. Then, $P$ is a preperiodic point of $[2]$. Note that only $Q$ and $-Q$ have the same $x$-coordinate. Hence, we have:
$$[2^n]P = P \quad \text{and} \quad [2^n]P = -P.$$
This implies that $P$ is either a $2^n-1$ or $2^n+1$ torsion point. However, there are only finitely many $2^n-1$ or $2^n+1$ torsion points in $E(\mathbb{Q})$, and there are no additional $2^n-1$ and $2^n+1$ torsion points in $E(\mathbb{Q}_f(Q_x))$. Therefore, we can conclude that $\mathbb{Q}_f(Q_x)\cap\text{Per}(f)=\text{Per}(f,\mathbb{Q})$.

We can summarize our observations with the following questions. Let $f$ be a polynomial and $\alpha\in\mathbb{Q}$. If $f^n(\alpha_n)=\alpha$, then the canonical height $h_f(\alpha_n)=\frac{1}{d^n}(\alpha)$, where $d$ is the degree of $f$. Thus, $0$ is dense in $h_f(\mathbb{Q}(f^{-\infty}(\alpha)))$, which is a field that has the property that we want to study. Based on the example we considered, we may ask:
- Are there infinitely many periodic points of $f$ in $\mathbb{Q}(f^{-\infty}(\alpha))$? If not, can we conclude that $\mathbb{Q}(\text{Per}(f))\cap \mathbb{Q}(f^{-\infty}(\alpha))$ has finite degree over $\mathbb{Q}$?
- Are there infinitely many preperiodic points of $f$ in $\mathbb{Q}(f^{-\infty}(\alpha))$? Similarly, can we determine the degree of the field intersection $\mathbb{Q}(\text{PrePer}(f))\cap \mathbb{Q}(f^{-\infty}(\alpha))$?
- Can we construct a backward dynamical sequence that converges to any periodic point of $f$?

A backward dynamical sequence of $f$ at $\alpha$ is a sequence $(a_n)$ satisfies $f^n(a_n)=\alpha$.

## Construction seems impossible

We have made some observations about inverse dynamical sequences:

###### Proposition 1.

Let $\{a_n\}$ be a coherent backward orbit, meaning $f(a_n) = a_{n-1}$ for all $n > 1$. If $\{a_n\}$ is convergent, it converges to a fixed point of $f$. In particular, if $\{a_n\}$ converges to a periodic point of $f$ with exact period greater than $1$, then $\{a_n\}$ cannot be an eventually coherent backward orbit.

**proof.** Since $f$ is continuous everywhere except possibly at poles, we have $f(\lim_n a_n) = \lim_n f(a_n) = \lim_n a_{n-1} = \lim_n a_n$. An eventually coherent backward orbit means that there exists some integer $m$ such that $\{a_n\}_{n\geq m}$ is a coherent backward orbit, so the last statement follows naturally.

###### Proposition 2.

If $\{a_n\}$ is not eventually coherent, then it cannot be a preperiodic sequence under $f$, i.e., there is no $m$ and $k$ such that ${f^m(a_n)}={f^{m+ik}(a_n)}$ for all $i\geq 0$.

**proof.** If $\{a_n\}$ is a preperiodic sequence under $f$ with period $k$, then we have $\{a_{m+ik}\}$ is an eventually coherent backward orbit of $f^k$ for $m=0,1,\ldots, k-1$. Note that $\{a_{m+ik}\}$ is a subsequence of a coherent backward orbit of $f$, so $\lim_i a_{m+ik}$ either diverges or converges to a fixed point of $f$.

###### Proposition 3.

There are infinitely many backward sequences converge to a periodic point of $f$.

## There are no new periodic points in some dynamical fields

###### Theorem.
Let $f$ be a polynomial of degree $d$ that satisfies that there exists a mobius transformation $l$ such that $f^l\equiv x^d\mod p$. Then, for any periodic point $a\in\mathbb{Q}_f(\alpha)$, $a$ is a rational number. Moreover, $\mathbb{Q}_f(\alpha)\cap \mathbb{Q}(\text{Per}(f)) = \mathbb{Q}$.

**proof** Let us first assume the second condition, because it illustrate the idea. Since $f^l\equiv x^d\mod p$, we notice that $(f^l)^{\circ n}-x\equiv x^{d^n}-x\mod p$. Therefore, a periodic point of period $k$ modulo $p$ will be a solution of a cyclotomic polynomial. Hence, we can conclude that any periodic point of period greater than $2$ is not defined over $\mathbb{Q}$.

Let $\alpha_n$ be a root of $(f^l)^{\circ n}(\alpha_n)=\alpha$. We notice that $p$ is totally ramified in $\mathbb{Q}(\alpha_n)$. On the other hand, for any periodic point $a\in \text{Per}(f)$, $p$ is splits in $\mathbb{Q}(a)$. Thus, $\mathbb{Q}(\alpha)\cap \mathbb{Q}(a) = \mathbb{\Q}$. It follows that $\mathbb{Q}_f(\alpha)\cap \mathbb{Q}(\text{Pre}(f))=\mathbb{Q}$.

Using this theorem, we can conclude that if $f$ is a normalized Belyi map of any degree or an Eisenstein polynomials, then $\text{Per}(f)\cap \mathbb{Q}_f(\alpha)\subset \mathbb{Q}$.