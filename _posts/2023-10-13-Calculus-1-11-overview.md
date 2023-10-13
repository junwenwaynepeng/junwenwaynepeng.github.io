---
title: Roll's theorem, Mean Value Theorem, and the Shape of a Graph
subtitle: the beauty of mathematical thoery
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
data:
  -
    folder: question
    file: calculus1-ch4-proof
    id: mvt7
  -
    folder: question
    file: calculus1-ch4-proof
    id: mvt8
show-answer: true
expandable-answer: false
---

## Mean Value Theorem

### From Bolzano-Weierstrass to Roll's theorem

**Theorem(Bolzano-Weierstrass)** Let $\{x_n\}$ is a sequence in an closed interval $[a,b]$, then there exists a convergent subsequence of $\{x_n\}$.

**proof.** Let $a_0=a$ and $b_0=b$. We will recursively define $a_i$ and $b_i$. First, we consider two intervals $[a_0,\frac{a_0+b_0}{2}]$ and $[\frac{a_0+b_0}{2},b_0]$. Since $\{x_n\}$ has infinitely many terms, one of the intervals, denoted by $I=[a_1,b_1]$, contains infinitely many terms of the sequence. We then can find the smallest integer $n_1$ such that $x_{n_1}$ is in $I$. By iterating the above process, we will get three sequences $\{a_i\}$, $\{b_i\}$, and $\{x_{n_i}\}$, where $\{x_{n_i}\}$ is a subsequence of $\{x_n\}$. Note that $a_i\leq x_i\leq b_i$ and
$$\lim_{i\to\infty}a_i =\lim_{i\to\infty} b_i.$$
By the squeeze theorem, $\lim_{i}x_{n_i}$ exists.<div style="text-align: right;">∎</div>

