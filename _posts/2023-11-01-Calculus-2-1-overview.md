---
title: Definition of Integral
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
---
Let $f(x)$ be a real-valued function on $[a,b]$. To give a *Riemann sum* of $f$ on $[a,b]$, we follow two steps:
1. Give a partition $a=x_0<x_1<\cdots<x_n=b$  of $[a,b]$.
2. Choose sample points $x_i^\*$ in each subinterval $[x_{i},x_{i+1}]$ for $i=0,1,\ldots, n-1$.
Then, a Riemann sum is
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

**Definition of Definite Integral** We say a function $f(x)$ is integrable on $[a,b]$ and has an integral $S$ if, for every $\varepsilon>0$, there exists a $\delta>0$ such that, for all partitions $a=x_0<x_1<\cdots<x_n=b$ with $\displaystyle\max_{i=1,2,\ldots, n}\\{x_{i}-x_{i-1}\\}<\delta$ and for arbitrary sample points $x_i^\*\in[x_{i},x_{i-1}]$ with $i=1,2,\ldots,n$, we have
$$\left|S-\sum_{i=1}^nf(x_{i}^*)(x_i-x_{i-1})\right|<\varepsilon.$$ 

We denote the integral of $f$ from $a$ to $b$ by $\int_{a}^b f(x)dx$.

Intuitively, we consider a function to be Riemann integrable if we can effectively use Riemann sums to approximate the area under the function. (This animation illustrates that as we refine the size of rectangles, Riemann sums converge to the area under the given curve.)
<div class='hide_code'>
x = var('x')
@interact
def _(f=input_box("x^2+3", 'function'), a=input_box(1,type=float), b=input_box(3,type=float), number_of_frames=input_box(10, label='Number of frames', type=int)):
    print('Please wait a minute...')
    frames = []
    riemann_sums = []
    for delta in [1/i for i in range(1,number_of_frames+1)]:
        partition = [a]
        while partition[-1]+delta < b:
            x_i = RealField().random_element(partition[-1], partition[-1]+delta)
            if x_i not in partition:
                partition.append(x_i)
        partition.append(b)
        number_of_partition = len(partition)
        sample_points = [RealField().random_element(partition[i],partition[i+1]) for i in range(number_of_partition-1)]
        rectangles = [polygon2d([(partition[i], 0), (partition[i+1], 0), (partition[i+1], f.subs(x == sample_points[i])), (partition[i], f.subs(x == sample_points[i]))], alpha=0.2, edgecolor="black") for i in range(number_of_partition-1)]
        frame = plot(f,x,a,b) + point(partition) + sum(rectangles)
        frames.append(frame)
        riemann_sums.append(sum([f.subs(x == sample_points[i])*(partition[i+1]-partition[i]) for i in range(number_of_partition-1)]))
    movie = animate(frames, aspect_ratio='automatic')
    movie.show()
    print('The above animation shows a sequence of Riemann sums with thiner and thiner rectangulars (the nth frame uses the condition max(x_i-x_{i+1})<1/n). We list these Riemann sums:')
    for s in riemann_sums:
        print(str(s))
    print('The definite integral of '+str(f)+' from '+str(a)+' to '+str(b)+' is '+str(f.integral(x,a,b)))
</div>

There are three types of special Riemann sums:
- Left Riemann sum: $\displaystyle L_n=\sum_{i=1}^n f(x_{i-1})(x_i-x_{i-1})$.
- Right Riemann sum: $\displaystyle R_n=\sum_{i=1}^n f(x_{i})(x_i-x_{i-1})$.
- Midpoint Riemann sum: $\displaystyle M_n=\sum_{i=1}^n f\left(\frac{x_i+x_{i-1}}{2}\right)(x_i-x_{i-1})$.

**Theorem.** If $f(x)$ is integrable, then
$$\lim_{n\to\infty}L_n=\lim_{n\to\infty}R_n=\lim_{n\to\infty}M_n=\int_{a}^bf(x)dx.$$

This theorem is what makes the left (right, or midpoint) Riemann sums a useful tool. Here are some helpful formulas that can assist you in calculating a left (right, or midpoint) Riemann sum:
- $\displaystyle\sum_{i=1}^n 1 = n$
- $\displaystyle\sum_{i=1}^n i = \frac{n(n+1)}{2}$
- $\displaystyle\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$
- $\displaystyle\sum_{i=1}^n i^3 = \left(\frac{n(n+1)}{2}\right)^2$ 
