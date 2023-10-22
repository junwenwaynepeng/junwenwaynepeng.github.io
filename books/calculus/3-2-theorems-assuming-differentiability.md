---
layout: page
title: Theorems Assuming Differentiability
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-1-how-to-do-derivatives
next_page: 3-3-application-of-differentiation
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

# Theorems Assuming Differentiablility

## Fermat's Theorem
**Theorem(Fermat)** If $f(x)$ is a continuous function on a closed interval with $f(c)$ an extreme values of $f$, and $f'(c)$ exists, then $f'(c)=0$.

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

**Example.** Show the following statement: <div id='question-question-calculus1-ch4-proof-mvt7'></div>

**proof.** <div id='answer-question-calculus1-ch4-proof-mvt7'></div></p><div style="text-align: right;">∎</div>

<p style="color:red">Of course, the approach outlined above is not the sole way to utilize the Mean Value Theorem. Another valuable application of this theorem is to directly derive useful inequalities.

**Example.** <div id='question-question-calculus1-ch4-proof-mvt8'></div>

**proof.** <div id='answer-question-calculus1-ch4-proof-mvt8'></div><div style="text-align: right;">∎</div>