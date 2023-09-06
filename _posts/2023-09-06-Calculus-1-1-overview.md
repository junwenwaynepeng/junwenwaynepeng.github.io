---
title: Why Calculus
subtitle: Motivation, Intuition, and Try to Be Precise
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Motivation

1. Building Models: We explored how calculus serves as a powerful tool to create mathematical models. Newton's gravitational model demonstrated that calculus is the bedrock upon which many university courses build their mathematical frameworks.

2. Precise Communication: Calculus provides us with a universal language to communicate abstract concepts effectively. Without this language, the exchange of ideas can be vague, hindering collaboration and understanding.

3. Cultural Significance: From everyday technologies like smartphones to cutting-edge advancements in artificial intelligence, calculus is the unifying foundation behind many innovations. Regardless of one's specific field of study, learning calculus contributes to a shared cultural background among scientists and scholars.

## Instantaneous velocity and the slope of a tangent line to a curve

Let $x = p(t)$ represent a position function, describing the location of an object under observation at a specific time, $t$. To determine the average velocity between two time points, $t_1$ and $t_2$, we use the following formula:

$$
v_{t_1t_2} = \frac{p(t_1) - p(t_2)}{t_1 - t_2}.
$$

When seeking the instantaneous velocity at time $t_1$, we consider the scenario where time $t_2$ approaches $t_1" as close as we wish."

Alternatively, when we visualize the function $x = p(t)$ graphically on a plane, $v_{t_1t_2}$ represents the slope of the secant line connecting the points $(t_1, p(t_1))$ and $(t_2, p(t_2))$. As we allow $t_2$ to approach ever closer to $t_1$, these secant lines progressively approximate the tangent lines to the curve $x = p(t)$ at the point $(t_1, p(t_1))$.

In this light, we can conclude that the concept of instantaneous velocity in physics aligns with the mathematical notion of the slope of the tangent line to a curve at a specific point.

## Try to make it precise

The explanation above highlights a key motivation for rigorously defining the concept of limit. Our initial definition provides an intuitive understanding of limits.

**Definition.** Suppose $f(x)$ is defined when $x$ is near the number $a$ (This means that $f$ is defined around $a$, except possibly at $a$ itself.). Then we write
$$
\lim_{x\to a}f(x)=L
$$
and say "the limit of $f(x)$, as $x$ approaches $a$, equals $L$" if we can make the values of $f(x)$ arbitrarily close to $L$ by restricting $x$ to be sufficiently close to $a$ but not equal to $a$.

## Understanding limits through numbers

Let us see the following examples.

**Example 1.**
$\displaystyle\lim_{t\to 0}\frac{\sqrt{t^2+9}-3}{t^2}=1.66....$
<div class="compute">
f(t) = ((t^2+9)^(0.5)-3)/ t^2
label = [('t','f(t)')]
result = []
for x in [10^(-i) for i in range(1,10)]:
    result.append((x.n(), f(x).n()))
printout = label + result
table(printout, header_row=True, frame=True)
</div>