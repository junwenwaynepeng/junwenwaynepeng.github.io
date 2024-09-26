---
id: 10bd3176-005d-80ce-8a6d-fcf409370a81
layout: post
date: 2024-09-24
title: MA2007B Linear Algebra Homework 2
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

In the following, $A$, $B$, $C$, $\ldots$ are matrices of appropriate sizes, depending on the context.

1. Prove the following statements:
	1. Prove that if $AA'=I$ and $A''A=I$, then $A'=A''$. (The left inverse equals the right inverse)
	2. Prove that if $A$ is invertible, then $AB=O$ implies $B=O$ where $O$ iz the zero matrix.
	3. Show that $(AB)^{-1}=B^{-1}A^{-1}$ if $A$ and $B$ are invertible. (Relationship between multiplication and inversion)
2. Prove that $(AB)^\intercal=B^\intercal A^\intercal$ for properly defined matrices $A$ and $B$.
3. Prove $A(B+C)=AB+AC$
4. Let $A=\begin{bmatrix}a & b\\\\c & d\end{bmatrix}$.
	1. Find the inverse of $A$ if it exists.
	2. Show that if $Ax=b$ has a unique solution if and only if $\det(A)\neq 0$.
5. By trial and error find examples of $2$ by $2$ matrices such that
	1. $A^2=-I$, $A$ having only real entries.
	2. $B^2=0$, although $B\neq 0$.
	3. $CD=-DC$, not allowing the case $CD=0$.
	4. $EF=0$, although no entries of $E$ or $F$ are zero.
6. The matrix that rotates the $xy-$plane by an angle $\theta$ is

	$$
	A(\theta)=\begin{bmatrix}
	\cos(\theta) & -\sin(\theta)\\\\
	\sin(\theta) & \cos(\theta)
	\end{bmatrix}.
	$$

7. which three matrix $E_1$, $E_2$, and $E_3$ put $A$ into a upper triangular matrix $U?$

	$$
	A=\begin{bmatrix}
	1 & 1 & 0\\\\
	4& 6 & 1\\\\
	-2 & 2 & 0
	\end{bmatrix}\quad\text{and}\quad E_3E_2E_1A=U
	$$

8. The parabola $y=a+bx+cx^2$ goes through the point $(x,y)=(1,4)$ and $(2,8)$ and $(3,14)$. Find and solve a matrix equation for the unknowns $(a,b,c).$
