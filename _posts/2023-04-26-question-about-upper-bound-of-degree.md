---
title: A research question
subtitle: Searching solutions in a function field over a finite field 
tags: [research, academic, question, finite field, function field, Drinfeld module]
head-package:
  -
    file: "package/sagecell.html"
---

Let me set the notations.

* $T$ is trancendental over $\mathbb{F}_{q}$ where $q$ is a power of prime $p$.
* $f$ is a monic polynomial over $\mathbb{F}_{q}[T]$.
* $r$ is an arbitrary integer.
* $\pi$ is an irreducible element in $\mathbb{F}_q[T]$

For convenience, we let $A=\mathbb{F}_{q^r}[T]$. We want to find a positive integer $B$ such that if $(x_1,x_2,\ldots, x_r)\in A\times\pi^{n-1}A\times\cdots\times\pi^{n-1}A$ is a solution of

$$
\det\left(\begin{matrix}
x_1-X & x_2 & \cdots & x_r\\\\
\pi\sigma(x_r) & \sigma(x_1)-X & \cdots & \sigma(x_{r-1})\\\\
\ldots & \ldots & \ddots & \ldots\\\\
\pi\sigma^{r-1}(x_2) & \pi\sigma^{r-1}(x_3) & \cdots & \sigma^{r-1}(x_1)-X
\end{matrix}\right) = f,
$$
then $n$, $\deg(x_1)$, $\cdots$, and $\deg(x_r)$ are bounded by $B$.

For example, we can consider the following settings:
* $f=X^2+TX+1$
* $\pi = T$
* $r = 3$
* $p = 5$

## Answer

We can set $B$ to be $n$ because if there is no solution for lower degree, then it won't have solution for higher degree. 

<div class="compute">
r = 3
q = 5
field_of_coefficients = GF(q,'a')
F.<t> = FunctionField(field_of_coefficients)
FT.<X> = F[]
monic_minima_poly = FT([2*t^6, 0, 0, 1])
K.<s> = F.extension(monic_minima_poly)
pi = t
matrix_space = MatrixSpace(FT,r)
def generate_matrix(row: tuple or list, q):
    matrix = [row]
    r = len(row)
    for n in range(r-1):
        new_row = [pi*row[r-1]^q] + [ l^q for l in row[:r-1]]
        matrix.append(new_row)
        row = new_row
    return matrix_space(matrix).charpoly().list()
d = max([c.degree() for c in monic_minima_poly.coefficients()])
print(d)
for n in range(d+1):
    print(n)
    coefficients_range = cartesian_product([field_of_coefficients for i in range(d+1)])
    polynomial_range = [F(list(a)) for a in coefficients_range]
    pi_polynomial_range = [pi^n*F(list(a)) for a in coefficients_range if pi^n*F(list(a)).degree()<=d]
    matrix_range = [polynomial_range] + [pi_polynomial_range for i in range(r-1)]
    print(len(cartesian_product(matrix_range)))
    for a in cartesian_product(matrix_range):
        print(generate_matrix(a, q))
        print(generate_matrix(a, q)==monic_minima_poly.list())

</div>
