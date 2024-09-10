---
id: 8e5f524e-456c-4e39-a1fc-4e8d6c4a1990
layout: post
date: 2024-09-10
title: MA2007B Linear Algebra I - Lecture Note 1
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: [linear algebra,MA2007B,overview]
categories: [post]

---

# Introduction of Linear Algebra


This class may be one of your first mathematics courses that bridges the gap between the mainly computational-oriented high school math and the abstract math encountered in more advanced mathematics courses. The goals of this class are threefold:

1. You will learn linear algebra, which is one of the most widely used mathematical frameworks. From multivariable calculus to differential equations, from pure abstract concepts to AI, quantum information, and data science, you can see the influence of linear algebra everywhere.
2. You will develop computational skills and coding abilities (e.g., using SageMath (Python) or MATLAB) to calculate solutions of linear equation systems, find eigenvalues and eigenvectors of linear transformations, and perform matrix decomposition.
3. In the setting (axioms) of linear algebra, you will be introduced to abstraction. We will develop the theory of linear algebra together, and you will learn to write proofs.

## What is Linear Algebra?


Linear Algebra is a branch of mathematics that focuses on finding solutions to systems of linear equations. While it began with this aim, the introduction of linear transformations has expanded its scope. Today, Linear Algebra serves as a powerful tool that goes beyond just solving equation systems. However, our exploration of the subject will still begin with its original motivation.


**Example (has a unique solution)** The system of linear equations


$$
\begin{cases}
x_1+x_2=3\\\\
x_1-2x_2=-3
\end{cases}
$$


has a unique solution. We can use elimination or determinant to solve this system.


(_Elimination_) We subtract the second equation from the first to eliminate x₁. This yields


$$
\begin{cases}
x_1+x_3=3\\\\
-3x_2=-6
\end{cases}
$$


which we can easily see that the solution is $x_1=1$ and 2.


(_Determinant_) The solution $x_2=2$ depends completely on those six numbers in the equations. There must be a formula for $x_2$ (and also $x_1$). It is a ``ratio of determinants'' and I hope you will allow me to write it down directly:


 


$$
x_2=\frac{\left|\begin{matrix}1 & 3\\ 1 & -3\end{matrix}\right|}{\left|\begin{matrix} 1 & 1\\ 1 & -2\end{matrix}\right|} = 2
$$


(In Homework 1) Prove that if the determinant of the coefficient matrix for the system of linear equations


$$
\begin{cases}
ax+by=k\\\\
cx+dy=l
\end{cases}
$$


is non-zero, then this system has a solution.


**Example (has more than one solution)** The system of linear equations


$$
\begin{cases}
x_1+x_2=3\\\\
-2x_1-2x_2=-6
\end{cases}
$$


has infinitely many solutions. This is because when we add $2$ times the first equation to the second equation, we get $0 = 0$. This means we effectively have only one equation: $x₁ + x₂ = 3$. Therefore, if we let $x_1 = t$ and $x_2 = 3 - t$, where $t$ is any real number, we obtain a solution to the system. Consequently, the system has infinitely many solutions.


(Homework 2) Prove that if a system of two linear equations with two unknowns has more than one solution, it must have infinitely many solutions.


**Example (has no solution)** The system of equations


$$
\begin{cases}
x_1+x_2=3\\\\
-2x_1-2x_2=-3
\end{cases}
$$


has no solutions. This is because when we add the first equation to the second equation twice, we get $0=3$, which is never true.


**Remark.** 

1. Let's consider n equations in m unknowns:

	$$
	\begin{cases}
	\begin{array}{rcl}
	a_{11}x_1+a_{12}x_2+\cdots+a_{1m}x_m &= &b_1\\\\
	a_{21}x_1+a_{22}x_2+\cdots+a_{2m}x_m&=&b_2\\\\
	\vdots&&\\\\
	a_{n1}x_1+a_{n2}x_2+\cdots+a_{nm}x_m&=&b_n
	\end{array}
	\end{cases}
	$$


	The three examples above cover all possible scenarios regarding the solutions to this system of linear equations.

2. Existence and uniqueness are fundamental properties we'll continually explore in mathematics courses. You'll encounter many such statements in your future studies.
3. When comparing elimination and determinant methods, Gaussian Elimination is generally the superior approach.

---


# English Booster

<details>
  <summary>unknowns and variables</summary>


未知數與變數



  </details><details>
  <summary>systems of linear equations</summary>


線性聯立方程
People also use: linear equation system



  </details><details>
  <summary>linear algebra</summary>


線性代數



  </details><details>
  <summary>add</summary>


加



  </details><details>
  <summary>subtract or minus</summary>


減



  </details><details>
  <summary>multiply or time</summary>


乘



  </details><details>
  <summary>divide</summary>


除



  </details><details>
  <summary>numerator and denominator</summary>


分子和分母



  </details><details>
  <summary>curly brace</summary>


花括弧



  </details><details>
  <summary>infinite</summary>


無限，無窮



  </details><details>
  <summary>determinant</summary>


行列式



  </details><details>
  <summary>Gaussian elimination</summary>


高斯消去法



  </details><details>
  <summary>abstract and abstraction</summary>


抽象的 與 抽象法
ps: the suffix “-tion” is used to form nouns from verbs or stems that aren't nouns. It is usually used to describe a method



  </details>