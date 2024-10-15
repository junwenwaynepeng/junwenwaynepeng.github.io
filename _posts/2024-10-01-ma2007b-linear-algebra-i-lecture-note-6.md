---
id: 111d3176-005d-80df-be6f-d030d4dad4b6
layout: post
date: 2024-10-01
title: MA2007B Linear Algebra I Lecture Note 6
subtitle: Elementary matrices and inverse of a matrix
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


| Elementary operation                                                         | Description                                                                                               | Elementary matrix                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Inverse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  Row adding(Elimination, back substitution)$c\times (i)\times + (j)\to (j) $ | Subtract $-c$ times the $i$-th row from the $j$-th row; or add $c$ times the $i$-th row to the $j$-th row | **Elimination:** for $i<j$, $E_{ij}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & c & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0&\cdots&1\end{array}\right]\begin{array}{c}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$**Back substituion:** for $i>j$, $E_{ij}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & c & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$ | For $i<j$, $E_{ij}^{-1}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & -c & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0&\cdots&1\end{array}\right]\begin{array}{c}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$$\text{for }i>j,\text{ }E_{ij}^{-1}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & -c & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$ |
| Row interchange(exchange, switching) $(i)\leftrightarrow(j)$                 | Swap the i-th row with the j-th row                                                                       | $P_{ij}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | $P_{ij}=\left[\begin{array}{ccccccc}1 & \cdots & 0 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 1 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots&\ddots & \vdots\\\\0 & \cdots & 0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\ \leftarrow j-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Row multiplication $c\times (i)\to(i)$                                       | multiply a row by a constant $c$                                                                          | $D_i=\left[\begin{array}{ccccc}1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots\\\\0 & \cdots & c & \cdots & 0 \\\\\vdots & \ddots & \vdots & \ddots &\vdots\\\\0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | $D_i=\left[\begin{array}{ccccc}1 & \cdots & 0 & \cdots & 0\\\\\vdots & \ddots & \vdots & \ddots &\vdots\\\\0 & \cdots & c^{-1} & \cdots & 0 \\\\\vdots & \ddots & \vdots & \ddots &\vdots\\\\0 & \cdots & 0 & \cdots & 1\end{array}\right]\begin{array}{c} \\\\ \\\\ \leftarrow i-\text{th row}\\\\ \\\\\end{array}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

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

	$$
	\left[\begin{array}{ccc|ccc}
	2 & 4 &-2 & 1 &0 & 0\\\\
	4 & 7 & -3 & 0 & 1 & 0\\\\
	-1 & 3 & -1 & 0 & 0 & 1
	\end{array}\right]
	$$


	$$
	\xrightarrow{\substack{-2\times(1)+(2)\\\\(1)+(3)\to(3)}}\left[\begin{array}{ccc|ccc}
	2 & 4 &-2 & 1 &0 & 0\\\\
	0 & -1 & 1 & -2 & 1 & 0\\\\
	0 & 5 & -2 & \frac{1}{2} & 0 & 1
	\end{array}\right]
	$$


	$$
	\xrightarrow{5\times(2)+(3)\to(3)}\left[\begin{array}{ccc|ccc}
	2 & 4 &-2 & 1 &0 & 0\\\\
	0 & -1 & 1 & -2 & 1 & 0\\\\
	0 & 0 & 3 & \frac{-19}{2} & 5 & 1
	\end{array}\right]
	$$


	$$
	\xrightarrow{\substack{\frac{1}{2}(1)\to(1)\\\\-(2)\to(2)\\\\\frac{1}{3}(3)\to(3)}}\left[\begin{array}{ccc|ccc}
	1 & 2 &-1 & \frac{1}{2} &0 & 0\\\\
	0 & 1 & -1 & 2 & -1 & 0\\\\
	0 & 0 & 1 & \frac{-19}{6} & \frac{5}{3} & \frac{1}{3}
	\end{array}\right]
	$$


	$$
	\xrightarrow{\substack{(3)+(2)\to(2)\\\\(3)+(1)\to(1)}}\left[\begin{array}{ccc|ccc}
	1 & 2 & 0 & \frac{-8}{3} &\frac{5}{3} & \frac{1}{3}\\\\
	0 & 1 & 0 & \frac{-7}{6} & \frac{2}{3} & \frac{1}{3}\\\\
	0 & 0 & 1 & \frac{-19}{6} & \frac{5}{3} & \frac{1}{3}
	\end{array}\right]
	$$


	$$
	\xrightarrow{-2(2)+(1)\to(1)}\left[\begin{array}{ccc|ccc}
	1 & 0 & 0 & \frac{-1}{3} &\frac{1}{3} & \frac{-1}{3}\\\\
	0 & 1 & 0 & \frac{-7}{6} & \frac{2}{3} & \frac{1}{3}\\\\
	0 & 0 & 1 & \frac{-19}{6} & \frac{5}{3} & \frac{1}{3}
	\end{array}\right]
	$$


	Therefore, we can conclude that the matrix is invertible, and the inverse is


	$$
	\begin{bmatrix}
	\frac{-1}{3} &\frac{1}{3} & \frac{-1}{3}\\\\
	\frac{-7}{6} & \frac{2}{3} & \frac{1}{3}\\\\
	\frac{-19}{6} & \frac{5}{3} & \frac{1}{3}
	\end{bmatrix}.
	$$

2. $\begin{bmatrix}
1 & -1 & 1\\\\
-3 & 1 & 4\\\\
-1 & -1 & 6
\end{bmatrix}$

	This example illustrates the situation when the given matrix is not invertible.


	$$
	\left[\begin{array}{ccc|ccc}
	1 & -1 & 1 & 1 &0 & 0\\\\
	-3 & 1 & 4 & 0 & 1 & 0\\\\
	-1 & -1 & 6 & 0 & 0 & 1
	\end{array}\right]
	$$


	$$
	\xrightarrow{\substack{3(1)+(2)\to(2)\\\\(1)+(3)\to(3)}}\left[\begin{array}{ccc|ccc}
	1 & -1 & 1 & 1 &0 & 0\\\\
	0 & -2 & 7 & 3 & 1 & 0\\\\
	0 & -2 & 7 & 1 & 0 & 1
	\end{array}\right]
	$$


	$$
	\xrightarrow{-(2)+(3)\to(3)}\left[\begin{array}{ccc|ccc}
	1 & -1 & 1 & 1 &0 & 0\\\\
	0 & -2 & 7 & 3 & 1 & 0\\\\
	0 & 0 & 0 & -2 & -1 & 1
	\end{array}\right]
	$$


	If we find a row with zeros in every position, we can immediately conclude that the given matrix is not invertible. However, regardless of whether the given matrix $A$ is invertible or not, Gaussian elimination can always reduce the matrix notation $[A|I]$ to a matrix notation of the form $[U|L]$ where $U$ is an upper triangular matrix and $L$ is a lower triangular matrix. This highlights the possibility of writing every matrix as a product of an upper triangular matrix and a lower triangular matrix.

