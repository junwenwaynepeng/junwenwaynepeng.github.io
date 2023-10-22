---
layout: page
title: Applicatoin of Differentiation
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-2-theorems-assuming-differentiability
---
# Related Rates

Related rate problems typically present a scenario where the rate of one change is given, and you are asked to determine the rate of another change when a specific event occurs. These problems often involve geometric relationships. Let's illustrate this with an example:

**Example.** Consider a water tank in the shape of an inverted circular cone with a base radius of 2 m and a height of 4 m. Water is being pumped into the tank at a rate of 2 $\text{m}^3/\text{min}$. Find the rate at which the water level is rising when the water depth is 3 m.

* Given rate: $\frac{dV}{dt} = 2$ ($\text{m}^3/\text{min}$).
* Required rate: $\frac{dh}{dt}\mid_{h=3}$.
* The relationship between $V$ and $h$ is determined by the cone's geometry.

**Solution:** The volume of a cone with height $h$ and base radius $r$ is given by:

$$V = \frac{1}{3}\pi r^2h.$$

Moreover, <span style="color:red;">we know that $r:h = 2:4$ using similar triangles, which implies $V = \frac{1}{3}\pi\left(\frac{1}{2}h\right)^2 h$. Since $r$ also changes as water is pumped in, $r$ is a function of time $t$, and we cannot treat it as a constant.</span> Now, applying implicit differentiation, we find:

$$\frac{dV}{dt} = \frac{1}{4}\pi h^2\frac{dh}{dt},$$

so $\frac{dh}{dt}\mid_{h=3} = 2\cdot 4\cdot \frac{1}{3^2\pi}$.


# Tangent lines

The general definition of tangent lines to a curve comes after the definition of derivative. Let $P=(x_0,y_0)$ be a point on a curve,  and suppose the first derivative $\frac{dy}{dx}$ exists at that point. Then, we define the tangent line of the curve at $P$ as
$$y-y_0 = \left.\frac{dy}{dx}\right|_{(x_0,y_0)}(x-x_0).$$

**Remark.** Let $m_1$ and $m_2$ represent the slopes of lines $L_1$ and $L_2$ respectively. If $L_1$ and $L_2$ are perpendicular to each other, then their slopes satisfy the relation $m_1\cdot m_2=-1$. We use this relation to define the normal line to a curve at a point $P$ as
$$y-y_0 = -\left.\frac{dx}{dy}\right|_{(x_0,y_0)}(x-x_0).$$

# Linear Approximation

A linear function $L(x)=mx+b$ is called the linearization of a function $f(x)$ at $x=a$ if $y=L(x)$ is the tangent line to the curve $y=f(x)$ at $x=a$. We can use estimate the value $f(a')$ by evaluating $L(a')$ when $a'$ is near $a$.


## Concavity v.s. over(under)estimation 

**Proposition.** If $f''$ is positive over an interval containing both $a$ and $a'$, then $L(a')$ is an overestimation. Conversely, if $f''$ is negative over an interval containing both $a$ and $a'$, then $L(a')$ is an underestimation.

## Differential

We aim to estimate the error that exists between the actual result $f(x)$ and the result $f(c)$ due to the measurement process.

To do this, we denote the error of actual value $f(x)$ in relation to the measured result $f(c)$ as $\Delta y$. It's important to note that

$$\Delta y = f(x) - f(c) \approx f'(c)(x-c) = \frac{dy}{dx}dx = dy.$$

This revelation indicates that we can employ implicit differentiation to estimate the error, providing a valuable tool for understanding and quantifying measurement uncertainties.

More precisely, we have

$$\Delta y \approx f'(x) dx.$$

## Absolute and relative errors

We call $\Delta y$ the *Absolute error*, and $\frac{\Delta y}{y}$ the *relative error*.

# Extreme Values

We say a point $(a,f(a))$ is a *local maximum* (*minimum*) if $f(a)\geq f(x)$ ($f(a)\leq f(x)$) for $x$ near $a$. 

[Fermat's theorem](../books/calculus/3-2-theorems-assuming-differentiability#fermats-theorem) implies that the set of $c$ such that $f(c)$ is a local extreme values is a subset of the critical points of $f$. Therefore, to identify local extreme values, our initial step is to find all critical points of $f$. The largest/smallest value among the set of local extreme values $f(c)$ corresponds to the *global(absolute) maximum/minimum* of $f$. 

**Remark.** Note that if $f$ is defined on a closed interval $[a,b]$, the boundary points, namely, $a$ and $b$, may also serve as critical points.

# Increasing and Decreasing Intervals

**Definition.** We define a function $f(x)$ as *increasing* (*decreasing*) on an interval $I$ if, for any two values $x_1$ and $x_2$ within $I$, the condition $x_1 < x_2$ implies that $f(x_1) \leq f(x_2)$ ($f(x_1) \geq f(x_2)$).

The information regarding whether a function is increasing or decreasing can be deduced from the sign of its first derivative. To clarify this relationship, we have the following theorem:

**Theorem.** The function $f(x)$ is increasing on an open interval $I$ if and only if $f'(x) \geq 0$ on that interval.

**proof.** If $f$ is increasing, then, for any $h$ with $x+h\in I$,  the expression $\frac{f(x+h)-f(x)}{h}$ is greater than zero. Consequently, $\displaystyle f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h} \geq 0$.

