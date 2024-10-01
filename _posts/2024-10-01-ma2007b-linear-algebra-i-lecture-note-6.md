---
id: 111d3176-005d-80df-be6f-d030d4dad4b6
layout: post
date: 2024-10-01
title: MA2007B Linear Algebra I Lecture Note 6
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

**Example.** Let's consider a linear equation system that requires a row interchange.


$$
\begin{array}{c|c}
\substack{\left[\begin{array}{ccc|c}
1 & 0 & 1 & 2\\\\
0 & 0 & 3 & 4\\\\
0 & 1 & 2 & 3
\end{array}\right]\\\\
\xrightarrow{(2)\leftrightarrow(3)}
\left[\begin{array}{ccc|c}
1 & 0 & 1 & 2\\\\
0 & 1 & 2 & 3\\\\
0 & 0 & 3 & 4
\end{array}\right]} &
\substack{\begin{bmatrix}
1 & 0 & 1\\\\
0 & 0 & 3\\\\
0 & 1 & 2
\end{bmatrix}\begin{bmatrix}
x \\\\ y \\\\ z
\end{bmatrix}=\begin{bmatrix}
2 \\\\ 3 \\\\ 4
\end{bmatrix}\\\\
\implies\begin{bmatrix}
1 & 0 & 0\\\\
0 & 0 & 1\\\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
1 & 0 & 1\\\\
0 & 0 & 3\\\\
0 & 1 & 2
\end{bmatrix}\begin{bmatrix}
x \\\\ y \\\\ z
\end{bmatrix}=\begin{bmatrix}
1 & 0 & 0\\\\
0 & 0 & 1\\\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
2 \\\\ 3 \\\\ 4
\end{bmatrix}\\\\\implies\begin{bmatrix}
1 & 0 & 1\\\\
0 & 1 & 2\\\\
0 & 0 & 3
\end{bmatrix}\begin{bmatrix}
x \\\\ y \\\\ z
\end{bmatrix}=\begin{bmatrix}
2 \\\\ 4 \\\\ 3
\end{bmatrix}
}
\end{array}
$$


The example demonstrates that multiplying a matrix by the identity matrix with its second and third rows interchanged is equivalent to swapping the second and third rows of the original matrix. This operation is equivalent to perform a row interchange.


### Summary


Let's summarize our observations from the above examples in the table below.


| Elementary operation                                                          | Description                                                                                               | Elementary matrix                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  Row adding(Elimination, back substitution)
$c\times (i)\times + (j)\to (j) $ | Subtract $-c$ times the $i$-th row from the $j$-th row; or add $c$ times the $i$-th row to the $j$-th row | **Elimination:** for $i<j$,
$E_{ij}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & c & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$**Back substituion:** for $i>j,$
$E_{ij}=\left[\begin{array}{ccccccc}
1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & c & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$ |
| Row interchange(exchange, switching)
$(i)\leftrightarrow(j)$                  | Swap the i-th row with the j-th row                                                                       | $P_{ij}=\left[\begin{array}{ccccccc}
1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\
\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\
0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\
\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\
0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\
\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\
0 & \cdots & 0 & \cdots & 0 & \cdots & 1
\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Row multiplication
$c\times (i)\to(i)$                                        | multiply a row by a constant $c$                                                                          | $D_i=\left[\begin{array}{ccccc}
1 & \cdots & 0 & \cdots & 0\\\\
\vdots & \ddots & \vdots & \ddots &\vdots\\\\
0 & \cdots & c & \cdots & 0 \\\\
\vdots & \ddots & \vdots & \ddots &\vdots\\\\
0 & \cdots & 0 & \cdots & 1
\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

undefined
# Advanced application of Gaussian elimination


## Find inverse matrix


As mentioned in an example from Lecture Note 5, we can use Gaussian elimination to compute the inverse of an invertible matrix. Suppose the original matrix is $A$. Through a series of elementary operations $e_1,e_2,\ldots,e_n$ with corresponding elementary matrices $E_1, E_2,\ldots,E_n$, we arrive at $E_n\cdots E_1A=I$ where $E_n\cdots E_1$ is the inverse of $A$. Thus, if we start from the matrix notation $[A|I]$ and perform these row operations, we reach $[I|A^{-1}]$. Indeed, we have


$$
[A|I]\xrightarrow{e_1}[E_1A|E_1]\xrightarrow{e_2}[E_2E_1A|E_2E_1]\rightarrow\cdots\xrightarrow{e_n}[E_n\cdots E_1A|E_n\cdots E_1]=[I|A^{-1}].
$$


The above argument also proves that if $Ax=b$ has a unique solution, then $A$ is invertible.


**Theorem.** $Ax=b$ has a unique solution if and only if $A$ is invertible.
**Remark.** By the end of this semester, we aim to expand this theorem into several equivalent statements.


**Example.** Determine whether if the following matrices are invertible, and so, find its inverse.

1. $\begin{bmatrix}
2 & 4 &-2\\\\
4 & 7 & -3\\\\
-1 & 3 & -1
\end{bmatrix}$
2. $\begin{bmatrix}
1 & -1 & 1\\\\
-3 & 1 & 4\\\\
1 & -1 & 6
\end{bmatrix}$

## Decomposition


Matrix decomposition is a key focus area in linear algebra. The concept involves rewriting a matrix as a product of matrices, with the goal of improving computational efficiency. Gaussian elimination provides one method of matrix decomposition. While this particular decomposition may not offer significant computational advantages, it has paved the way for more advanced decomposition techniques.


### LU and LDU decomposition


As the name suggests, LU decomposition expresses a matrix as the product of a lower triangular matrix and an upper triangular matrix. LDU decomposition takes this a step further by isolating the row multiplication as a diagonal matrix between the lower and upper triangular matrices.
Let's begin with a squared matrix $A$. Regardless of whether $A$ is invertible or not, Gaussian elimination can always produce an upper triangular matrix $U$ from $A$. Assuming no row interchange is necessary to obtain the matrix $U$, we know that through the elimination $e_1,\ldots,e_n$ with correspondent elementary matrices $E_1,\ldots, E_n$ (all lower triangular), we have $E_{n}\cdots E_1A=U$. It follows that $A= E_1^{-1}\cdots E_n^{-1}U$. Now, we need several lemmas.
**Lemma.** The product of two lower (resp. upper) triangular matrices is still lower (resp. upper) triangular.
**proof.**


---


**Lemma.** The inverse matrix of a lower triangular matrix is lower triangular. Similarly, the inverse matrix of an upper triangular matrix is upper triangular.
**proof.**


---


Thus, we can conclude that $E_1^{-1}\cdots E_n^{-1}$ is a lower triangular matrix through mathematical induction. That means that $A$ can be rewrite as a product of an upper triangular and a lower triangular matrix. 
If the entries on the diagonal of $U$ are not $1$ or $0$, we can multiply by a diagonal matrix $D$ such that $DU=U'$ or $U=D^{-1}U'$ where $U'$ is of the desired form. Therefore, $A$ is $E_1^{-1}\cdots E_n^{-1}D^{-1}U'$ is an LDU decomposition.
**Example.**


### PA=LU


If a permutation $A$ is necessary during the process of Gaussian elimination to obtain an upper triangular matrix, the following lemma guarantees that we can first process the permutation.


**Lemma.** $P_{ij}^2=I$.


**Lemma.** We have $E_{ij}P_{i'j'}=P_{i'j'}E_{(i'j')i(i'j')j}$.


**Theorem.** $PA=LU$.


**proof.** Use induction.

