---
id: 122d3176-005d-8071-8a01-e4bfa7db892c
layout: post
date: 2024-10-22
title: MA2007B Linear Algebra I Lecture Note 10
subtitle: subspace
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [EMI,MA2007B,linear algebra,overview]
categories: [post]

---

## Subspace


> **Definition.** A subset $W$ of a vector space $V$ over a field $F$ is called a subspace of $V$ if $W$ is a vector space over $F$ under the operations of addition and scalar multiplication defined on $V$.


$V$ itself is a subset of $V$, so we can also say $V$ is a subspace of $V$. Furthermoe, $\\{0\\}$ is also a subspace of $V$ because it clearly satisfies the definition of vector spaces. These two subspaces are called trivial subspaces.


To verify if a subset $W$ of $V$ is a vector space, we can simplify the verification process. Since the operation on $W$ inherits from $V$, many conditions follow naturally. In particular, we don't need to check associativity or distributivity. This leaves us with:

1. Addition is closed in $W$
2. Scalar multiplication is closed in $W$
3. $W$ contains the zero vector
4. Any element has an additive inverse in $W$.

These four conditions can be summarized into the following theorem, which we'll refer to as the first verification theorem.


**Theorem.** Let $V\supseteq W$. $W$ is a subspace of $V$ if and only if the following three conditions hold:

1. $0\in W$.
2. $x+y\in W$ whenever $x\in W$ and $y\in W$.
3. $ax\in W$ whenever $a\in F$ and $x\in W$

**Proof.** When $W$ is a subspace, it is by definition a vector space. Thus, the three conditions trivially hold. To prove the converse, we must deduce the existence of additive inverses from the three given conditions. By the latest theorem in Lecture Note 9, we know that the inverse of an element $x$ is $(-1)x$. By the condition 3, this element is in $W$.


---


Now, let us apply this theorem to real life problems.


**Example.** Let $W$ be the set of all $n$-by-$n$ diagonal matrices over $\mathbb{R}$. To verify that $W$ is a subspace, we check:

1. The $n$-by-$n$ zero matrix is the additive identity in $W$, and it is a diagonal matrix. Thus, the zero vector is in $W$.
2. The sum of two diagonal matrices is also diagonal. Therefore, addition is closed in $W$.
3. When a scalar multiplies a diagonal matrix, the result is still diagonal. Hence, scalar multiplication is closed in $W$.

By the first verification theorem, we can conclude that $W$ is indeed a subspace.


**Example.** We already shown that $\mathcal{F}(\mathbb{R},\mathbb{R})$, the set of all real functions, is a vector space. We claim that the solutions of the differential equation $y^{\prime\prime}+2y^\prime-3y=0$ is a subspace of $\mathcal{F}(\mathbb{R},\mathbb{R})$. We check:

1. The zero function is trivially a solution.
2. Let $f$ and $g$ be solutions. Then, we have

	$$
	\begin{align*}
	(f+g)^{\prime\prime}+2(f+g)^\prime-3(f+g)&=f^{\prime\prime}+g^{\prime\prime}+2f^\prime+2g^\prime-3f-3g\\\\
	&=f^{\prime\prime}+2f^{\prime}-3f+g^{\prime\prime}+2g^{\prime}-3g\\\\
	&=0+0=0
	\end{align*}
	$$

3. Let $c$ be a real number. Then, we have

	$$
	(cf)^{\prime\prime}+2(cf)^\prime-3(cf) = cf^{\prime\prime}+2cf^\prime-3cf=c(f^{\prime\prime}+2f^\prime-3f)=c\cdot 0=0.
	$$


Therefore, by the first verificiaiton theorem, we can conclude that $W$ is indeed a subspace.


**Example.** We call a square matrix $M$ a symmetric matrix if $M=M^t$. In terms of its general entry $a_{ij}$ of $M$, it means


$$
a_{ij}=a_{ji}
$$


for all $i$ and $j$. The set of all symmetric matrices in $M_{n\times n}(\mathbb{R})$ forms a subspace of $M_{n\times n}(\mathbb{R})$. 


The Hermitian matrix $A$ is a square matrix satisfying $A=\overline{A^t}$, where the bar $\bar{\cdot}$ denotes the complex conjugation. For its general terms, this translates to:


$$
a_{ij}=\overline{a_{ji}}.
$$


for all $i$ and $j$. Similarly, the set of all Hermitian matrices in $M_{n\times n}(\mathbb{C})$ forms a subspace.


**Example.** Let $M$ be an $n$-by-$n$ square matrix. The trace of $M$, denoted by $\text{Tr}(M)$, is the sum of the entries on the diagonal,


$$
\text{Tr}(M)=\sum_{i=1}^na_{ii}.
$$


The set $\\{M|Tr(M)=0\\}$ fors a subspace.