Conversely, suppose $x_1$ and $x_2$ are in $I$ with $x_1<x_2$. By the mean value theorem, there exists $c\in (x_1,x_2)$ such that
$$f(x_2)-f(x_1)=f'(c)(x_2-x_1)\geq 0.$$
Therefore, $f$ is increasing on $I$.<div style="text-align: right;">∎</div>

An increasing interval is one on which $f'$ is positive, while a decreasing interval is one on which $f'$ is negative.

## The first derivative test 
Suppose $f$ is a continuous function defined on a closed interval $I$, and let $c$ belong to $I$. Assume $f$ is differentiable on $I$, possibly excluding the point $c$.
1. If $f'(x) < 0$ for $x < c$ in the vicinity of $c$ and $f'(x) > 0$ for $x > c$ in the vicinity of $c$, then $f(c)$ represents a local minimum value.
2. If $f'(x) > 0$ for $x < c$ in the vicinity of $c$ and $f'(x) < 0$ for $x > c$ in the vicinity of $c$, then $f(c)$ represents a local maximum value.

# Concavity

**Definition.** If $f$ is twice differentiable, the second derivative tells us about the concavity of the graph. Specifically:
- If $f''(x) > 0$, the graph is concave upward (convex) at $x$.
- If $f''(x) < 0$, the graph is concave down (concave) at $x$.


## Inflection points

An *inflection point* of the curve $y = f(x)$ is defined as a point $(x, f(x))$ at which $f''$ changes sign on both sides of $x$.

## Second Derivative Test

Let $f$ be a twice-differentiable function on an open interval $I$ with a critical point at $c$.
1. If $f'(c) = 0$ and $f''(c) > 0$, then $f(c)$ is a local minimum value.
2. If $f'(c) = 0$ and $f''(c) < 0$, then $f(c)$ is a local maximum value.

The Second Derivative Test offers a convenient way to determine the concavity of the graph at a critical point and can help identify local extrema with ease. However, it might be inconclusive for some cases, such as functions like $f(x) = x^4$. In such scenarios, we have to revert to using the First Derivative Test to make a definitive determination regarding local extrema.

# Curve Sketching

Curve sketching is a valuable tool to test your comprehension of the material introduced in Calculus 1. When sketching a curve, you need to gather the following essential information:

## 1. Calculate $y'$ and $y''$
| Aspect | Details |
|--------|---------|
| **Domain** | 1. Find the domain of $f(x)$ |
| **Asymptotes** | 2. Determine vertical asymptotes |
| **$y$-Intercept** | 3. Find the $y$-intercept (0, f(0)) |
| **$x$-Intercepts** | 4. Find the $x$-intercepts (Solve $f(x) = 0$) |
| **Critical Points** | 5. Find critical points (Solve $y' = 0$ and locate where $f'$ is undefined) |
| **Inflection Points** | 6. Find potential inflection points (Solve $y'' = 0$ and locate where $y''$ is undefined) |

## 2. Analyze Trending
| Aspect | Details |
|--------|---------|
| **Increasing/Decreasing** | 1. Identify increasing intervals ($f' > 0$) and decreasing intervals ($f' < 0$) |
| **Concavity** | 2. Determine concave up intervals ($f'' > 0$) and concave down intervals ($f'' < 0$) |
| **Extreme Points** | 3. Utilize the above information to identify local maximum/minimum points and inflection points |

## 3. Consider Behavior at Infinity
- Determine if a horizontal or slant asymptote exists.

This structured approach will help you effectively sketch curves in calculus and understand the key aspects of a function's behavior.

# Optimization Problems

An optimization problem requires you to find the maximum or minimum value of a quantity. To tackle such problems, follow these steps:

**Step 1. Building a Model:** Use the information provided in the question to create a function that describes the relationship between the dependent and independent variables.

**Step 2. Find Local Extremes:** Determine the local maximums and minimums of the function.

**Step 3. Apply Common Sense:** Eliminate answers that are not feasible based on the problem's context. Then, identify the global maximum or minimum of the function, which serves as the final solution.