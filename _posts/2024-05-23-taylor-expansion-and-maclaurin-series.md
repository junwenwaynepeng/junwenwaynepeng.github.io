---
id: cb2e2868-2011-43cd-a73b-b88589208570
layout: post
date: 2024-05-23
title: Taylor Expansion and Maclaurin Series
subtitle: 
comments: false
leftToc: false
rightToc: false
sagecell: 
tags: []
categories: [post]

---

# Taylor Series and Maclaurin Series


Suppose a real function $f(x)$ has a power series representation about $c$. That is


$$
f(x)=\sum_{n=0}^\infty a_n(x-c)^n
$$


for some positive real radius of convergence $R$. Then, the coefficients are given by the formula


$$
a_n=\frac{f^{(n)}(c)}{n!}.
$$


A power series representation of a function is referred to as the _Taylor series_. In situations where $c=0$, which occur quite frequently, it's known as the _Maclaurin series_. The method to represent a function as an infinite series is called the _Taylor expansion_.


**Proof 1:** To obtain $a_0$, we plug $c$ into the function. We differentiate both sides of the functional equation to get


$$
f'(x)= \sum_{n=1}^\infty n a_n(x-c)^{n-1}. 
$$


Plugging in $c$, we deduce that $a_1=f'(c)$. We repeat the process to obtain $a_2=\frac{f''(c)}{2!}$. By repeating this process $n$ times, we conclude that $a_n=\frac{f^{(n)}(c)}{n!}$.


**Proof 2 (Using Integration by Parts):**


We have


$$
f(x)-f(0)=\int_0^xf'(t)dt.
$$


Now, we use the integration by part. We set the following:


$$
\begin{align*}
u = f'(x),\quad &dv=dt\\\\
du= f''(x),\quad &v=-(x-t)
\end{align*}
$$


Writing $v$ in this format is special. However, this setup yields the following:


$$
\begin{align*}
\int_0^xf'(t)dt&=-(x-t)f'(t)\bigg|^x_0+\int^x_0 (x-t)f''(t)dt\\\\
&=f'(0)x+\int^x_0 (x-t)f''(t)dt
\end{align*}
$$


Similarly, we let $u=f''(t)$ and $dv=(x-t)dt$, and so we have $du=f^{(3)}(t)dt$ and $v=\frac{-(x-t)^2}{2}$. It implies


$$
\int_0^x(x-t)f''(t)dt = \frac{-(x-t)^2}{2}f''(t)\bigg|_0^x+\int_0^x\frac{-(x-t)^2}{2}f^{(3)}(t)dt.
$$


Putting all of these together, we have


$$
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\int_0^x\frac{(x-t)^2}{2}f^{(3)}(t)dt.
$$


By repeating this process, we prove the formula.


## Motivation of Taylor Expansion


The Taylor Expansion is motivated by the idea of approximating complex functions with polynomials. The underlying concept is that polynomials are easy to work with, and by adding more terms to our series, we can get closer and closer to the actual function.


This allows us to estimate the values of functions, such as trigonometric functions, at angles that are neither special angles nor deducible by trigonometric identities, e.g., $\cos(1)$.


## Maclaurin Series of Basic Functions


### Use the formula

1. $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$ (Since the $n$th derivative of $e^x$ is $e^x$, so $C_n=\frac{1}{n!}$ by the formula.)
2. $\sin(x) = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (Observe the derivative of $\sin(x)$, which has period $4$, and we can deduce the Maclaurin series.)
3. Binomial expansion $\displaystyle(1+x)^\alpha=\sum_{n=0}^\infty\binom{\alpha}{n}x^n$ where $\binom{\alpha}{n}=\frac{\alpha(\alpha-1)\cdot(\alpha-2)\cdots(\alpha-n+1)}{n!}$.

### Use the known Maclaurin series

1. By taking the derivative of both sides of the sine function and its power series, we obtain the Maclaurin series for $\cos(x) = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}$ .
2. By taking the derivative of $\ln(1+x), $ we have $\frac{1}{1+x}$ which has the Maclaurin series

	$$
	\frac{1}{1+x}=\sum_{n=0}^\infty(-x)^n
	$$


	Therefore, the Maclaurin series for $\ln(1+x)$ can be derived by integrating both sides of the above equation, that is


	$$
	\begin{align*}
	\ln(1+x)&=\int_0^x\frac{1}{1+t}dt = \int_0^x\sum_{n=0}^\infty(-1)^nt^ndt\\\\
	&=\sum_{n=0}^\infty\int_0^x(-1)^nt^ndt = \sum_{n=0}^\infty(-1)^n\frac{t^{n+1}}{n+1}dt
	\end{align*}
	$$

3. The derivative of $\arctan(x)$ is $\frac{1}{1+x^2}$, we can use the similar manner to derive the Maclaurin series for $\arctan(x)$. That is

	$$
	\begin{align*}
	\arctan(x)&=\int_0^x\frac{1}{1+t^2}dx=\int_0^x\sum_{n=0}^\infty(-t^2)dt\\\\
	&=\sum_{n=0}^\infty\int_0^x(-1)^nt^2dt = \sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}.
	\end{align*}
	$$


### Table of Maclaurin Series of Basic Functions


| Function                                                                   | Maclaurin Series                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| $\frac{1}{1+x}$                                                            | $\displaystyle\sum_{n=0}^\infty x^n$                                                       |
| $\frac{d}{dx}\left(\frac{1}{1+x}\right)=\frac{1}{(1+x)^2}$                 | $\displaystyle\sum_{n=0}^\infty (n+1)x^{n}$                                                |
| $\frac{-1}{2}\frac{d^2}{dx^2}\left(\frac{1}{1+x}\right)=\frac{1}{(1+x)^3}$ | $\displaystyle\sum_{n=0}^\infty\frac{-1}{2}(n+2)(n+1)x^n$                                  |
| $e^x$                                                                      | $\displaystyle\sum_{n=0}^\infty \frac{x^n}{n!}$                                            |
| $\sin(x)$                                                                  | $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}$                           |
| $\cos(x)$                                                                  | $\displaystyle\sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}$                               |
| $\ln(1+x)$                                                                 | $\displaystyle\sum_{n=0}^\infty(-1)^n\frac{x^{n+1}}{n+1}$                                  |
| $\arctan(x)$                                                               | $\displaystyle\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}$                                |
| $\arcsin(x)$                                                               | $\displaystyle\sum_{n=0}^\infty \frac{1}{4^n}\binom{2n}{n} \frac{x^{2n+1}}{2n+1}$          |
| $\arccos(x)$                                                               | $\displaystyle\frac{\pi}{2} - \sum_{n=0}^\infty \binom{2n}{n} \cdot \frac{x^{2n+1}}{2n+1}$ |

undefined