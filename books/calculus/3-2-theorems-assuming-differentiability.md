---
layout: page
title: Theorems Assuming Differentiability
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-1-how-to-do-derivatives
next_page: 3-3-application-of-differentiation
show-answer: true
expandable-answer: false
---

# Theorems Assuming Differentiablility

## Fermat's Theorem
**Theorem(Fermat)** If $f(x)$ is a continuous function on a closed interval with $f(c)$ an extreme values of $f$, and $f'(c)$ exists, then $f'(c)=0$.

## Critical Points
Fermat's theorem shows that if $x$ is an extreme value of $f$, then either $f'(x)$ doesn't exist or $f'(x) = 0$. Therefore, we naturally define a *critical point* of $f$ as a point where the derivative either doesn't exist or is equal to $0$.

**Example.** The derivative of $y=x^{1/3}-x^{5/3}$ is $\frac{1}{3}x^{-2/3}-\frac{5}{3}x^{2/3}$. Since $(0,0)$ is defined on the curve and $f'(0)$ doesn't defined at $x=0$, $(0,0)$ is a critical point of $y=x^{1/3}-x^{5/3}$. By setting the derivative equal to zero, the other two real critical points are $\pm\left(\frac{1}{5}\right)^{3/4}$.

## Roll's Theorem
**Theorem(Roll)** Suppose $f(x)$ satisfies the following three hypotheses:
1. $f(x)$ is a continuous function on $[a,b]$.
2. $f'(x)$ exists on $(a,b)$.
3. $f(a)=f(b)$.
Then, there exists $c\in (a,b)$ such that $f'(c)=0$.


## The Mean Value Theorem
**Theorem(Mean value theorem)** If $f(x)$ is continuous on $[a,b]$ and is differentiable on $(a,b)$, then there exists $c\in(a,b)$ such that 
$$f'(c)=\frac{f(a)-f(b)}{a-b}$$.

**proof.** Let $g(x)=f(x)-f(a)-\frac{f(b)-f(a)}{b-a}(x-a)$. We note that $g(a)=g(b)=0$. By Roll's theorem, there exists $c\in(a,b)$ such that $g'(c)=0$. Furthermore, $g'(x)=f'(x)-\frac{f(b)-f(a)}{b-a}$, so $g'(c)=0$ implies $f'(x)=\frac{f(b)-f(a)}{b-a}$.<div style="text-align: right;">∎</div>

Many applications of Roll's theorem employ a strategy similar to the one used in proving the mean value theorem. This strategy typically involves defining a second function, denoted as $h(x)$, which incorporates the function of interest, $f(x)$, along with other variables. Subsequently, MVT is applied to $h(x)$ to derive the desired outcome for $f(x)$. To illustrate this concept, let's delve into the following example.

**Example.** Show the following statement: if $f(x)$ is differentiable and $f'(x)\neq 1$ for all real numbers $x$, then $f$ has at most one fixed point.

**proof.** We need to show that if $f$ has fixed points, then $f$ has at most one fixed point. Let $g(x)=f(x)-x$ where $g$ is also continuous and differentiable due to its construction. Then, it is equivalent to show that $g(x)=0$ has at most one solution. If there exists two solutions $a$ and $b$, then there exists a $c$ between $a$ and $b$ such that $g'(c)=0$ by mean value theorem. However, $g'(c)=0$ implies $f'(c)=1$, which contradicts to the assumption. Thus, we can conclude that $f(x)$ has at most one fixed point.<div style="text-align: right;">∎</div>

<p style="color:red">Of course, the approach outlined above is not the sole way to utilize the Mean Value Theorem. Another valuable application of this theorem is to directly derive useful inequalities.

**Example.** Let $0<a<b$. Show that $\dfrac{b-a}{b}<\ln\dfrac{b}{a}<\dfrac{b-a}{a}.$

**proof.** Consider the function $f(x)=\ln(x)$ which is continuous and differentiable on $(0,\infty)$. By the mean value theorem, there exists a real number $c$ with $a<c<b$ such that
$$
\ln\left(\frac{b}{a}\right)=\ln(b)-\ln(a)=\frac{1}{c}(b-a).
$$
Note that $a<c<b$ implies $\frac{1}{a}>\frac{1}{c}>\frac{1}{b}$. Putting everything together, we have the desired conclusion.<div style="text-align: right;">∎</div>