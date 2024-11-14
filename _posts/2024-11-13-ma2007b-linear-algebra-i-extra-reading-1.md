---
id: 13dd3176-005d-80a4-ac77-e11485521041
layout: post
date: 2024-11-13
title: MA2007B Linear Algebra I Extra Reading 1
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# How do we determine if a set of vectors is linearly independent?


## Row spaces


Given a set of vectors $\\{v_1,\ldots, v_n\\}$, how do we determine if the set is linearly independent? We can approach this by letting $v_1,\ldots, v_n$ be the row vectors of a matrix $A$ and calling the space spanned by these vectors the _row space_ of the matrix, denoted by $R(A)$. Let's examine how we can interpret row operations in terms of linear combinations.


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
{-} & v_1 & {-}\\\\
{-} & v_2 & {-}\\\\
{-} & v_3 & {-}\\\\
{-} & v_4 & {-}
\end{bmatrix}\xrightarrow{(1)\leftrightarrow(2)}\begin{bmatrix}
{-} & v_2 & -\\\\
{-} & v_1 & -\\\\
{-} & v_3 & -\\\\
{-} & v_4 & -
\end{bmatrix}\xrightarrow{\substack{-2\times(1)+(2)\to(2)\\\\-(1)+(4)\to(4)}}\begin{bmatrix}
{-} & v_2 & -\\\\
{-} & -2v_2+v_1 & -\\\\
{-} & v_3 & -\\\\
{-} & -v_2+v_4 & -
\end{bmatrix}
$$


$$
\xrightarrow{\substack{2\times(2)+(3)\to(3)\\\\(2)+(4)\to(4)}}\begin{bmatrix}
{-} & v_2 & -\\\\
{-} & v_1-2v_2 & -\\\\
{-} & 2v_1-4v_2+v_3 & -\\\\
{-} & v_1-3v_2+v_4 & -
\end{bmatrix}\xrightarrow{-4\times(3)+(4)}\begin{bmatrix}
{-} & v_2 & -\\\\
{-} & v_1-2v_2 & -\\\\
{-} & 2v_1-4v_2+v_3 & -\\\\
{-} & -7v_1+13v_2-4v_3+v_4 & -
\end{bmatrix}
$$


Therefore, we have $0=-7v_1+13v_2-4v_3+v_4$ and, equivalently, $v_4=7v_1-13v_2+4v_3$.


(Method 2: Use elementary matrices) We can also use the elementary matrices. Clearly, we have



$$
\begin{bmatrix}
v_2\\\\
v_1-2v_2\\\\
2v_1-4v_2+v_3\\\\
-7v_1+13v_2-4v_3+v_4
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & 0 & 0\\\\
0 & 1 & 0 & 0\\\\
0 & 0 & 1 & 0\\\\
0 & 0 & -4 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 & 0\\\\
0 & 1 & 0 & 0\\\\
0 & 2 & 1 & 0\\\\
0 & 1 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 & 0\\\\
-2 & 1 & 0 & 0\\\\
0 & 0 & 1 & 0\\\\
-1 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
0 & 1 & 0 & 0\\\\
1 & 0 & 0 & 0\\\\
0 & 0 & 1 & 0\\\\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
v_1\\\\
v_2\\\\
v_3\\\\
v_4
\end{bmatrix}
$$


## Column spaces


The last two questions is equivalent to find a nontrivial solution $x$, $y$, $z$ , and $t$ such that


$$
x\begin{bmatrix}2\\\\-1\\\\3\end{bmatrix}+y\begin{bmatrix}1\\\\0\\\\1\end{bmatrix}+z\begin{bmatrix}0\\\\2\\\\-1\end{bmatrix}+t\begin{bmatrix}1\\\\1\\\\4\end{bmatrix}=\begin{bmatrix}0\\\\0\\\\0\end{bmatrix}
$$


and $a$, $b$, and $c$ such that


$$
a\begin{bmatrix}2\\\\-1\\\\3\end{bmatrix}+b\begin{bmatrix}1\\\\0\\\\1\end{bmatrix}+c\begin{bmatrix}0\\\\2\\\\-1\end{bmatrix}=\begin{bmatrix}1\\\\1\\\\4\end{bmatrix}
$$


Thus, instead of putting vectors as rows of a matrix, it is also meaningful if we consider them as columns of a matrix. We call the space generated by the column vectors of a matrix $A$ column space of $A$, denoted by $C(A)$.


## Equivalent statements


These terminologies enrich our understanding of linear equation systems. The followings:

- Is $b$ in $R(A^t)$
- Is $b$ in the span of the row vectors of $A^t$
- Is $b$ in $C(A)$
- Is $b$ in the span of the column vectors of $A$

are equivalent to solve $Ax=b$.


In essence, finding linear combinations and determining if a vector is in the span of a set are equivalent to solving specific linear equation systems. This fundamental connection ties together these key concepts in linear algebra.

