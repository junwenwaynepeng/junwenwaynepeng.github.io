---
id: 106d3176-005d-80d7-aa99-e818137a6405
layout: post
date: 2024-09-19
title: MA2007B Linear Algebra Lecture Note 4
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

**Example.** Even when one of the matrices is diagonal, commutativity is unlikely to hold.


$$
A=\begin{bmatrix}
1 & 2\\\\
-2 & 1
\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}1 & 0\\\\
0 & 2\end{bmatrix}
$$


Therefore, if $A$ and $B$ commute, they share some common properties. For example, one can easily show that if both $A$ and $B$ are diagonal matrices, then $A$ and $B$ commutes. An intriguing question — and a goal of this semester — is to investigate under what conditions $A$ and $B$ commute.


There is a matrix that always commutes with others: _identity matrix_. An identity matrix $I$ is a square matrix that has $1$ on its diagonal and $0$ in other pleases. That is:


$$
I=I_n=\begin{bmatrix}1 & 0 & \cdots & 0\\\\
0 & 1 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots\\\\
0 & 0 & \cdots & 1\end{bmatrix}_{n\times n}.
$$


**Proposition.** Let $A$ be an $n$ by $n$ matrix. If $A$ commutes with any $n$ by $n$ matrix, then $A=cI_n$ for some number $c$.


**proof.** Let $U_i$ be the matrix that has $1$ on the $(i,i)$-position and $0$ on other places. Let $A=(a_{ij})$. We observe that


$$
U_iA=\begin{bmatrix}
0 & \cdots & 0\\\\
\vdots & \ddots & \vdots\\\\
a_{i1} & \cdots & a_{in}\\\\
\vdots & \ddots & \vdots\\\\
0 & \cdots & 0
\end{bmatrix}
$$


and


$$
AU_i=\begin{bmatrix}
0 & \cdots & a_{1i} & \cdots & 0\\\\
\vdots & \ddots & \vdots & \ddots & \vdots\\\\
0 & \cdots & a_{ni} & \cdots & 0 
\end{bmatrix}.
$$


Since $U_iA=AU_i$ by the assumption, we must have $a_{ij}=0$ if $i\neq j$. Now, we can assume that $A$ is a diagonal matrix. Let's consider the matrix $E$ that has $1$ on every entry. Then, we have



$$
AE = \begin{bmatrix}
a_{11} & a_{11} & \cdots & a_{11}\\\\
a_{22} & a_{22} & \cdots & a_{22}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a_{nn} & a_{nn} & \cdots & a_{nn}
\end{bmatrix}
$$


and


$$
EA = \begin{bmatrix}
a_{11} & a_{22} & \cdots & a_{nn}\\\\
a_{11} & a_{22} & \cdots & a_{nn}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a_{11} & a_{22} & \cdots & a_{nn}
\end{bmatrix}
$$


Again, we compare $AE$ with $EA$ to conclude that $a_{11}=a_{22}=\cdots =a_{nn}.$ Hence, we conclude that 



$$
A=\begin{bmatrix}a_{11} & 0 & \cdots & 0\\\\
0 & a_{11} & \cdots & 0\\\\
\vdots & \vdots & \ddots & \vdots\\\
0 & 0 & \cdots & a_{11}\end{bmatrix}=a_{11}I_n
$$


---


Multiplying a constant $c$ with a matrix $A$ involve multiplying every entry of $A$ by $c$, i.e. $cA=(ca_{ij})$.


The concept of an inverse matrix arises alongside that of the identity matrix. Let $A$ be an $n$ by $n$ square matrix. We say $A$ to be invertible if there exists an $n$ by $n$ matrix square matrix, denoted by $A^{-1}$ and called _inverse of_ $A$, such that $AA^{-1}=A^{-1}A=I_n$.


**(In Homework) Exercise.** 

1. Prove that if $AA'=I$ and $A''A=I$, then $A'=A''$. (The left inverse equals the right inverse)
2. Prove that the inverse of $A$ is unique if $A$ is invertible. (Uniqueness of the inverse matrix)
3. Show that $(AB)^{-1}=B^{-1}A^{-1}$ if $A$ and $B$ are invertible. (Relationship between multiplication and inversion)

Although it seems natural to write the multiplication of three matrices in a row like $ABC$, it is not necessary that $A(BC)=(AB)C$ without proving it (see the following proof). Fortunately, we have associativity. Let $A_1$ be an $n_1$ by $n_2$ matrix, $A_2$ be an $n_2$ by $n_3$ matrix, and $A_3$ be an $n_3$ by $n_4$ matrix. Then, we have


$$
A(BC)=(AB)C\qquad\textbf{associativity}
$$


It results in an $n_1$ by $n_4$ matrix.
**Proof of Associativity.**


Let $A=(a_{ij})$ be an $n_1\times n_2$ matrix, $B=(b_{ij})$ be an $n_2\times n_3$ matrix, and $C=(c_{ij})$ an $n_3\times n_4$ matrix. We compute the general terms of $A(BC)$ and $(AB)C$. For $A(BC)$, we have



$$
a_{i1}\sum_{k=1}^{n_3} b_{1k}c_{kj}+a_{i2}\sum_{k=1}^{n_3} b_{2k}c_{kj}+\cdots +a_{in_2}\sum_{k=1}^{n_3}b_{n_2k}c_{kj}=\sum_{l=1}^{n_2}a_{il}\sum_{k=1}^{n_3}b_{lk}c_{kj}=\sum_{l=1}^{n_2}\sum_{k=1}^{n_3}a_{il}b_{lk}c_{kj}.
$$


