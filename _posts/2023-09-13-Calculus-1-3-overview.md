---
title: Limits at infinity; Horizontal Asympototes
subtitle: Concepts of infinity
tags: [calculus, calculus 1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
data:
  -
    folder: question
    file: calculus1-ch2
    id: q2
show-answer: false
expandable-answer: true
---

# Rationalization

There are two scenarios where you might want to consider employing this technique. The first scenario arises when you encounter an indeterminate form, specifically $\frac{0}{0}$, and the denominator takes the form of $\sqrt{\cdot}-\sqrt{\cdot}$. The second scenario occurs when you are working with a limit as $x$ approaches infinity, and direct evaluation leads to the indeterminate form $\infty - \infty." These are two common situations where the technique we'll discuss becomes particularly useful.

To illustrate these scenarios, let's explore two typical examples.

**Example 1.** $\displaystyle\lim_{x\to 0}\frac{x^2}{\sqrt{|x^2+2|}-\sqrt{|x^2-2|}}$

**Example 2.** $\displaystyle\lim_{x\to\infty}\sqrt{x}-\sqrt{x+1}$

# An important application of the squeeze theorem

To compute $\displaystyle\lim_{x\to 0}\frac{\sin(x)}{x}$, we rely on the squeeze theorem. It turns out that $\lim_{x\to 0}\frac{\sin(x)}{x}=1$ serves as a tool for evaluating various limits involving the sine function.

**Example 3.** <div id="question-question-calculus1-ch2-q2"></div>

# Concepts of infinite

Let's consider the concept of infinity as a symbol, one that holds a unique place in mathematics—it surpasses any finite number. Embracing this idea, we can establish a precise definition for limits such as $\lim_{x\to a}f(x)=\infty$ and $\lim_{x\to \infty}f(x)=L$. In computational terms, this symbol exhibits the following algebraic properties:

1. $\frac{1}{\infty} = 0$
2. $\infty + \infty = \infty$
3. $\infty\cdot\infty = \infty$

Of particular interest is the first property, which leads to a valuable technique for evaluating limits as $x$ approaches infinity by focusing on the dominant term in the expression.