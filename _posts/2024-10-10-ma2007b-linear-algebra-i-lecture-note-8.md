---
id: 119d3176-005d-80d2-88d1-ea893325829c
layout: post
date: 2024-10-10
title: MA2007B Linear Algebra I Lecture Note 8
subtitle: PA=LU and vector spaces
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

### PA=LU


If a permutation $P$ is necessary during the process of Gaussian elimination to obtain an upper triangular matrix, say


$$
E_n\cdots E_{i}PE_{i-1}\cdots E_1A=U,
$$


a strategy for decomposition is to move $P$ all the way to the right, adjacent to A. Let's examine a few examples to illustrate how the strategy can be implemented.


**Example.** One can check the followings are true:

1. $P_{23}E_{13}=E_{12}P_{23}$

	$$
	\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 0 & 1\\\\
	0 & 1 & 0
	\end{bmatrix}\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 1 & 0\\\\
	c & 0 & 1
	\end{bmatrix}=\begin{bmatrix}
	1 & 0 & 0\\\\
	c & 1 & 0\\\\
	0 & 0 & 1
	\end{bmatrix}\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 0 & 1\\\\
	0 & 1 & 0
	\end{bmatrix}
	$$

2. $P_{23}E_{12}=E_{13}P_{23}$

	$$
	\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 0 & 1\\\\
	0 & 1 & 0
	\end{bmatrix}\begin{bmatrix}
	1 & 0 & 0\\\\
	c & 1 & 0\\\\
	0 & 0 & 1
	\end{bmatrix}=\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 1 & 0\\\\
	c & 0 & 1
	\end{bmatrix}\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 0 & 1\\\\
	0 & 1 & 0
	\end{bmatrix}
	$$

3. $P_{13}E_{13}=E_{13}P_{13}$ (I didn't show this example in class)

	$$
	\begin{bmatrix}
	0 & 0 & 1\\\\
	0 & 1 & 0\\\\
	1 & 0 & 0
	\end{bmatrix}\begin{bmatrix}
	1 & 0 & 0\\\\
	0 & 1 & 0\\\\
	c & 0 & 1
	\end{bmatrix}=\begin{bmatrix}
	1 & 0 & c\\\\
	0 & 1 & 0\\\\
	0 & 0 & 1
	\end{bmatrix}\begin{bmatrix}
	0 & 0 & 1\\\\
	0 & 1 & 0\\\\
	1 & 0 & 0
	\end{bmatrix}
	$$


Observing these matrices, we note that as we swap them, the indices of the elimination elementary matrices change correspondingly. More precisely, the permutation matrix $P_{ij}$ not only switches the $i$-th row and the $j$-th row but also permutes the integers $i$ to $j$ and $j$ to $i$. In general, we have the following proposition. However, before starting the proposition, let's define some notations. Denote $(ij)$ as a function defined as


$$
(ij)i=j,\quad (ij)j=i,\text{ and }(ij)k=k
$$


if $k\neq i$ or $j$. These notation can be pushed further. For example, $(123)$ is a function that maps $1$ to $2$, $2$ to $3$, and $3$ to $1$ with all other integers remaining fixed.


**Proposition.** We have $P_{ij}E_{i'j'}=E_{kl}P_{ij}$ where $k=(ij)i^\prime$ and $l=(ij)j^\prime$.


**Remark.** In class, we imposed conditions on indices to focus on cases essential for PA=LU decomposition. However, the proposition holds true even without these constraints.


**Proof.** The proof of this proposition employs a comprehensive examination of the following cases:

- Case 1: $j^\prime=i$ and $i^\prime\neq j$
- Case 2: $j^\prime=j$ and $i^\prime\neq i$
- Case 3: $i^\prime=i$ and $j^\prime\neq j$
- Case 4: $i^\prime=j$ and $j^\prime\neq i$
- Case 5: $i^\prime=i$ and $j^\prime=j$
- Case 6: $i^\prime=j$ and $j^\prime=i$
- Case 7: Neither $i^\prime$ nor $j^\prime$ is equal to $i$ or $j$.

---


Cases 1, 2, and 7 are the most relevant for our purposes and are effectively demonstrated by the examples provided earlier, except Case 7 which can be easily verified.


This proposition allows us to move a permutation matrix to the other side of an elimination elementary matrix. Furthermore, in a Gaussian elimination process, an elimination elementary matrix satisfies $i^\prime>i$, $j$, and $j^\prime$, so $E_{kl}$, the elimination elementary matrix after swapping, remains a valid elimination elementary matrix.


### Summary


We can't foresee whether a matrix $A$ can be PA=LU or A=LU decomposed before we actually perform the Gaussian elimination process. The process of these two decomposition is essentially the same except the middle step:


**Step 1.** Perform the Gaussian elimination process, and record the elementary matrices in every step.


**Step 2.** Apply the proposition to shift all permutation matrices to the right, resulting in the following expression:


$$
E_n\cdots E_1 P_k\cdots P_1A=U.
$$


**Step 3.** Multiply both sides by the inverses of $E_n$ to $E_1$ to obtain


$$
PA= LU.
$$


**Example.** Find LU or PA=LU decomposition of the following matrix $A$


$$
A=\begin{bmatrix}
1 & 0 & -1\\\\
1 & 0 & -2\\\\
1 & 1 & 3
\end{bmatrix}.
$$


<u>sol)</u> The Gaussian elimination process is as the follows:


