---
id: 10dd3176-005d-8044-943e-dc865302f634
layout: post
date: 2024-09-26
title: MA2007B Linear Algebra I Lecture Note 5
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

## Elementary Matrices


Elementary matrices correspond to actions in Gaussian elimination. When we perform an "elementary" operation during Gaussian elimination, the matrix form changes accordingly. This change occurs through matrix multiplication. The matrices used for this multiplication are called _elementary matrices_. First, I'll use examples to illustrate what elementary matrices look like. Then, I'll use these observations to write general forms of elementary matrices. 


**Example.** Let's compare the evolution of matrix notation and the matrix form of a linear equation system during Gaussian elimination to illustrate this concept. We will consider the following equation system


$$
\begin{cases}
x+y+3z=1\\\\
-x+2y-4z=-3\\\\
2x+4y-z=2
\end{cases}
$$


**Matrix Notation**


$$
\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
-1 & 2 & -4 & -3\\\\
2 & 4 & -1 & 2
\end{array}
\right]
$$


**Matrix Notation**


$$
\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
-1 & 2 & -4 & -3\\\\
2 & 4 & -1 & 2
\end{array}
\right]
$$


**Matrix Form**


$$
\begin{bmatrix}
1 & 1 & 3\\\\
-1 & 2 & -4\\\\
2 & 4 & -1
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=\begin{bmatrix}
1\\\\-3\\\\2
\end{bmatrix}
$$


The first action will be to eliminate the $(2,1)-$entry using the first pivot. We add the first row directly to the second row, and this action is equivalent to multiply an elementary matrix, denoted by $E_1$, from the left to the matrix form. By observation, $E_1$ is


$$
E_1=\begin{bmatrix}
1 & 0 & 0\\\\
1 & 1 & 0\\\\
0 & 0 & 1
\end{bmatrix}.
$$


$$
\xrightarrow{(1)+(2)\to (2)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
2 & 4 & -1 & 2
\end{array}
\right]
$$


$$
\xrightarrow{(1)+(2)\to (2)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
2 & 4 & -1 & 2
\end{array}
\right]
$$


$$
\xRightarrow{E_1\times}E_1\begin{bmatrix}
1 & 1 & 3\\\\
-1 & 2 & -4\\\\
2 & 4 & -1
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E_1\begin{bmatrix}
1\\\\-3\\\\2
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 1& 3\\\\
0 & 3& -1\\\\
2 & 4& -1\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
1\\\\-2\\\\2\end{bmatrix}
$$


Again, we eliminate the $(3,1)-$entry using the first pivot. We subtract two times of the first row from the third row. The correspondent elementary matrix $E_2$ is


$$
E_2=\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & 0\\\\
-2 & 0 & 1
\end{bmatrix}
$$


$$
\xrightarrow{-2\times(1)+(3)\to (3)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
0 & 2 & -7 & 0
\end{array}
\right]
$$


$$
\xrightarrow{-2\times(1)+(3)\to (3)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
0 & 2 & -7 & 0
\end{array}
\right]
$$


$$
\xRightarrow{E_2\times}E_2\begin{bmatrix}
1 & 1 & 3\\\\
0 & 3 & -1\\\\
2 & 4 & -1
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E_2\begin{bmatrix}
1\\\\-2\\\\2
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 1& 3\\\\
0 & 3& -1\\\\
0 & 2& -7\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
1\\\\-2\\\\0\end{bmatrix}
$$


Now, the second pivot is the $(2,2)-$entry. We will eliminate the $(3,2)-$entry by subtract $\frac{2}{3}$ times the second row from the third row. The correspondent elementary matrix $E_3$ is


$$
E_3=\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & 0\\\\
0 & -\frac{2}{3} & 1
\end{bmatrix}
$$


$$
\xrightarrow{-\frac{2}{3}\times(2)+(3)\to (3)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
0 & 0 & \frac{19}{3} & \frac{4}{3}
\end{array}
\right]
$$


$$
\xrightarrow{-\frac{2}{3}\times(2)+(3)\to (3)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 3 & -1 & -2\\\\
0 & 0 & \frac{19}{3} & \frac{4}{3}
\end{array}
\right]
$$


$$
\xRightarrow{E_3\times}E_3\begin{bmatrix}
1 & 1 & 3\\\\
0 & 3 & -1\\\\
0 & 2 & -7
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E_3\begin{bmatrix}
1\\\\-2\\\\0
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 1& 3\\\\
0 & 3& -1\\\\
0 & 0& \frac{19}{3}\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
1\\\\-2\\\\\frac{4}{3}\end{bmatrix}
$$


Before we perform back substitution, we can first make the diagonal of the coefficient matrix 1 on every entry. The correspondent matrix is


$$
E=\begin{bmatrix}
1 & 0 & 0\\\\
0 & \frac{1}{3} & 0\\\\
0 & 0 & \frac{3}{19}
\end{bmatrix}=
\begin{bmatrix}
1 & 0 & 0\\\\
0 & \frac{1}{3} & 0\\\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & 0\\\\
0 & 0 & \frac{3}{19}
\end{bmatrix}=E_5E_4
$$


where the elementary matrices $E_4$ and $E_5$ is equivalent to multiplying the second row and third row, respectively, by constants.


