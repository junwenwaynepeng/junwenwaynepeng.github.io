---
title: Implicit Differentiation(continuou)
subtitle: Suppose the curve is parametrizable.
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

1. When employing implicit differentiation on a curve represented by the equation $F(x,y)=0$, we can adopt a different perspective by considering both $x$ and $y$ as functions of a third variable, $t$. This approach allows us to leverage multivariable calculus, specifically applying the chain rule. By differentiating both sides with respect to $t$, we obtain the following equation:
$$\frac{dF}{dx}\cdot\frac{dx}{dt}+\frac{dF}{dy}\frac{dy}{dt} = 0.$$ 
Consequently, we can express the derivative of $y$ with respect to $x$ as follows:
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = -\frac{F_x}{F_y}.$$

2. Consider two lines, $L_1$ and $L_2$, with slopes $m_1$ and $m_2$, respectively, where $L_1$ is perpendicular to $L_2$ and $m_1m_2\neq 0$. In this scenario, the product of the slopes $m_1m_2=-1$. If either $m_1$ or $m_2$ is $0$, it indicates that the other slope corresponds to a vertical line. We can apply this property to determine the tangent and normal lines to a given curve.

3. Implicit differentiation finds critical applications in computing derivatives of inverse functions and employing logarithmic differentiation. In this session, we only focused on illustrating an example involving the derivative of the inverse sine $\sin^{-1}(x)$, with further details to be explored in the next overview.