$$
\begin{align*}
A&\xrightarrow{-1\times(1)+(2)\to (2)}\begin{bmatrix}
1 & 0 & 0\\\\
-1 & 1 & 0\\\\
0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1\\\\
1 & 0 & -2\\\\
1 & 1 & 3
\end{bmatrix}=\begin{bmatrix}
1 & 0 & -1\\\\
0 & 0 & -1\\\\
1 & 1 & 3
\end{bmatrix}\text{(record the elementary matrix as }E_{12}\text{)}\\\\
&\xrightarrow{-1\times(1)+(3)\to(3)}\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & 0\\\\
-1 & 0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1\\\\
0 & 0 & -1\\\\
1 & 1 & 3
\end{bmatrix}=\begin{bmatrix}
1 & 0 & -1\\\\
0 & 0 & -1\\\\
0 & 1 & 4
\end{bmatrix}\text{(record as }E_{13}\text{)}\\\\
&\xrightarrow{(2)\leftrightarrow(3)}\begin{bmatrix}
1 & 0 & 0\\\\
0 & 0 & 1\\\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1\\\\
0 & 0 & -1\\\\
0 & 1 & 4
\end{bmatrix}=\begin{bmatrix}
1 & 0 & -1\\\\
0 & 1 & 4\\\\
0 & 0 & -1
\end{bmatrix}\text{(record as }P_{23}\text{)}\\\\
&\xrightarrow{-1\times(3)\to(3)}\begin{bmatrix}
1 & 0 & 0\\\\
0 & 0 & 0\\\\
0 & 0 & -1
\end{bmatrix}\begin{bmatrix}
1 & 0 & -1\\\\
0 & 1 & 4\\\\
0 & 0 & -1
\end{bmatrix}=\begin{bmatrix}
1 & 0 & -1\\\\
0 & 1 & 4\\\\
0 & 0 & 1
\end{bmatrix}\text{(record as }D_{3}\text{)}
\end{align*}
$$


Therefore, we have


$$
D_3P_{23}E_{13}E_{12}A=U
$$


where $U$ is the last matrix in the above Gaussian elimination process. Now, we move the permutation matrix to the right. We need


$$
P_{23}E_{13}=\begin{bmatrix}
1 & 0 & 0\\\\
1 & 1 & 0\\\\
0 & 0 & 1
\end{bmatrix}P_{23}\text{ (Denote the new matrix by }F_{12}\text{)}
$$


