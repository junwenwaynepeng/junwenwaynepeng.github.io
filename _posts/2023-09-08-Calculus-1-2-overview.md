---
title: Precise Definition of Limits and Limits Laws
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Precise Definition of Limits

Let's commence by revisiting the intuitive concept of limits. We define the limit of a function as $x$ approaches $a$ to be equal to $L$ if, by getting $x$ sufficiently close to $a$ (while ensuring that $x$ is not equal to $a$), we can make the values of $f(x)$ arbitrarily close to $L$. In other words, 

<center><p style="font-size:larger;">for any given margin of error $\varepsilon > 0$, we can ensure that $|f(x) - L| < \varepsilon$ by restricting $x$ to be sufficiently close to $a$.</p></center>

Now, let's delve into the concept of "sufficiency" within this context. In formal logic, we designate the statement $p$ in the implication ($p \Rightarrow q$) as a "sufficient condition." In our case, this implies that being "sufficiently close to $a$" can be expressed as the implication ($x$ is close to $a$ $\Rightarrow$ $|f(x) - L| < \varepsilon$). When we mention "$x$ is close to $a$," we are essentially saying that "$x$ is near $a$" which, in turn, implies that "$x$ is within a neighborhood of $a$."

<center><p style="font-size:larger;">$x$ is within a neighborhood of $a$ $\Rightarrow$ $|f(x)-L|<\varepsilon$.</p></center>

Furthermore, we can directly translate the notion of "$x$ is within a neighborhood of $a$" to mean "$x$ is within an open interval containing $a$" with $a$ serving as the center of this open interval. Why? If $a$ resides in an open interval $(c_1, c_2)$, we can determine $\delta = \min(a - c_1, c_2 - a)$, which allows us to substitute the original open interval with $(a - \delta, a + \delta)$. Consequently, after a series of clarifications, the initial statement is equivalent to saying 

<center><p style="font-size:larger;">if $x$ is in $(a - \delta, a + \delta)$, then $|f(x) - L| < \varepsilon.</p></center>




## Limits Law