---
id: 112d3176-005d-8093-9ff4-f876f83647d0
layout: post
date: 2024-10-08
title: MA2007B Linear Algebra I Lecture Note 7
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [EMI,MA2007B,linear algebra,overview]
categories: [post]

---

## Decomposition


Matrix decomposition is a key focus area in linear algebra. The concept involves rewriting a matrix as a product of matrices, with the goal of improving computational efficiency. Gaussian elimination provides one method of matrix decomposition. While this particular decomposition may not offer significant computational advantages, it has paved the way for more advanced decomposition techniques.


Here's an example illustrating how decomposition can reduce arithmetic complexity. Consider an $n$ by $n$ matrix $M$. It requires at least $n^2$ many steps to find $M^2$. However, if we can write $M$ as $ADA^{-1}$ where $D$ is a diagonal matrix, then we have


$$
\begin{align*}
M^2&=(ADA^{-1})(ADA^{-1})\\\\
&=ADIDA^{-1}\\\\
&=AD^2A^{-1}.
\end{align*}
$$


Compare to $M^2$, $D^2$ only requires $n$ many steps to determine. This reduces the computation of power of $M$ dramatically.


### LU and LDU decomposition


> L: a lower triangular matrix  
> D: a diagonal matrix  
>   
> U: an upper triangular matrix


	D: a diagonal matrix


	U: an upper triangular matrix


As the name suggests, LU decomposition expresses a matrix as the product of a lower triangular matrix and an upper triangular matrix. LDU decomposition takes this a step further by isolating the row multiplication as a diagonal matrix between the lower and upper triangular matrices.
Let's begin with a squared matrix $A$ (LU decomposition doesn't reuqire $A$ to be square; this assumption merely simplifies our discussion). Regardless of whether $A$ is invertible or not, Gaussian elimination can always produce an upper triangular matrix $U$ from $A$. Assuming no row interchange is necessary to obtain the matrix $U$, we know that through the elimination $e_1,\ldots,e_n$ with correspondent elementary matrices $E_1,\ldots, E_n$ (all lower triangular), we have $E_{n}\cdots E_1A=U$. It follows that $A= E_1^{-1}\cdots E_n^{-1}U$. Now, we need several lemmas.
**Lemma.** The product of two lower (resp. upper) triangular matrices is still lower (resp. upper) triangular.
**proof.** Let $L_1$ and $L_2$ be a lower triangular matrix. We only need to show that every $(i,j)$-entry of $L_1L_2$ for $i<j$ is zero. The $(i,j)-$entry is the product of the $i$-th row vector of $L_1$, denoted by $v_1$, and the $j$-th column of $L_2$, denoted by $v_2$. Note that


$$
v_1=[\ast,\ldots,\ast,0,\ldots,0],
$$


where the first $i$ components can be any number, and


$$
v_2=\begin{bmatrix}0\\\\\vdots\\\\0\\\\\ast\\\\\vdots\\\\\ast\end{bmatrix},
$$


where the first $j$ components are zero. Therefore, because $j>i$, $v_2$ provides enough many $0$ to multiply with $*$ from $v_1$. Hence, we have $v_1v_2=*\cdot 0+\cdots+*\cdot 0+*\cdot0+\cdots+*\cdot0=0$. This is the desired result.


---


**Lemma.** The inverse matrix of a lower triangular matrix is lower triangular. Similarly, the inverse matrix of an upper triangular matrix is upper triangular.
**proof.** (see [https://math.stackexchange.com/questions/245871/the-inverse-of-a-lower-triangular-matrix-is-lower-triangular](https://math.stackexchange.com/questions/245871/the-inverse-of-a-lower-triangular-matrix-is-lower-triangular))


---


Thus, we can conclude that $E_1^{-1}\cdots E_n^{-1}$ is a lower triangular matrix $L$ through mathematical induction (to extend the first lemma's applicability to any number of matrix multiplication, we use mathematical induction). Consequently, we have $A=E^{-1}\cdots E_n^{-1}U=LU$. 
If the entries on the diagonal of $U$ are not $1$ or $0$, we can multiply by a diagonal matrix $D$ such that $DU=U'$ or $U=D^{-1}U'$ where $U'$ is of the desired form. Therefore, $A$ is $LD^{-1}U'$ is an LDU decomposition.
**Example.** Let's consider


$$
M=\begin{bmatrix}
1 & 2\\\\
3 & 4
\end{bmatrix}
$$


The elementary row operation $-3\times (1)+(2)\to (2)$ makes matrix become an upper triangular matrix. Its correspondent elementary $E$ matrix is $\begin{bmatrix}
1 & 0\\\\
-3 & 1
\end{bmatrix}$, so we have


$$
\begin{bmatrix}
1 & 0\\\\
-3 & 1
\end{bmatrix}\begin{bmatrix}
1 & 2\\\\
3 & 4
\end{bmatrix}=\begin{bmatrix}
1 & 2\\\\
0 & -2
\end{bmatrix}.
$$


The inverse of $E$ is $\begin{bmatrix}
1 & 0\\\\
3 & 1
\end{bmatrix}$, so we find $LU$ decomposition of $M$. That is


$$
\begin{bmatrix}
1 & 2\\\\
3 & 4
\end{bmatrix}=\begin{bmatrix}
1 & 0\\\\
3 & 1
\end{bmatrix}\begin{bmatrix}
1 & 2\\\\
0 & -2
\end{bmatrix}
$$


If we want the entries on the diagonal of the upper triangular matrix to be either $0$ or $1$, we can further decompose the upper triangular matrix as


$$
\begin{bmatrix}
1 & 2\\\\
0 & -2
\end{bmatrix}=\begin{bmatrix}
1 & 0\\\\
0 & -2
\end{bmatrix}\begin{bmatrix}
1 & 2\\\\
0 & 1
\end{bmatrix}.
$$


This demonstrates an LDU decomposition of the original matrix.

