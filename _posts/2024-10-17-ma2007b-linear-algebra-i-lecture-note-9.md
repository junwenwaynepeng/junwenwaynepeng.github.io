---
id: 121d3176-005d-8084-a52e-f8c97e292c38
layout: post
date: 2024-10-17
title: MA2007B Linear Algebra I Lecture Note 9
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

The language I mentioned in the last class is an axiomatic system. An axiomatic system is a set of axioms used to logically derive theorems. For example, in Euclidean geometry, the statement "a line can be drawn between any two points" is considered an axiom—a fundamental truth accepted without proof. Among mathematical axiom, the most renowned axiom is the axiom of choice, which states:


> For a collection of nonempty candy boxes, which could be finite or infinite in number, we can select one candy from each box.


The key feature that makes this axiom useful is its ability to allow mathematicians to perform operations infinitely many times.


Hilbert posed three fundamental questions about axiomatic systems:

1. (Completeness) Is it possible to have a finite set of axioms that can prove any statement to be either true or false?
2. (Consistency) Is it possible for a set of axioms to lead to a contradiction, where a statement is both true and false?
3. (Decidability) Is there a mechanical process to determine whether a statement is true or false based on a given set of axioms?

These problems are collectively known as Hilbert's program.


Surprisingly, Gödel later proved that the answers to all these questions are negative. Despite this setback, axiomatic systems have profoundly influenced modern mathematics and have become a standard approach in nearly every mathematical field.


In 1888, Giuseppe Peano developed the modern notation for linear algebra. Here it is:


**Definition.** A vector space (or linear space) $V$ over a field $F$ consists of a set in which two operations (called addition and scalar multiplication) are defined so that for each element $a$ in $F$ and each element $x$ in $V$ there is a unique element $ax$ in $V$, such that the following conditions hold:

- (VS1) for all $x,y\in V$, $x+y=y+x$ (addition is commutative)
- (VS2) for all $x,y,z\in V$, $(x+y)+z=x+(y+z)$ (addition is associative)
- (VS3) there is an element $0\in V$ such that $x+0=x$ (additive unity exists)
- (VS4) For $x\in V$, there exists $y\in V$ such that $x+y=0$ (additive inverse exists)
- (VS5) For $1\in F$, $1x=x$.
- (VS6) $(ab)x=a(bx)$ for all $a$ and $b\in F$
- (VS7) $a(x+y)=ax+ay$
- (VS8) $(a+b)x=ax+bx$

**Example.** $F^n=\\{(x_1,\ldots,x_n)|x_i\in F\\}$ is a vector space over $F$ if we define the addition as:


$$
(x_1,\ldots,x_n)+(y_1,\ldots,y_n)=(x_1+y_1,\ldots,x_n+y_n)
$$


and the scalar multiplication as:


$$
c(x_1,\ldots,x_n)=(cx_1,\ldots,cx_n)
$$


for $c\in F$. To prove it is a vector space, we need to verify that conditions (VS1) through (VS8) are satisfied. For example, to verify (VS1), we may:


$$
\begin{align*}
(x_1,\ldots,x_n)+(y_1,\ldots,y_n)&=(x_1+y_1,\ldots,x_n+y_n)\text{ (by definition)}\\\\
&=(y_1+x_1,\ldots,y_n+x_n)\text{ (because }F\text{ is a field)}\\\\
&=(y_1,\ldots,y_n)+(x_1,\ldots,x_n)\text{ (by definition)}.
\end{align*}
$$


The other conditions can be verified in a similar manner, so we leave this as an exercise for the reader.


**Example.** The set of matrices $M_{n\times m}(\mathbb{C})=\\{n\text{ by }m\text{ matrices over }\mathbb{C}\\}$ is a vector space over $\mathbb{C}$ or $\mathbb{R}$.
**Example.** $\mathcal{F}(S,F)=\\{f|f:S\to F\\}$  is a vector space over $F$.


**Theorem.(Cancellation Law for Vector Addition)** Let $V$ be a vector space. We have


$$
x+z=y+z\implies x=y
$$


for all $x,y,z\in V$.


**proof.** By (VS4), there exists $z'$ such that $z+z'=0$.  Then, we may:


$$
\begin{align*}
x&=x+0\text{ (VS3)}\\\\
&=x+(z+z^\prime)\text{ (VS4)}\\\\
&=(x+z)+z^\prime\text{ (VS2)}\\\\
&=(y+z)+z^\prime\text{ (the given assumption)}\\\\
&=y+(z+z')\text{ (VS2)}\\\\
&=y+0\text{ (VS4)}\\\\
&=y\text{ (VS3)}
\end{align*}
$$


**Corollary 1.** The additive identity $0$ is unique.


**proof.** (Exercise. I will update next week.)


**Corollary 2.** For $x\in V$, the additive inverse of $x$ is unique.


**proof.** (Exercise. I will update next week.)


**Theorem.** In any vector space $V$ the following statements are true:

1. $0x=0$ for all $x\in v$.
2. $(-a)x=-(ax)$ ($(-a)x$ is the inverse element of $ax$)
3. $a 0=0$ for all $a\in F$.

**proof.**

	1. We may:

		$$
		\begin{align*}
		0x+0x&=(0+0)x\text{ (VS8)}\\\\
		&=0x\text{ (}F\text{ is a field/0 is a number)}\\\\
		&=0x+0\text{ (VS3)}
		\end{align*}
		$$


		Therefore, $0x=0$ follows from the cancellation law.

	2. Since we have shown that the inverse of an element is unique, we only need to show that $(-ax)+ax=0$. We may:

		$$
		\begin{align*}
		(-ax)+ax&=(-a+a)x\text{ (VS8)}\\\\
		&=0x\text{ (}a\text{ and }-a\text{ are numbers)}\\\\
		&=0\text{ (by the first statement)}.
		\end{align*}
		$$

		1. Similar to Statement $1$.