**Theorem(Weierstrass's extreme value theorem)** If $f(x)$ is a continuous function on a closed interval $[a,b]$, then $f(x)$ attains its local extreme values on $[a,b]$.

**proof.** For the sake of contradiction, we suppose we cannot find a maximum of $f$ on $[a,b]$. It is equivalent to say, for any positive integer $n$, we can find an $x_n\in[a,b]$ such that $f(x_n)>n$. By Bolzano-Weierstrass's theorem, we have a convergent subsequence $\{x_{n_i}\}$ of $\{x_n\}$. Note that $f(x_{n_i})\geq n_i$, so $f(x_{n_i})\to\infty$ as $x_{n_i}\to x'$ for some $x'\in [a,b]$. This contradicts to the fact that $f(x)$ is continuous on $[a,b]$. Therefore, we must have a local maximum. Since $-f$ also satisfyies the assumption of this theorem, $-f$ has a local maximum in $[a,b]$, which implies $f$ has a local minimum in $[a,b]$.<div style="text-align: right;">∎</div>

**Theorem(Fermat)** If $f(x)$ is a continuous function on a closed interval with $f(c)$ an extreme values of $f$, and $f'(c)$ exists, then $f'(c)=0$.

**Theorem(Fermat's theorem in terms of critical points)** If $f(x)$ is a continuous function on a closed interval with $f(c)$ an extreme values of $f$, then $f$ is a critical points. In particular, $\\{x|f(x)\text{ is a local extreme}\\}\subseteq\\{x|x\text{ is a critical point of }f\\}$.

**proof.** Weierstrass's theorem implies that such a $c$ exists. Thus, we only need to show that $f'(c)=0$. We suppose it is a local maximum, i.e. $f(c)\geq f(x)$ for all $x$ near $c$. We then have
$$\frac{f(x)-f(c)}{x-c}\geq 0$$
when $x<c$ and $x$ is near $c$. Thus, $\displaystyle\lim_{x\to c^-}\frac{f(x)-f(c)}{x-c}\geq 0$. On the other hand, we have
$$\frac{f(x)-f(c)}{x-c}\leq 0$$
when $x>c$ and $x$ is near $c$. Thus, $\displaystyle\lim_{x\to c^+}\frac{f(x)-f(c)}{x-c}\leq 0$.
Since we assume $f'(c)$ exists, the left limit has to be equal to the right limit, and we conclude that $f'(c)=0$.<div style="text-align: right;">∎</div>

**Theorem(Roll)** Suppose $f(x)$ satisfies the following three hypotheses:
1. $f(x)$ is a continuous function on $[a,b]$.
2. $f'(x)$ exists on $(a,b)$.
3. $f(a)=f(b)$.
Then, there exists $c\in (a,b)$ such that $f'(c)=0$.

**proof.** Such a $c$ exists in $[a,b]$ by Fermat's theorem. We only need to show that $c$ is not $a$ or $b$. Suppose $f$ is a constant function, then we have $f'(x)=0$ at any point in $(a,b)$. Otherwise, $f(a)$ and $f(b)$ cannot be a globel maximum or minimum. Suppose it is not a globel maximum, then there exists $c\in(a,b)$ such that $f(c)$ is a local maximum and $f(c)>f(a)=f(b)$. Thus, we find a $c$ in the interial of $[a,b]$. Similar argument will work if we assume $f(a)$ and $f(b)$ is not a globle minimum.<div style="text-align: right;">∎</div>

**Theorem(Mean value theorem)** If $f(x)$ is continuous on $[a,b]$ and is differentiable on $(a,b)$, then there exists $c\in(a,b)$ such that 
$$f'(c)=\frac{f(a)-f(b)}{a-b}$$.

**proof.** Let $g(x)=f(x)-f(a)-\frac{f(b)-f(a)}{b-a}(x-a)$. We note that $g(a)=g(b)=0$. By Roll's theorem, there exists $c\in(a,b)$ such that $g'(c)=0$. Furthermore, $g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a}$, so $g'(c)=0$ implies $f'(x)=\frac{f(b)-f(a)}{b-a}$.<div style="text-align: right;">∎</div>

These theorems exemplify the elegance of mathematics. In a cohesive progression, we observe the relationships among these fundamental statements:
$$
\begin{equation}
  \begin{array}{c}
    \text{Bolzano-Weierstrass theorem}\\\\
    \Downarrow\\\\
    \text{Weierestrass's extreme value theorem}\\\\
    \Downarrow\\\\
    \text{Fermat's theorem}\\\\
    \Downarrow\\\\
    \text{Roll's theorem}\\\\
    \Downarrow\\\\
    \text{Mean value theorem}
  \end{array}
\end{equation}
$$

### Stratgy of using MVT

Many applications of the mean value theorem (MVT) employ a strategy similar to the one used in proving MVT itself. This strategy typically involves defining a second function, denoted as $h(x)$, which incorporates the function of interest, $f(x)$, along with other variables. Subsequently, MVT is applied to $h(x)$ to derive the desired outcome for $f(x). To illustrate this concept, let's delve into the following example.

**Example.** Show the following statement: <div id='question-question-calculus1-ch4-proof-mvt7'></div>

**proof.** <div id='answer-question-calculus1-ch4-proof-mvt7'></div></p><div style="text-align: right;">∎</div>

<p style="color:red">Of course, the approach outlined above is not the sole way to utilize the Mean Value Theorem. Another valuable application of this theorem is to directly derive useful inequalities.

**Example.** <div id='question-question-calculus1-ch4-proof-mvt8'></div>

**proof.** <div id='answer-question-calculus1-ch4-proof-mvt8'></div><div style="text-align: right;">∎</div>

## What does derivatives tell us about the graph of a function

### The first derivative

**Definition.** A real function $f$ defined on an interval $I$ is characterized as follows:
- If for any $x_1$ and $x_2$ in $I$ where $x_1 < x_2$, it holds that $f(x_1) \leq f(x_2)$, then $f$ is referred to as an increasing function.
- If for any $x_1$ and $x_2$ in $I$ where $x_1 < x_2$, it holds that $f(x_1) \geq f(x_2)$, then $f$ is described as a decreasing function.
- In the case that $f(x_1) < f(x_2)$ ($f(x_2) > f(x_2)$), where $x_1$ and $x_2$ are in $I$ and $x_1 < x_2$, then $f$ is classified as strictly increasing (decreasing).

The determination of whether a function is increasing or decreasing can be made through the use of the first derivative.

**Theorem.** A differentiable function $f$ defined on an open interval $I$ satisfies $f'(x) > 0$ for all $x$ in $I$ if and only if $f$ is increasing on $I$.

#### Increasing <=> slopes are positive
<div class='compute'>
exp = plot(e^x+100,x,5,10)
l1 = plot(e^7*(x-7)+e^7+100,x,6,8,color='red')
l2 = plot(e^8*(x-8)+e^8+100,x,7,9,color='red')
l3 = plot(e^9*(x-9)+e^9+100,x,8,10,color='red')
(exp+l1+l2+l3).show()
</div>

#### Decreasing <=> slopes are negative 
<div class='compute'>
exp = plot(-(e^x+100),x,5,10)
l1 = plot(-e^7*(x-7)-(e^7+100),x,6,8,color='red')
l2 = plot(-e^8*(x-8)-(e^8+100),x,7,9,color='red')
l3 = plot(-e^9*(x-9)-(e^9+100),x,8,10,color='red')
(exp+l1+l2+l3).show()
</div>

**The first derivative test.** Suppose $f$ is a differentiable function defined on an open interval $I$, and let $c$ belong to $I$.
1. If $f'(x) < 0$ for $x < c$ in the vicinity of $c$ and $f'(x) > 0$ for $x > c$ in the vicinity of $c$, then $f(c)$ represents a local minimum value.
2. If $f'(x) > 0$ for $x < c$ in the vicinity of $c$ and $f'(x) < 0$ for $x > c$ in the vicinity of $c`, then $f(c)$ represents a local maximum value.

Note that the point $c$ in the above test is a critical point of $f$, meaning $f'(c) = 0$.

### The second derivative

**Definition.** If $f$ is twice differentiable, the second derivative tells us about the concavity of the graph. Specifically:
- If $f''(x) > 0$, the graph is concave upward (convex) at $x$.
- If $f''(x) < 0$, the graph is concave down(concave) at $x$.

**Second Derivative Test.** Let $f$ be a twice-differentiable function on an open interval $I$ with a critical point at $c$.
1. If $f'(c) = 0$ and $f''(c) > 0$, then $f(c)$ is a local minimum value.
2. If $f'(c) = 0$ and $f''(c) < 0$, then $f(c)$ is a local maximum value.

The Second Derivative Test offers a convenient way to determine the concavity of the graph at a critical point and can help identify local extrema with ease. However, it might be inconclusive for some cases, such as functions like $f(x) = x^4$. In such scenarios, we have to revert to using the First Derivative Test to make a definitive determination regarding local extrema.

#### Convex <=> slope is increasing
<div class='compute'>
f(x)=x^2+1
@interact
def _(n=(5,[3,4,5,6,7,8,9,10])):
    P=plot(f,(x,-1,1))
    fprime=derivative(f,x)
    points = [-1+2*(k)/n for k in range(n+1)]
    tangent_lines = [plot(fprime(c)*(x-c)+f(c),x,c-0.5,c+0.5,color="red") for c in points]
    show(P+sum(tangent_lines))
</div>

#### Concave <=> slope is decreasing
<div class='compute'>
f(x)=-(x^2+1)
@interact
def _(n=(5,[3,4,5,6,7,8,9,10])):
    P=plot(f,(x,-1,1))
    fprime=derivative(f,x)
    points = [-1+2*(k)/n for k in range(n+1)]
    tangent_lines = [plot(fprime(c)*(x-c)+f(c),x,c-0.5,c+0.5,color="red") for c in points]
    show(P+sum(tangent_lines))
</div>
