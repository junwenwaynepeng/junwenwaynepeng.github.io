---
layout: page
title: definite and indefinite integral
subtitle: 
right-toc: true
left-toc: true
book: calculus
preview_page: 3-3-applications-of-differentiation
next_page: 4-1-the-fundamental-theorem-of-calculus
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---

# Definition of Indefinite Integral (a.k.a. Antiderivatives)

We say a function $F$ is an *antiderivative* of another function $f$ if $F'=f$. The *indefinite integral*
$$ \int f(x)dx = F(x) + C\\ \\ \text{for some constant }C$$
is the general form of antiderivatives of $f$.

# Definition of Definite Integral

## Riemann Sum

1. Give a partition $a=x_0<x_1<\cdots<x_n=b$  of $[a,b]$.
2. Choose sample points $x_i^\*$ in each subinterval $[x_{i},x_{i+1}]$ for $i=0,1,\ldots, n-1$.
Then, a $Riemann sum$ of $f$ on $[a,b]$ is
$$f(x_0^\*)(x_1-x_0)+f(x_1^\*)(x_2-x_1)+\cdots+f(x_{n-1}^\*)(x_{n}-x_{n-1})=\sum_{i=0}^{n-1}f(x_i^\*)(x_i-x_{i-1}).$$

(See the following figure)
<div class='hide_code'>
x = var('x')
@interact
def _(f=input_box("x^2+3", 'function'), a=input_box(1,type=float), b=input_box(3,type=float), number_of_partition=input_box(5, label='number of partition', type=int)):
    partition = [a]
    while len(partition)!=number_of_partition:
        x_i = RealField().random_element(a, b)
        if x_i not in partition:
            partition.append(x_i)
    partition.sort()
    partition.append(b)
    sample_points = [RealField().random_element(partition[i],partition[i+1]) for i in range(number_of_partition)]
    rectangles = [polygon2d([(partition[i], 0), (partition[i+1], 0), (partition[i+1], f.subs(x == sample_points[i])), (partition[i], f.subs(x == sample_points[i]))], alpha=0.2, edgecolor="black") for i in range(number_of_partition)]
    (plot(f,x,a,b)+point(partition)+sum(rectangles)).show(aspect_ratio="automatic", title="A Riemann sum of "+str(f)+" use "+str(number_of_partition)+" many rectangles")
    print('This Riemann sum is '+ str(sum([f.subs(x == sample_points[i])*(partition[i+1]-partition[i]) for i in range(number_of_partition)]))+',and the area under the curve from '+str(a)+' to '+str(b)+' is '+str(f.integral(x,a,b)))
</div>

**考型** Give you a summation, and recognize it as a Riemann sum.

**Example 1.** Suppose the following summation is a Riemann sum of a function $f(x)$ on $[a,b]$
$$\sum_{n=1}^m \frac{1}{\sqrt{n}(\sqrt{n+1})}$$
Find $f$, $a$, and $b$.

## Definition of Indefinite Integral 

**Definition of Definite Integral** We say a function $f(x)$ is integrable on $[a,b]$ and has an integral $S$ if, for every $\varepsilon>0$, there exists a $\delta>0$ such that, for all partitions $a=x_0<x_1<\cdots<x_n=b$ with $\displaystyle\max_{i=1,2,\ldots, n}\\{x_{i}-x_{i-1}\\}<\delta$ and for arbitrary sample points $x_i^\*\in[x_{i},x_{i-1}]$ with $i=1,2,\ldots,n$, we have
$$\left|S-\sum_{i=1}^nf(x_{i}^*)(x_i-x_{i-1})\right|<\varepsilon.$$ 

We denote the integral of $f$ from $a$ to $b$ by $\int_{a}^b f(x)dx$.

**考型** Use the definition of definite integral to find the integral of a function on $[a,b]$.

**Example 2.** Use the definition of definite integral to find the integral $\displaystyle\int_1^4 x^3+x^2dx$.

**考型** Give you a limit of summation, and recognize it as an integral, and use this integral to find the limit.

**Example 2.** Evaluate the following limit $\displaystyle\lim_{m\to\infty}\sum_{n=1}^m\frac{1}{\sqrt{n}\sqrt{n+1}}.$