and 


$$
P_{23}E_{12}=\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & 0\\\\
1 & 0 & 0\end{bmatrix}P_{23}\text{ (Denote the new matrix by }F_{13}\text{)}.
$$


Thus, we get


$$
D_3P_{23}E_{13}E_{12}A=D_3F_{12}P_{23}E_{12}A=D_3F_{12}F_{13}P_{23}A=U.
$$


Consequently, the PA=LU decomposition of $A$ is


$$
P_{23}A=F^{-1}_{13}F^{-1}_{12}D_{3}^{-1}U
$$


where $F_{12}^{-1}=E_{12}$, $F^{-1}_{13}=E_{13}$, and $D_3^{-1}=\text{diag}(1,1,-1)$.


# Vector Space


When first introduced to vectors, we typically visualize them as arrows originating from the origin in a plane (two-dimensional space) or in space (three-dimensional space). This representation provides a vivid mental image of vectors. Vector operations, such as addition, can also be visualized—for instance, using the parallelogram law for vectors.


![](https://junwenwaynepeng.github.io/assets/img/posts/2024-10-15-01.png)


![](https://junwenwaynepeng.github.io/assets/img/posts/2024-10-15-02.png)


However, visualizing vector additions in higher-dimensional spaces is impractical. Nonetheless, we can easily represent a vector in higher dimensions algebraically. For example, the sum of two four-dimensional vectors $(a_1,a_2,a_3,a_4)$ and $(b_1,b_2,b_3,b_4)$ is simply the sum of their coordinates:


$$
(a_1,a_2,a_3,a_4)+(b_1,b_2,b_3,b_4)=(a_1+b_1,a_2+b_2,a_3+b_3,a_4+b_4)
$$


Even worse, we may encounter objects that share the same algebraic properties as vectors but don't resemble vectors at all.


For example, solutions to a linear system $Ax = 0 $ can be considered vectors. If $v_1$ and $v_2$ are two solutions of the system, then any linear combination $c_1v_1+c_2v_2$ (where $c_1$ and $c_2$ are scalars) is a solution to the system. This property can be demonstrated as follows:


$$
A(c_1v_1+c_2v_2)=A(c_1v_1)+A(c_2v_2)=c_1Av_1+c_2Av_2=0+0=0
$$


Here is an example of an object that doesn't resemble a typical vector but shares the properties mentioned above. Consider solutions to the differential equation $y^{\prime\prime}+2y^{\prime}-3y=0$. We have two solutions: $f_1(x)=e^x$ and $f_2(x)=e^{-3x}$ (you can verify this by plugging these functions into the differential equation for $y$). Moreover, any linear combination $c_1f_1+c_2f_2$ are a solution to the differential equation because we have


$$
\begin{align*}
&(c_1f_1+c_2f_2)^{\prime\prime}+2(c_1f_1+c_2f_2)^\prime-3(c_1f_1+c_2f_2)\\\\
=& c_1f_1^{\prime\prime}+f_2f_2^{\prime\prime}+2c_1f_1^\prime+2c_2f_2^\prime-3c_1f_1-3c_2f_2\\\\
=&c_1(f_1^{\prime\prime}+2f_1^\prime-3f_1)+c_2(f_2^{\prime\prime}+2f_2^\prime-3f_2)\\\\
=&0+0=0
\end{align*}
$$


Indeed, we see that a vector no longer resembles an arrow. This realization calls for an abstract, universal language to describe vectors.


# English booster

<details>
  <summary>parallelogram </summary>


平行四邊形



  </details><details>
  <summary>the origin</summary>


原點



  </details><details>
  <summary>coordinate</summary>


座標



  </details><details>
  <summary>differential</summary>


微分的



  </details><details>
  <summary>linear combination</summary>


線性組合



  </details>