---
title: Related Rate and Linear Approximation
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Related Rates

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

## Linear Approximation

The linearization of a function $f(x)$ at $x=a$ corresponds to the equation of the tangent line of the curve $y=f(x)$ at the point $(a,f(a))$, which is given by:

$$y = f(a) + f'(a)(x-a).$$

This equation allows us to approximate the function $f(x)$ near $a$ using the expression $f(a) + f'(a)(x-a)$, resulting in:

$$f(x)\approx f(a) + f'(a)(x-a).$$

It's worth noting that the linearization of $f(x)$ at $x=a$ is also referred to as the 1st-degree Taylor polynomial.