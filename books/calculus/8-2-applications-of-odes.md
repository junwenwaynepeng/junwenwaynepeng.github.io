---
layout: page
title: Application of Ordinary differentail equations
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 8-1-how-to-solve-odes
---

# Orthogonal trajectories

Given a family of curves $\{C_k\}$ where $k$ is a parameter that can be expressed by $x$ and $y$, an orthogonal trajectory of the family is a curve $C$ such that every intersection of $C$ and $C_i$ are perpendicular. To find $C$, we follow the following steps:

**Step 1** Find $\frac{dy}{dx}=f(x,y)$ of $C_k$

**Step 2** Replace $k$ in $f(x,y)$ in terms of $x$ and $y$.

**Step 3** Let $\frac{dy}{dx} = -\frac{1}{f(x,y)}$

**Step 4** Solve the last ODE.

# Mixing Problem

A general mixing problem in calculus, often modeled by ordinary differential equations, involves describing the concentration or amount of a substance in a solution that is continuously stirred or mixed. These problems are common in various fields, such as chemistry, environmental science, and chemical engineering.

Here's a typical setup for a mixing problem:

**Problem Statement:**
Consider a tank $V$ containing a solution, and the volume of a substance is $A_0$. Let \(C(t)\) represent the concentration of the substance in the tank at time \(t\). The tank has an inlet through which a solution with concentration \(A\) is flowing in at a rate of \(R_a\) and an outlet through which the mixture is flowing out at a rate of \(R_o\).

**Key Variables:**
- $V$: the volume of the tank.
- $A_0$: the initial volume of the substance.
- \(C(t)\): Concentration of the substance in the tank at time \(t\).
- \(A\): Concentration of the incoming solution.
- \(R_a\): Inflow rate.
- \(R_o\): Outflow rate.

**ODE Model:**
The general ODE representing this mixing problem is often expressed as:

$$\frac{dC}{dt} = A R_a  - C(t) R_o$$

with the initial condition $C(0)=\frac{A_0}{V}$.

where \(V\) is the volume of the tank.

**Strategy to Solve:**

The above differential equation is of separable form. Indeed, we can rearrange the equation to

$$\frac{dC}{dt} = R_o(\frac{A R_a - C(t) R_o}{R_o})\Righarrow (\frac{R_o}{A R_a - C(t) R_o}) dC= \frac{1}{R_o} dt.$$