---
title: logarithmetic differentiation, Review, and Related Rate
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

## Logarithmic differentiation

1. Application in handling functions of the form $f(x)^{g(x)}$ or $\frac{f_1(x)f_2(x)\cdots f_n(x)}{g_1(x)g_2(x)\cdots g_m(x)}$
2. Two-Step Process:
    * Step 1: Take the natural logarithm $\ln$ of the given equation
    * Step 2: Apply implicit differentiation to find the derivative

## Review technique of differentiation

1. table of derivatives of basic functions

| Function           | Derivative               |
|--------------------|--------------------------|
| Constant (c)       | $\frac{d}{dx}(c) = 0$    |
| Power Rule         | $\frac{d}{dx}(x^n) = nx^{(n-1)}$ |
| Exponential (e^x)  | $\frac{d}{dx}(e^x) = e^x$ |
| Natural Logarithm (ln(x)) | $\frac{d}{dx}(\ln(x)) = \frac{1}{x}$ |
| Sine (sin(x))      | $\frac{d}{dx}(\sin(x)) = \cos(x)$ |
| Cosine (cos(x))    | $\frac{d}{dx}(\cos(x)) = -\sin(x)$ |
| Tangent (tan(x))   | $\frac{d}{dx}(\tan(x)) = \sec^2(x)$ |
| Natural Log (log_b(x)) | $\frac{d}{dx}(\log_b(x)) = \frac{1}{x\ln(b)}$ |
| Inverse Sine (arcsin(x))     | $\frac{d}{dx}(\arcsin(x)) = \frac{1}{\sqrt{1-x^2}}$ |
| Inverse Cosine (arccos(x))   | $\frac{d}{dx}(\arccos(x)) = -\frac{1}{\sqrt{1-x^2}}$ |
| Inverse Tangent (arctan(x))   | $\frac{d}{dx}(\arctan(x)) = \frac{1}{1+x^2}$ |
| Inverse Cotangent (arccot(x)) | $\frac{d}{dx}(\cot^{-1}(x)) = -\frac{1}{1+x^2}$ |
| Inverse Secant (arcsec(x))     | $\frac{d}{dx}(\sec^{-1}(x)) = \frac{1}{x\sqrt{x^2-1}}$ |
| Inverse Cosecant (arccsc(x))   | $\frac{d}{dx}(\csc^{-1}(x)) = -\frac{1}{x\sqrt{x^2-1}}$ |

2. differential rules:
    1. Sum/Difference Rule: $\frac{d}{dx}(f(x) \pm g(x)) = \frac{d}{dx}(f(x)) \pm \frac{d}{dx}(g(x))$.
    2. Product Rule: $\frac{d}{dx}(f(x) \cdot g(x)) = f'(x) \cdot g(x) + f(x) \cdot g'(x)$.
    3. Quotient Rule: $\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{(g(x))^2}$.
    4. Chain Rule: $\frac{d}{dx}(f(g(x))) = f'(g(x)) \cdot g'(x)$.
3. implicit differentiation (inverse functions and logarithmetic differentiation):
    1. inverse functions: $y=f^{-1}(x)$ implies $f(y)=x$.
    2. logarithmetic differentiation: $y=f(x)^{g(x)}$ implies $\ln(y)=g(x)\ln(f(x))$.

## Related rate

Investigate scenarios where we are given one rate of change and are tasked with determining another rate of change. Understand the concept of relative rates and how to calculate them.