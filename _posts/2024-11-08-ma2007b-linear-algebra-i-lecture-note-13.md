---
id: 138d3176-005d-806e-82f7-d979aed33f0a
layout: post
date: 2024-11-08
title: MA2007B Linear Algebra I Lecture Note 13
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [EMI,MA2007B,linear algebra,overview]
categories: [post]

---

## Linear dependence and linear independence


Given a vector space $V$, we can find a set of axes by considering a chain of sets


$$
\empty\subset\\{x_1\\}\subseteq\\{x_1,x_2\\}\subset\cdots
$$


where $x_{n+1}\notin\text{span}(\\{x_1,\ldots, x_{n}\\})$ for all $n$. It follows that


$$
\\{0\\}\subsetneq\text{span}(\\{x_1\\})\subsetneq\text{span}(\\{x_1,x_2\\})\subsetneq\cdots V.
$$


The condition $x_{n+1}\notin\text{span}(\\{x_1,\ldots, x_{n}\\})$ is so called _linear independence._


**Definition.** A subset $S$ of a vector space $V$ is said to be linearly dependent if there exists a finite number of distinct vectors $x_1, x_2,\ldots, x_n$ in $S$ and scalars $a_1,a_2,\ldots,a_n$ in $F$, not all zero, such that $a_1x_1+a_2x_2+\cdots+a_nx_n=0$. We shall also describe this situation by saying that the elements of $S$ are linearly dependent.


**Definition.** A subset $S$ of a vector space that is not linearly dependent is said to be linearly independent. As before we shall often describe this situation by saying that the elements of $S$ are linearly independent.


I didn't introduce the following theorem in the class, but it is somehow useful later.


**Lemma.** Let $V$ be a vector space, and let $S_1\subseteq S_2\subseteq V$. If $S_1$ is linearly dependent, then $S_2$ is linearly dependent. Equivalently, if $S_2$ is linearly independent, then $S_1$ is linearly independent.


**proof.** Trivial. 


**Lemma.** If $S\subset V$ is linearly independent, then any vector $b$ in $V$ can be uniquely expressed as a linear combination of elements in $S$.


**Proof.** Let's assume, for the sake of contradiction, that $b$ does not have a unique expression. This means there exist two distinct sets of scalars $(a_1,\ldots,a_n)$ and $(a^{\prime}_1,\ldots,a^{\prime}_n)$ in $F^n$, along with vectors $x_1,\ldots,x_n\in S$, such that


$$
b=a_1x_1+\cdots +a_nx_n=a^{\prime}_1x_1+\cdots+a^{\prime}_nx_n.
$$


It follows that $0=(a_1-a^{\prime}_1)x_1+\cdots+(a_n-a^{\prime}_n)x_n$, where not all $a_i-a^{\prime}_i$ are zero. This implies that $\\{x_1,\ldots,x_n\\}\subseteq S$ is linearly dependent. Consequently, $S$ is linearly dependent, which contradicts our initial assumption.


---


This lemma demonstrates that a vector in $V$ is uniquely determined by an $n$-tuple. Conversely, each $n$-tuple represents a unique vector in $V$. This insight reveals the potential to view a vector space as a coordinate system $F^n$. We'll explore this concept more formally later using the more precise term "linear transformation".


**Theorem.** The set that we construct from the aforementioned process is linearly independent. 


**Proof.** Clearly, $\\{x_1\\}$ is linearly independent. We proceed by induction, assuming $\\{x_1,\ldots,x_n\\}$ is linearly independent. Let's also assume $\text{span}(\\{x_1,\ldots,x_n\\})$ is a proper subset of $V$. Now, choose $x_{n+1}\notin\text{span}(\\{x_1,\ldots,x_n\\})$. We claim $\\{x_1,\ldots, x_{n+1}\\}$ is linearly independent. To prove this, we use contradiction. Suppose it's not linearly independent. Then there exist scalars $a_1,\ldots, a_{n+1}\in F$, not all zero, such that


$$
0=a_1x_1+\cdots+a_{n}x_n+a_{n+1}x_{n+1}.
$$


If $a_{n+1}$ is zero, it contradicts our induction assumption. If $a_{n+1}$ is nonzero, we can express $x_{n+1}$ as $x_{n+1}=\frac{-a_{1}}{a_{n+1}}x_1+\cdots +\frac{-a_{n}}{a_{n+1}}x_n$. This implies that $x_{n+1}\in\text{span}(\\{x_1,\ldots, x_n\\})$, which contradicts our construction. Thus, we can conclude that the set $\\{x_1,\ldots,x_{n+1}\\}$ is linearly independent.


---


Starting from the empty set and progressively adding vectors not in the span of the previous set, will the subspace spanned by this set eventually become $V$? For example, we might think that we only need three steps to reach $\mathbb{R}^3$. However, this is not necessarily true. Consider $\mathbb{R}^\infty$—we cannot "arrive" at it through this process (see Homework 3 for details).


A vector space is called finite-dimensional if there exists a finite set from the aforementioned process—called a basis—that spans the entire space. Examples of such spaces include $\mathbb{R}^2$ and $\mathbb{R}^3$. But is this the complete picture? Are we overlooking anything?