For $(AB)C$, we have


$$
c_{1j}\sum_{k=1}^{n_2}a_{ik}b_{k1}+c_{2j}\sum_{k=1}^{n_2}a_{ik}b_{k2}+\cdots+c_{n_3j}\sum_{k=1}^{n_2}a_{ik}b_{kn_3}=\sum_{l=1}^{n_3}c_{lj}\sum_{k=1}^{n_2}a_{ik}b_{kl}=\sum_{l=1}^{n_3}\sum_{k=1}^{n_2}a_{ik}b_{kl}c_{lj}.
$$


Note that the summation notations are essentially equivalent. By swapping the indices $l$ and $k$, we can see that they represent the same sum. Therefore, we can conclude that associativity holds.


---


Another important relationship involving multiplication and addition is distributivity (This proof is an exercise). Let $A$ be an $m$ by $n$, and $B$ and $C$ be $n$ by $k$ matrices. We have


$$
A(B+C)=AB+AC\qquad\textbf{distributivity}
$$


(Homework) Check the distributivity. 


## With vectors


Note that a column vector $\begin{bmatrix}
a_{1}\\\\
a_2\\\\
\vdots\\\\
a_n
\end{bmatrix}$can be through of as an $n$ by $1$ matrix, and similarly a row vector with $n$ component is just a $1$ by $n$ matrix. Therefore, we define a matrix multiplication with a column vector in a similar manner. Moreover, the inner product of two vectors $v$ times $u$ can be seen as a column vector (by writing $v$ vertically) multiplied with a row vector (by writing $u$ horizontally).


**Example**


Note that multiplying a matrix by a column vector results in a column vector. Similarly, multiplying a row vector by a matrix results in a row vector.


Now, probably, is a good time to introduce the _transpose_ of a matrix. Let $M$ be an $m$ by $n$ matrix. The transpose of $M$, denoted by $M^{\intercal}$, is an $n$ by $m$ matrix formed by swapping the entries $a_{ij}$ with $a_{ji}$.


**Example**


Consider a row vector $v=\begin{bmatrix}a_1 & a_2 &\cdots& a_n\end{bmatrix}$. Its transpose $v^\intercal$ is a column vector $v=\begin{bmatrix}a_1 \\\\ a_2\\\\\vdots\\\\ a_n\end{bmatrix}$. The product $vv^\intercal$ is the inner product of $v$ with itself:


$$
vv^\intercal=\begin{bmatrix}a_1 & a_2 &\cdots& a_n\end{bmatrix}\begin{bmatrix}a_1 \\\\ a_2 \\\\\vdots\\\\ a_n\end{bmatrix}=a_1^2+a_2^2+\cdots a_n^2=\|v\|^2
$$


This result is the square of the norm of $v$.


(In Homework 2) Prove that $(AB)^\intercal=B^\intercal A^\intercal$ for properly defined matrices $A$ and $B$.


## Linear equation system


Consider a linear equation system


$$
\begin{cases}
\begin{array}{rcl}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n &= &b_1\\\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n&=&b_2\\\\
\vdots&&\\\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n&=&b_m
\end{array}
\end{cases}
\quad\longleftrightarrow\quad
\left[\begin{array}{c c c c | c }
a_{11} & a_{12} & \cdots & a_{1n} & b_1\\\\
a_{21} & a_{22} & \cdots & a_{1n} & b_2\\\\
\vdots & \vdots & \ddots & \vdots & \vdots\\\\
a_{m1} & a_{m2} & \cdots & a_{mn} & b_m\\\\
\end{array}\right].
$$


We can express this system with matrix multiplication. Let 


$$
A=\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\\\
a_{21} & a_{22} & \cdots & a_{2n}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a_{m1} & a_{m2} & \cdots & a_{mn}\\\\
\end{bmatrix}
$$


be the coefficient matrix of the system, let $x=[x_1\\ x_2\\ \cdots \\ x_m]^\intercal$ be the unknonw vector, and let $b=[b_1\\ b_2\\ \cdots b_m]^\intercal$ be the right-hand side. Then, the _matrix form_ of the linear equation system is $Ax=b$. Indeed, we have


$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\\\
a_{21} & a_{22} & \cdots & a_{2n}\\\\
\vdots & \vdots & \ddots & \vdots\\\\
a_{m1} & a_{m2} & \cdots & a_{mn}\\\\
\end{bmatrix}
\begin{bmatrix}
x_1\\\\ x_2\\\\ \vdots\\\\ x_n
\end{bmatrix}=\begin{bmatrix}b_1\\\\b_2\\\\\vdots\\\\ b_m\end{bmatrix}\iff
\begin{bmatrix}
a_{11}x_1+ a_{12}x_2+ \cdots + a_{1n}x_n\\\\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n\\\\
\vdots\\\\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n\\\\
\end{bmatrix}
=\begin{bmatrix}b_1\\\\b_2\\\\\vdots\\\\ b_m\end{bmatrix}
$$


**Proposition**. If $A$ is invertible, then $Ax=b$ has a unique solution.


**proof.** It is obvious that $A^{-1}b$ is a solution. To prove uniqueness, let's suppose both $x$ and $x'$ are solutions of the equation. It follows $Ax=Ax'$ or $A(x-x')=0$. Since A is invertible, we can conclude that $x-x'=0$, or $x=x'$.

