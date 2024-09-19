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

