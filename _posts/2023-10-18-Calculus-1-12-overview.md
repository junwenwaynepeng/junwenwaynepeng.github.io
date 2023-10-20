---
title: Curve Sketch and Optimization Problem
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## What does derivatives tell us about the graph of a function (continuous)

### Overestimation or Underestimation

Understanding the behavior of a curve allows us to determine whether a linear approximation is an *overestimation* or an *underestimation*.

**Proposition.** Let $L(x)$ be a linear approximation of $f(x)$ at $x=a$, and let $a'$ be a number close to $a$. If $f''$ is positive over an interval containing both $a$ and $a'$, then $L(a')$ is an overestimation. Conversely, if $f''$ is negative over an interval containing both $a$ and $a'$, then $L(a')$ is an underestimation.

### Inflection Point

An *inflection point* of the curve $y = f(x)$ is defined as a point $(x, f(x))$ where $f''(x) = 0$, and $f''$ changes sign on both sides of $x$.

### Slant asymptote

A *slant asymptote* of a function $f(x)$ is defined by the following condition:

$$
\lim_{x\to\infty} [f(x) - (ax + b)] = 0.
$$


For rational functions, where $f(x) = \frac{F(x)}{G(x)}$, with both $F$ and $G$ being polynomials, a slant asymptote exists when the degree of the numerator $F$ is one greater than the degree of the denominator $G$ (i.e., $\deg(F) = \deg(G) + 1$). In such cases, $f(x)$ can be expressed as $ax + \frac{R(x)}{G(x)}$, and the slant asymptotes can be given as:

$$
y = ax + \lim_{x\to\infty}\frac{R(x)}{G(x)}.
$$

For non-rational functions, the existence of slant asymptotes can be determined by checking the limit:

$$
\lim_{x\to\infty}\frac{f(x)}{x}
$$

(or $\lim_{x\to-\infty}\frac{f(x)}{x}$). If this limit exists, it implies that there may be a slant asymptote of the form $ax + b$, where $a$ is the limit and $b=\displaystyle\lim_{x\to\infty}f(x)-ax$.

### Curve Sketching in Calculus 1

Curve sketching is a valuable tool to test your comprehension of the material introduced in Calculus 1. When sketching a curve, you need to gather the following essential information:

#### 1. Calculate $y'$ and $y''$
| Aspect | Details |
|--------|---------|
| **Domain** | 1. Find the domain of $f(x)$ |
| **Asymptotes** | 2. Determine vertical asymptotes |
| **$y$-Intercept** | 3. Find the $y$-intercept (typically denoted as (0, f(0))) |
| **$x$-Intercepts** | 4. Find the $x$-intercepts (Solve $f(x) = 0$) |
| **Critical Points** | 5. Find critical points (Solve $y' = 0$ and locate where $f'$ is undefined) |
| **Inflection Points** | 6. Find potential inflection points (Solve $y'' = 0$) |

#### 2. Analyze Trending
| Aspect | Details |
|--------|---------|
| **Increasing/Decreasing** | 1. Identify increasing intervals ($f' > 0$) and decreasing intervals ($f' < 0$) |
| **Concavity** | 2. Determine concave up intervals ($f'' > 0$) and concave down intervals ($f'' < 0$) |
| **Extreme Points** | 3. Utilize the above information to identify local maximum/minimum points and inflection points |

#### 3. Consider Behavior at Infinity
- Determine if a horizontal or slant asymptote exists.

This structured approach will help you effectively sketch curves in calculus and understand the key aspects of a function's behavior.

### Optimization Problems

An optimization problem requires you to find the maximum or minimum value of a quantity. To tackle such problems, follow these steps:

**Step 1. Building a Model:** Use the information provided in the question to create a function that describes the relationship between the dependent and independent variables.

**Step 2. Find Local Extremes:** Determine the local maximums and minimums of the function.

**Step 3. Apply Common Sense:** Eliminate answers that are not feasible based on the problem's context. Then, identify the global maximum or minimum of the function, which serves as the final solution.