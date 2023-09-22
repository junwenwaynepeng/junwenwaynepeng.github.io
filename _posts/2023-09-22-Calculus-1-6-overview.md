---
title: Derivative Formulas Cheat Sheet
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

Today's class marked the introduction of implicit differentiation, a powerful technique that involves a two-step process to find $\frac{dy}{dx}$. Implicit differentiation is particularly valuable when dealing with equations that do not allow for a straightforward direct differentiation.

### Two steps to find $\frac{dy}{dx}$

**STEP 1.** Apply differentiation to the given equation.

**STEP 2.** Solve for $\frac{dy}{dx}$

The primary distinction between implicit differentiation and differentiation of single-variable functions lies in the treatment of terms containing $y$. In implicit differentiation, whenever we differentiate a term that contains $y$, we must also multiply by $\frac{dy}{dx}$ at the end of that term. This additional step is a manifestation of the chain rule in action, allowing us to effectively handle derivatives of implicitly defined functions.

### Vertical tangent line

Furthermore, we explored the concept of vertical tangent lines, a significant aspect of implicit differentiation. When seeking vertical tangent lines for a curve represented by the equation $C: f(x,y) = 0$, we follow a specific procedure. We set $\frac{dx}{dy} = 0$ and proceed to solve for either $x$ or $y$, utilizing the equation $f(x,y) = 0$ to solve for the other variable. It's important to note that this process may yield multiple solutions, as exemplified in the class demonstration. To determine which solutions correspond to vertical tangent lines, we check each solution by substituting it back into $\frac{dx}{dy}$. If this substitution does not lead to an indeterminate form, i.e., $\frac{0}{0}$, we then verify that $\frac{dx}{dy}$ is indeed equal to $0$. This meticulous approach ensures the accurate identification of vertical tangent lines.