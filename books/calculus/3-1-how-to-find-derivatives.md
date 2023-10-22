---
layout: page
title: How to find derivatives
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-definition-of-derivatives
next_page: 3-2-theorems-assuming-differentiability
---

# How to find derivatives

## Derivatives of basic functions

| Function $f(x)$          | Derivative $\frac{d}{dx} (f(x))$       |
|--------------------------|----------------------------------------|
| Constant ($c$)           | $0$                                    |
| Power Rule ($x^n$)       | $nx^{n-1}$                             |
| Exponential ($a^x$)     | $a^x\ln(a)$                             |
| Natural Logarithm ($\ln(x)$) | $\frac{1}{x}$                      |
| Sine ($\sin(x)$)         | $\cos(x)$                              |
| Cosine ($\cos(x)$)       | $-\sin(x)$                             |
| Tangent ($\tan(x)$)      | $\sec^2(x)$                            |
| Arcsing ($\sin^{-1}(x)$) | $\frac{1}{\sqrt{1-x^2}}$               |
| Arctangent ($\tan^{-1}(x)$) | $\frac{1}{1+x^2}$                   |

## Differentaial rules

1. Addition/substraction rule: $(f\pm g)' = f' \pm g'$
2. Constant rule: $(cf)' = cf'$
3. Product rule: $(fg)'=f'g+fg'$ (前微後不微 加 後微前不微)
4. Chain rule: $(f\circ g)' = f'\circ g\cdot g'$ (前微乘後微)
5. Quotient rule: $(\frac{f}{g})' = \frac{f'g-fg'}{g^2}$ (上微減下微除以下面平方)


## Implicit Differentiation

Implicit differentiation is a technique used to find the derivative of a function when the relationship between its variables is described implicitly rather than explicitly. To perform implicit differentiation, follow these steps:

1. Identify the equation that relates the variables: You'll typically be given an equation that relates two or more variables, such as $F(x, y) = 0$, where $x$ and $y$ are variables. This equation is what you'll implicitly differentiate.

2. Differentiate both sides of the equation: Apply the derivative operator ($\frac{d}{dx}$) to both sides of the equation with respect to $x$. This will result in derivatives of both $x$ and $y$.

3. Apply the chain rule: When differentiating $y$ with respect to $x$, use the chain rule. For example, if you have $\frac{d}{dx}(y^2)$, it becomes $2y\frac{dy}{dx}$. This is because you're treating $y$ as a function of $x$, and you need to differentiate $y$ with respect to $x$ ($\frac{dy}{dx}$) and then multiply it by the derivative of $y^2$ with respect to $y$, which is $2y$.

4. Isolate $\frac{dy}{dx}$: After differentiating both sides, rearrange the terms to solve for $\frac{dy}{dx}$, which is the derivative you're trying to find.

5. Simplify and evaluate: If needed, simplify the expression for $\frac{dy}{dx}$ and evaluate it at specific points if you want to find the slope of the tangent line at those points.

Implicit differentiation is particularly useful for finding derivatives of equations that can't be explicitly solved for $y$ as a function of $x$ or when it's not immediately apparent how the variables are related. It's commonly used in cases involving curves, functions defined implicitly, or when solving for derivatives of inverse functions.

**Remark.** To find the second derivative of $y$ with respect to $x$, you'll follow the same process. The only difference is that you'll need to substitute $y'$ in terms of $x$ at the end to express the second derivative in a form that depends solely on $x$.

## Derivatives of Inverse Functions

We can utilize implicit differentiation to find the derivatives of inverse functions. Let $y=f^{-1}(x)$. We have $f(y)=x$, so $f'(y)\frac{dy}{dx} = 1$. We then need to use the relationship $f(f^{-1}(x))=x$ to express $f'(f^{-1}(x))$ in terms of $x$.

**Example 1.** $\frac{d}{dx}\sin^{-1}(x)=\frac{1}{\sqrt{1-x^2}}$.

**Example 2.** $\frac{d}{dx}\tan^{-1}(x)=\frac{1}{1+x^2}$.

**Example 3.** $\frac{d}{dx}\sec^{-1}(x)=\frac{1}{|x|\sqrt{x^2-1}}$.

**Example 4.** $\frac{d}{dx}(\ln(x)) = \frac{1}{x}.$

## Logarithmic Differentiation

1. Application in handling functions of the form $f(x)^{g(x)}$ or $\frac{f_1(x)f_2(x)\cdots f_n(x)}{g_1(x)g_2(x)\cdots g_m(x)}$
2. Two-Step Process:
    * Step 1: Take the natural logarithm $\ln$ of the given equation
    * Step 2: Apply implicit differentiation to find the derivative

**Example 1.** $\frac{d}{dx}\left(x^x\right)=x^x(\ln(x)+1)$.

**Example 2.** Calculate $y'$ if $y=\frac{x^2\sqrt{x+1}}{\sqrt[3]{x^3+2x^2}}$. Take the natural logarithm on both sides, we have 

$$\ln(y) = \ln\left(\frac{x^2\sqrt{x+1}}{\sqrt[3]{x^3+2x^2}}\right) = 2\ln(x) +\frac{1}{2}\ln(x+1)+\frac{1}{3}\ln(x^3+2x^2).$$

Now, apply implicit differentiation to each term:

$$\frac{1}{y}\frac{dy}{dx} = \frac{2}{x} + \frac{1}{2(x+1)} + \frac{3x^2+4x}{3(x^3+2x^2)}.$$

Finally, solve for $\frac{dy}{dx}:$

$$\frac{dy}{dx} = \frac{x^2\sqrt{x+1}}{\sqrt[3]{x^3+2x^2}}\left(\frac{2}{x} + \frac{1}{2(x+1)} + \frac{3x^2+4x}{3(x^3+2x^2)}\right).$$