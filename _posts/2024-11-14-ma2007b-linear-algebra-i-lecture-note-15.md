---
id: 13ed3176-005d-80b5-9b60-e4b29da89da6
layout: post
date: 2024-11-14
title: MA2007B Linear Algebra I Lecture Note 15
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

**Theorem.** Suppose $V$ is of finitely generated. If we have two basis $S_1$ and $S_2$ for $V$, then $\sharp S_1=\sharp S_2$.


**proof.** Since $V$ is of finitely generated, we can let $\sharp S_1=n$ and let $\sharp S_2=m$ and assume $n\leq m$. If $n=m$, then we are done. Otherwise, there exists a subset $S$ of $S_2$ with exactly $m-n$ many elements such that $S_1\cup S$ generates $V$. However, the $S_1$ is a basis, so $S_1$ already generates $V$, which is a contradiction. Therefore, we can conclude that $\sharp S_1=\sharp S_2$. 


**Definition.** A vector space $V$ is called finite-dimensional if it has a basis consisting of a finite number of elements; the unique number of elements in each basis for $V$ is called the dimension of $V$ and is denoted $\text{dim}(V)$. If a vector space is not finite-dimensional, then it is called infinite-dimensional. 


### Dimension of column space and row space


Let's revisit the process of Gaussian elimination. Is there a more elegant argument to prove that the dimension of a row space is at most $m$?


**Theorem.** Let $A$ be an $n$-by-$n$ matrix. The following conditions are equivalent:

1. A linear system $Ax=b$ is nonsingular, i.e., has unique solution
2. $A$ has inverse
3. The row space of $A$ has dimension $n$
4. The column space of $A$ has dimension $n$

**Example.** Determine the dimension of the column space of the following matrix


$$
A=\begin{bmatrix}
1 & 0 & 1\\\\
0 & 1 & 1\\\\
1 & 1 & 0
\end{bmatrix}.
$$


Consider $A^T$, which is still $A$. The Gaussian elimination will reduce $A$ to a triangular system


$$
A'=\begin{bmatrix}
1 & 0 & 1\\\\
0 & 1 & 1\\\\
0 & 0 & -2
\end{bmatrix}
$$


Clearly, the row vectors of $A'$ are linearly independent. Furthermore, the vector space spanned by the row vectors remains unchanged before and after Gaussian elimination. Therefore, $\text{dim}(C(A))=\text{dim}(R(A^T))=3$.


# Linear Transformation


Let's address a fundamental question. In our previous lecture note, after introducing the concept of basis for a vector space, we stated that if $V$ has finite dimension, every element in $V$ can be uniquely represented by a tuple $(a_1,\ldots, a_n)$. Consequently, we might claim that $V$ is equivalent to $F^n$. However, this argument overlooks a crucial aspect often considered in advanced mathematics but frequently neglected in high school mathematics: the structure of the set. Specifically, we haven't demonstrated that the algebraic structure on $V$ and $F^n$ are fundamentally the same. How can we clarify this equivalence?


Similar to what you learned in the Fundamental Mathematics course, mathematicians rely heavily on bijective functions to demonstrate that two structures are equivalent. For example, to show that $\mathbb{Q}$ (the set of rational numbers) has the same cardinality as $\mathbb{N}$ (the set of natural numbers), we construct a bijective map from one to the other. Here, we will construct a function from $V$ to $F^n$. Such a function is called linear transformation. 


Let $V$ be a vector space, and let ${e_1,\ldots, e_n}$ be a basis for $V$. We define $T:V\to F^n$, for $v \in V$, where we express $V$ as $a_1e_1+\cdots+a_ne_n$, as


$$
T(v)=(a_1,\ldots, a_n)
$$


Note that $T$ is well-defined since each element $v$ in $V$ can be uniquely expressed as a sum of $e_1,\ldots, e_n$. Most crucially, this map $T$ is preserve the algebraic structure on $V$ and $F^n$. Let $w$ in $V$ be expressed as $b_1e_1+\cdots+b_ne_n$. We note that


$$
\begin{align*}T(v+w)&=T(a_1e_1+\cdots+a_ne_n+b_1e_1+\cdots+b_ne_n)\\\\&=T((a_1+b_1)e_1+\cdots+(a_n+b_n)e_n)\\\\&=(a_1+b_1,\ldots,a_n+b_n)\\\\&=(a_1,\ldots,a_n)+(b_1,\ldots,b_n)\\\\&=T(v)+T(w)\end{align*}
$$


Similarly, we also note that


$$
\begin{align*}T(cv)&=T(c（a_1e_1+\cdots+a_nc_n）)\\\\&=T(ca_1e_1+\cdots+ca_ne_n)\\\\&=(ca_1,\ldots,ca_n)\\\\&=c(a_1,\ldots,a_n)=cT(v)\end{align*}
$$


**Definition** Let $V$ and $W$ be two vector space over the same field $F$. We call a map $T:V\to W$ a linear transformation if $T$ satisfies: for $v,w\in V$

1. $T(v+w)=T(v)+T(w)$
2. $T(cv)=cT(v)$
