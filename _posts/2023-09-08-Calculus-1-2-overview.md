---
title: Precise Definition of Limits and Limits Laws
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Precise Definition of Limits (from English to Mathematics)

Let's commence by revisiting the intuitive concept of limits. We define the limit of a function as $x$ approaches $a$ to be equal to $L$ if we can make the values of $f(x)$ arbitrarily close to $L$ by restricting $x$ to be sufficiently close to $a$ but not equal to $a$. In other words, 

<center><p style="font-size:larger;">for any given margin of error $\varepsilon > 0$, we can ensure that $|f(x) - L| < \varepsilon$ by restricting $x$ to be sufficiently close to $a$.</p></center>

Now, let's delve into the concept of "sufficiency" within this context. In formal logic, we designate the statement $p$ in the implication ($p \Rightarrow q$) as a "sufficient condition." In our case, this implies that being "sufficiently close to $a$" can be expressed as the implication ($x$ is close to $a$ $\Rightarrow$ $|f(x) - L| < \varepsilon$). When we mention "$x$ is close to $a$," we are essentially saying that "$x$ is near $a$" which, in turn, implies that "$x$ is within a neighborhood of $a$."

<center><p style="font-size:larger;">$x$ is within a neighborhood of $a$ $\Rightarrow$ $|f(x)-L|<\varepsilon$.</p></center>

Furthermore, we can directly translate the notion of "$x$ is within a neighborhood of $a$" to mean "$x$ is within an open interval containing $a$" with $a$ serving as the center of this open interval. Why? If $a$ resides in an open interval $(c_1, c_2)$, we can determine $\delta = \min(a - c_1, c_2 - a)$, which allows us to substitute the original open interval with $(a - \delta, a + \delta)$. Consequently, after a series of clarifications, the initial statement is equivalent to saying 

<center><p style="font-size:larger;">if $x$ is in $(a - \delta, a + \delta)$, then $|f(x) - L| < \varepsilon.$</p></center>

This is how we get the precise definition of limits.

---

**Definition.** $\displaystyle\lim_{x\to a}f(x) = L$ exists if for any $\varepsilon>0$, there exists $\delta$ such that $|f(x)-L|<\varepsilon$ while $|x-a|<\delta$ ($|x-a|<\delta$ $\Rightarrow$ $|f(x)-L|<\varepsilon$).

----

Let's utilize this definition to illustrate why it's impossible for $f(x) = 0$ to occur infinitely close to $a$ when $\lim_{x\to a} f(x) = L > 0$.

According to the definition, since the limit exists, we have the statement: "for any $\varepsilon > 0$, there exists $\delta > 0$ ...blablabla." In particular, this statement holds true if we choose $\varepsilon = L/2$. Consequently, there exists some $\delta_0 > 0$ such that for all $x$ satisfying $|x - a| < \delta_0$, we have:
$|f(x)-L|<\frac{L}{2}.$
It follows $|f(x)|>L-\frac{L}{2}>0$.  

## Limits Law

**Theorem.**

Suppose $c$ is a real constant, and both 
$$\lim_{x\to a}f(x)\text{ and }\lim_{x\to a}g(x)$$
exist. Then,
1. $\displaystyle\lim_{x\to a} f(x)\pm g(x) = \lim_{x\to a}$
2. $\displaystyle\lim_{x\to a} f(x)g(x) = \lim_{x\to a}f(x)\lim_{x\to a}g(x)$
3. $\displaystyle\lim_{x\to a} \frac{f(x)}{g(x)} = \frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}$ if $\displaystyle\lim_{x\to a}g(x)\neq 0$
4. $\displaystyle\lim_{x\to a} (f(x))^{(b/c)} = \left(\lim_{x\to a}f(x)\right)^{(b/c)}$ if $c$ is not odd and $b/c$ is in its lowest terms (最簡分數形式).
5. If absolute value is involved in $f(x)$, for example, in expressions like $(x^2-1)/|x-1|$, then it is advisable to use conditional functions and left-right limits to evaluate its limit.
6. The squeeze theorem is frequently useful when we encounter limits of functions that involve a function tending to zero multiplied by another function with bounded values, e.g. $x\sin(1/x)$, $x\cos(1/(x-\pi/2))$, and $x^2e^{\sin(1/x)}$.

---

Limit problems are often considered challenging when they involve one of the following forms during direct evaluation:

$$
\frac{0}{0},\ \frac{\infty}{\infty},\ 0\cdot \infty,\ \text{and }0^0.
$$

To address cases of $\frac{0}{0}$ or $\frac{\infty}{\infty}$, one effective strategy is to begin by applying algebraic manipulations, including techniques such as cancellation and rationalization. (I will provide examples of these techniques in our next class.)