$$
\xrightarrow{\substack{(2)/3\to (2)\\\\(3)\times\frac{19}{3}\to (3)}}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 1 & -\frac{1}{3} & -\frac{2}{3}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xrightarrow{\substack{(2)/3\to (2)\\\\(3)\times\frac{19}{3}\to (3)}}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 1 & -\frac{1}{3} & -\frac{2}{3}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xRightarrow{E\times}E\begin{bmatrix}
1 & 1 & 3\\\\
0 & 3 & -1\\\\
0 & 0 & \frac{19}{3}
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E\begin{bmatrix}
1\\\\-2\\\\\frac{4}{3}
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 1& 3\\\\
0 & 1& -\frac{1}{3}\\\\
0 & 0& 1\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
1\\\\-\frac{2}{3}\\\\\frac{4}{19}\end{bmatrix}
$$


Finally, we perform back substitution. The corresponding elementary matrix is similar to the one used for elimination, as back substitution is essentially reverse row elimination. This operation also involves multiplying one row by a constant and adding it to another row. Let


$$
E_6=\begin{bmatrix}
1 & 0 & 0\\\\
0 & 1 & \frac{1}{3}\\\\
0 & 0 & 1
\end{bmatrix}.
$$


We have


$$
\xrightarrow{\frac{1}{3}\times(3)+(2)\to (2)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xrightarrow{\frac{1}{3}\times(3)+(2)\to (2)}\left[
\begin{array}{ccc|c}
1 & 1 & 3& 1\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xRightarrow{E_6\times}E_6\begin{bmatrix}
1 & 1 & 3\\\\
0 & 1 & -\frac{1}{3}\\\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E_6\begin{bmatrix}
1\\\\-\frac{2}{3}\\\\\frac{4}{19}
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 1& 3\\\\
0 & 1& 0\\\\
0 & 0& 1\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
1\\\\-\frac{34}{57}\\\\\frac{4}{19}\end{bmatrix}
$$


We then take two final steps to eliminate the remaining entries.  We subtract three times the third row from the first row to eliminate $(1,3)-$entry. Similarly, we subtract the second row from the first row to eliminate $(1,2)-$entry. Their correspondent elementary matrices, $E_7$ and $E_8$, are


$$
E_7=\begin{bmatrix}
1 & 0 & -3\\\\
0 & 1 & 0\\\\
0 & 0 & 1
\end{bmatrix}\quad\text{and}\quad
E_8=\begin{bmatrix}
1 & -1 & 0\\\\
0 & 1 & 0\\\\
0 & 0 & 1
\end{bmatrix}
$$


$$
\xrightarrow{(1)-3\times(3)}\left[
\begin{array}{ccc|c}
1 & 1 & 0& \frac{7}{19}\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xrightarrow{(1)-3\times(3)}\left[
\begin{array}{ccc|c}
1 & 0 & 0& \frac{55}{57}\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xrightarrow{(1)-3\times(3)}\left[
\begin{array}{ccc|c}
1 & 1 & 0& \frac{7}{19}\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xrightarrow{(1)-3\times(3)}\left[
\begin{array}{ccc|c}
1 & 0 & 0& \frac{55}{57}\\\\
0 & 1 & 0 & -\frac{34}{57}\\\\
0 & 0 & 1 & \frac{4}{19}
\end{array}
\right]
$$


$$
\xRightarrow{E_8E_7\times}E_8E_7\begin{bmatrix}
1 & 1 & 3\\\\
0 & 1 & -\frac{1}{3}\\\\
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\\\ y \\\\z
\end{bmatrix}
=E_8E_7\begin{bmatrix}
1\\\\-\frac{2}{3}\\\\\frac{4}{19}
\end{bmatrix}
$$


$$
\Rightarrow\begin{bmatrix}
1 & 0& 0\\\\
0 & 1& 0\\\\
0 & 0& 1\end{bmatrix}
\begin{bmatrix}x\\\\y\\\\ z\end{bmatrix}=\begin{bmatrix}
\frac{55}{57}\\\\-\frac{34}{57}\\\\\frac{4}{19}\end{bmatrix}
$$


**Remark.**

1. This example demonstrates row elimination and row scaling. However, it lacks an illustration of row exchange—a crucial operation when encountering a zero pivot. We will showcase this operation in the subsequent example.
2. The most crucial difference between elimination $E_1$~$E_3$ and back-substitution $E_6$~$E_8$ is that the elementary matrices correspondent to elimination are lower triangular matrices, , while those for back-substitution are upper triangular matrices.
3. Let's denote the above actions in Gaussian elimination by $e_1,e_2,\ldots,e_8$. Then, on one hand, we have

	$$
	[A|b]\xrightarrow{e_1}[A_1|b_1]\xrightarrow{e_2}[A_2|b_2]\xrightarrow{e_3}\cdots\xrightarrow{e_8}[I|b_8],
	$$


	and on the other hand we have


	$$
	Ax=b\implies E_1Ax=E_1b\implies E_2E_1x=E_2E_1b\implies\cdots \implies E_8\cdots E_1A=E_8\cdots E_1b.
	$$


	Thus, this implies $E_8\cdots E_1A=I$, so $E_8\cdots E_1$ is the inverse of $A$. This give us a hint on how to find the inverse of a matrix using Gaussian elimination.

