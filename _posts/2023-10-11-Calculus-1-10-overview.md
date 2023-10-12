---
title: Linear Approximation, Differential, and Extreme Values
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Linear approximation and Differential

In this session, we delve into frequently used linear approximations.

**Example.** $\sin(\theta)\approx \theta$ when $\theta$ is near zero.

**Example.** $\sqrt{1+x}\approx 1+\frac{1}{2}x$ when $x$ is near zero.

**Exercise.** $\ln(1+x)\approx x$ when $x$ is near zero.

We also introduce the concept of using differentials to estimate errors. In real-world scenarios, any measurement inherently carries some level of error, and this error propagates through the final results via the equations that describe the relationships between the final results and the measurements. For instance, when calculating the volume of a box, we measure the lengths of its sides. The final result, in this case, is the volume, and the equation that connects these measurements is expressed as:

$$\text{Volume} = \text{Width}\times\text{Length}\times\text{Height}.$$

When we measure $x$, we obtain a result denoted as $y$. We use the equation $y=f(x)$ to establish the connection between $x$ and $y. However, when measuring $x$, we may obtain a value, let's say $c$, but the actual value could fall within a range of $(c-\varepsilon, c+\varepsilon)$, where $\varepsilon$ represents the margin of error. We aim to estimate the error that exists between the actual result $f(x)$ and the result $f(c)$ due to the measurement process.

To do this, we denote the error of actual value $f(x)$ in relation to the measured result $f(c)$ as $\Delta y$. It's important to note that

$$\Delta y = f(x) - f(c) \approx f'(c)(x-c) = \frac{dy}{dx}dx = dy.$$

This revelation indicates that we can employ implicit differentiation to estimate the error, providing a valuable tool for understanding and quantifying measurement uncertainties.

**Remark.** At times, it can be challenging to assess the significance of an error solely based on its quantity, often referred to as the "absolute error." In such cases, we turn to a more informative metric that considers the ratio of the error to the result of the measurement, which we call the "relative error." The smaller this ratio, the more accurate the measured result. We express this ratio with the following formula:

$$\frac{\Delta y}{y} = \frac{\text{error}}{\text{measured result}}.$$


## Maximum/Minimum

A local extreme value of a function refers to a local maximum or local minimum of the function. We then introduced one of Fermat's theorems.

**Fermat's Theorem:** If $f(c)$ is a local extreme value, then $c$ is a critical value of $f$, which means either $f'(c) = 0$ or $f'(c)$ doesn't exist.

This theorem implies that the set of $c$ such that $f(c)$ is a local extreme values is a subset of the critical points of $f$. Therefore, to identify local extreme values, our initial step is to find all critical points of $f$.

The largest/smallest value among the set of local extreme values $f(c)$ corresponds to the global maximum/minimum of $f$. 