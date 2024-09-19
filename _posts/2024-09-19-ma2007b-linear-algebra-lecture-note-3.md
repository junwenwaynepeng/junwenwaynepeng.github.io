---
id: 5912103c-5c6e-4544-a82e-cb6ed21a386d
layout: post
date: 2024-09-19
title: MA2007B Linear Algebra Lecture Note 3
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [EMI,MA2007B,linear algebra]
categories: [post]

---

In our last class, we introduced Gaussian elimination. Today, we'll examine circumstances where this process might break down. A crucial aspect of our previous example was that every pivot was nonzero, but this isn't always true for all matrices. To illustrate how we handle these challenging situations, let's consider the following two examples.


**Example.**


$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 &2\\\\
2 & 2 & 5 &-3\\\\
4 & 6 & 8 & 1
\end{array}
\right]\xrightarrow{\substack{(2)-2\times(1)\to(2)\\\\(3)-4\times(1)\to(3)}}
\left[
\begin{array}{ccc|c}
2 & 1 & 1& 5\\\\
0 & 0& 3& -7\\\\
0 & 2& 4& -7
\end{array}
\right]
$$


We can immediately see that the second pivot is zero. Intuitively, we can swap the second and third rows without changing the solution. In other words, we obtain an equivalent system after this row exchange.


$$
\xrightarrow{(2)\leftrightarrow(3)}
\left[
\begin{array}{ccc|c}
2 & 1 &1 & 5\\\\
0 & 2 & 4 & -7\\\\
0 & 0 & 3 & -7
\end{array}
\right]
$$


**Example.**


The most challenging scenario arises when the matrix in question is singular. For example, we have


$$
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 1\\\\
2 & 2 & 2 & 1\\\\
4 & 6 & 8 & 1
\end{array}
\right]
\xrightarrow{\substack{(2)-2\times(1)\to (2)\\\\(3)-4\times(1)\to(3)}}
\left[
\begin{array}{ccc|c}
1 & 1 & 1 & 1\\\\
0 & 0 & 0 & -1\\\\
0 & 2 & 4 & -3
\end{array}
\right]
$$


Clearly, this system has no solution, even after a row exchange. When we encounter a row of the form $[0\\ 0 \\ \cdots 0\\ |\\ b]$, where $b$ represents any number, we can halt the algorithm and declare the original system singular. If $b$ is zero (i.e., the row is $[0\\ 0 \\ \cdots 0\\ |\\ 0]$), it indicates that the original system has infinitely many solutions. However, if $b$ is nonzero, it means the original system has no solution at all.


## A flowchart of Gaussian Elimination


```mermaid
flowchart TD
    Start["The origional system (an origional system)"] --> Triangle{Is a triangle system?} -->|no| Pivot{Check if the i-th pivot is zero}
    Pivot -->|yes| RowEx{Row exchange}
    Pivot -->|no| Elimination[Elimination]
    Elimination --> Start
    RowEx -->|success| Elimination
    RowEx -->|unsuccess| Singular[A singular case]
    Triangle -->|yes| nonSingular[Solve it!]
    Singular --> details[Infinite or no solution]
```


# Matrix Multiplication


## General multiplication


### basic definition


Let's define matrix multiplication. Given an $m$ by $n$ matrix $M$ and an $n$ by $k$ matrix $M'$,


$$
M=\left[\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n}\\\\
a_{21} & a_{22} & \cdots & a_{2n}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{array}\right]\quad\text{and}\quad
M'=\left[\begin{array}{cccc}
a'_{11} & a'_{12} & \cdots & a'_{1k}\\\\
a'_{21} & a'_{22} & \cdots & a'_{2k}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a'_{n1} & a'_{n2} & \cdots & a'_{nk}
\end{array}\right],
$$


the result of the matrix multiplication $MM'$ is an $m$ by $k$ matrix where its general entry is


$$
b_{ij}=(\text{the }i\text{-th row vector})\cdot(\text{the }j\text{-th column vector})=\sum_{l=1}^na_{il}a'_{lj}.
$$


**Example.** Let



$$
A=\begin{bmatrix}
1 & 2 & 3 \\\\
1 & 0 & -1
\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}
1 & -1\\\\
0 & 2\\\\
-3 & 1
\end{bmatrix}.
$$


Then, $AB = \begin{bmatrix}
-8 &6\\\\
4 & -2
\end{bmatrix}$ and $BA=\begin{bmatrix}
0 & 2 & 4\\\\
2 & 0 & 1\\\\
-2 & -6 & -10
\end{bmatrix}$.


**Remark.** The addition of two $m$ by $n$ matrix $A$ and $B$ results in an $m$ by $n$ matrix with the general terms $a_{ij}+b_{ij}$ where $a_{ij}$ and $b_{ij}$ are the general terms of $A$ and $B$ respectively.


**Example.**


$$
\begin{bmatrix}
1 & 2 & 3\\\\
3 & 2 & 1
\end{bmatrix}+\begin{bmatrix}
1 & 0 & 1\\\\
0 & 1 & 0
\end{bmatrix}=\begin{bmatrix}
2 & 2 & 4\\\\
3 & 3 & 1
\end{bmatrix}
$$


### Operation rules


Matrix multiplication is not commutative in general. One obvious reason, as illustrated by the lemma below, is that the dimensions of $AB$ and $BA$ may differ if $A$ and $B$ are not square matrices.


**Lemma.** If $AB = BA$, then $A$ and $B$ must be square matrices of the same size.


**Proof.** Assume that $AB=BA$, and also assume that $A$ is of size $m$ by $n$. For $AB$ to be well-defined, $B$ must be an $n$ by $k$ matrix for some integer $k$. The resulting matrix $AB$ is then of size $n$ by $k$. Similarly, for $BA$ to be well-defined, it implies $k=m$. Thus, the matrix $AB$ is of size $m$ by $m $, and $BA$ is of size $n$ by $n$. Therefore, we can conclude that $m=n$.(Q.E.D.)


However, even if $A$ and $B$ are square matrices of the same size, it's still unlikely that $AB=BA$.


**Example.** Let's consider



$$
A=\begin{bmatrix}
1 & 0\\\\
1 & 1
\end{bmatrix}
\quad\text{and}\quad
B=\begin{bmatrix}
1 & 1\\\\
0 & 1
\end{bmatrix}.
$$


It is easy to verify that $AB\neq BA$. In fact, any order of multiplication between $A$ and $B$ yeilds different result.


# English booster

<details>
  <summary>$m\times n$</summary>


This symbol has many different ways to read it depending on the context. The most common way of reading it is "m times n" or "m multiplied by n". When this symbol is used to denote the size of a matrix, we read it as "m by n".



  </details><details>
  <summary>commutative</summary>


交換



  </details>