### How do we determine if a set of vectors is linearly independent?


Given a set of vectors $\\{v_1,\ldots, v_n\\}$, how do we determine if the set is linearly independent? We can approach this by letting $v_1,\ldots, v_n$ be the row vectors of a matrix and calling the space spanned by these vectors the _row space_ of the matrix. Let's examine how we can interpret row operations in terms of linear combinations.


$$
\begin{bmatrix}
 {-} & v_1 & {-}\\\\
& \vdots & \\\\
 {-} & v_i & {-}\\\\
& \vdots & \\\\
 {-} & v_j & {-}\\\\
& \vdots & \\\\
{-} & v_n & {-}
\end{bmatrix}\xrightarrow{c\times(i)+(j)\to(j)}\begin{bmatrix}
 {-} & v_1 & {-}\\\\
& \vdots & \\\\
 {-} & v_i & {-}\\\\
& \vdots & \\\\
 {-} & cv_i+v_j & {-}\\\\
& \vdots & \\\\
 {-} & v_n & {-}
\end{bmatrix}
$$


Thus, the row vectors of an equivalent system are linear combinations of the row vectors from the original system. When we reduce an original system to a triangular form where the bottom row vector is zero, it indicates that the zero vector is a nontrivial linear combination of the original system's row vectors. In other words, $v_1,\ldots, v_n$ are linearly dependent. Conversely, if we cannot reduce the system to this form, then $v_1,\ldots,v_n$ are linearly independent.


**Example.** Determine if the set $\\{\begin{bmatrix}2\\\\-1\\\\3\end{bmatrix},\begin{bmatrix}1\\\\0\\\\1\end{bmatrix},\begin{bmatrix}0\\\\2\\\\-1\end{bmatrix},\begin{bmatrix}1\\\\1\\\\4\end{bmatrix}\\}$ is linearly independent.


(Later, we'll use the concept of dimension to provide a quick answer to this question. Since these vectors are in a 3-dimensional vector space, any set of more than 3 vectors is linearly dependent.)


$$
\begin{bmatrix}
2 & -1 & 3\\\\
1 & 0 & 1\\\\
0 & 2 & -1\\\\
1 & 1 & 4
\end{bmatrix}\xrightarrow{(1)\leftrightarrow(2)}\begin{bmatrix}
1 & 0 & 1\\\\
2 & -1 & 3\\\\
0 & 2 & -1\\\\
1 & 1 & 4
\end{bmatrix}\xrightarrow{\substack{-2\times(1)+(2)\to(2)\\\\-(1)+(4)\to(4)}}\begin{bmatrix}
1 & 0 & 1\\\\
0 & -1 & 1\\\\
0 & 2 & -1\\\\
0 & 1 & 3
\end{bmatrix}
$$


$$
\xrightarrow{\substack{2\times (2)+(3)\to(3)\\\\(2)+(4)\to(4)}}\begin{bmatrix}
1 & 0 & 1\\\\
0 & -1 & 1\\\\
0 & 0 & 1\\\\
0 & 0 & 4
\end{bmatrix}\xrightarrow{-4\times(3)+(4)\to(4)}\begin{bmatrix}
1 & 0 & 1\\\\
0 & -1 & 1\\\\
0 & 0 & 1\\\\
0 & 0 & 0
\end{bmatrix}
$$


Since the bottom row vector is zero, the set of row vectors is linearly dependent. This leads us to two equivalent questions (as the answer to one implies the answer to the other):

- How can we express the zero vector as a linear combination of these row vectors?
- How can we express the fourth row vector as a linear combination of the other three vectors?

(Method 1: Trace the Gaussian elimination process)


$$
\begin{bmatrix}
- & v_1 & -\\\\
- & v_2 & -\\\\
- & v_3 & -\\\\
- & v_4 & -
\end{bmatrix}\xrightarrow{(1)\leftrightarrow(2)}\begin{bmatrix}
- & v_2 & -\\\\
- & v_1 & -\\\\
- & v_3 & -\\\\
- & v_4 & -
\end{bmatrix}\xrightarrow{\substack{-2\times(1)+(2)\to(2)\\\\-(1)+(4)\to(4)}}\begin{bmatrix}
- & v_2 & -\\\\
- & -2v_2+v_1 & -\\\\
- & v_3 & -\\\\
- & -v_2+v_4 & -
\end{bmatrix}
$$


$$
\xrightarrow{\substack{2\times(2)+(3)\to(3)\\\\(2)+(4)\to(4)}}\begin{bmatrix}
- & v_2 & -\\\\
- & v_1-2v_2 & -\\\\
- & 2v_1-4v_2+v_3 & -\\\\
- & v_1-3v_2+v_4 & -
\end{bmatrix}\xrightarrow{-4\times(3)+(4)}\begin{bmatrix}
- & v_2 & -\\\\
- & v_1-2v_2 & -\\\\
- & 2v_1-4v_2+v_3 & -\\\\
- & -7v_1+13v_2-4v_3+v_4 & -
\end{bmatrix}
$$


Therefore, we have $0=-7v_1+13v_2-4v_3+v_4$ and, equivalently, $v_4=7v_1-13v_2+4v_3$.

