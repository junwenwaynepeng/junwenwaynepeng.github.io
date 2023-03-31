---
title: Calculus 3 Worksheet 2
subtitle: Second Order Test and Lagrange Multipliers
tags: ["Calculus 3", "worksheet"]
sagecell: true
customjs:
  - ../assets/js/chatgpt/2023-03-20-0.js
  - ../assets/js/chatgpt/2023-03-20-1.js
  - ../assets/js/chatgpt/2023-03-20-2.js
  - ../assets/js/chatgpt/2023-03-20-3.js
  - ../assets/js/chatgpt/2023-03-20-4.js
---
1. In the following, we will guide you step-by-step through the process of finding the best-fitting exponential function $f(x) = e^{mx} + k$ for the set of data points $\{(0,2),(1,3),(2,5),(4,6)\}$ using the method of least squares.
  * First, we will define the error function $E(m,k)$ (Hint: $E(m,k)=\sum_{i=1}^4(f(x_i)-y_i)^2$ where $(x_i,y_i)$ is a data point).
  * Second, we will set up a system of equations by assuming that the gradient of $E(m,k)$ is the zero vector. Can you explain why we need to do this? You don't need to solve the equation.
  * Third, we will compute the discriminant $D(x,y)$ of $E(m,k)$. Can you explain how you plain to use $D(x,y)$ if you solve the system of equations above.
  * In the following, we will use python to solve $(m,k)$. Read the following code and modified to what you need. 
      <div class="compute">
      vars = var("x y z")                                 # tell your computer to set x, y, and z to be variable
    f = 100*(y-x^2)^2 + (1-x)^2+100*(z-y^2)^2 + (1-y)^2 # set-up functions
    minimize(f, [0.1, 0.3, 0.4])                        # find (a,b,c) such that f(a,b,c) is a minimum of $f$.  
      </div>

    * The ```[0.1, 0.3, 0.4]``` is some randomly pick initial value. And, we can randomly choice one in this situation. For more details about ```minimize```, please refer to this [document](https://doc.sagemath.org/html/en/reference/numerical/sage/numerical/optimize.html#sage.numerical.optimize.minimize).
    * There are different algorithms to find extreme values of a function. The most basic version of these algorithms is [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method).
  * (A challenge question) Make your code as general as possible. You can start by making a code that can find the best-fitting exponential function for any given set of data.

2. In this question, we will make sense of the equation
$$\nabla g(x,y) = \lambda\nabla f(x,y)$$
in the theorem of Lagrange multipliers.

  * Use the theorem of Lagrange multipliers to find the critical point of $z=xy$ with $x^2+y^2=1$.
  * Draw the constraint $x^2+y^2=1$ and the level curve of $z=xy$ that passes through a critical point on the same coordinate system.
  * Observe and explain what you see in the above graph.
  * Interpret your observation using gradients. (Hint: a key word is "parallel.") Now you can see why the equation makes sense.

---

## Answer
<details>
  <summary> Expand </summary>
 
1. 
  * $E(m,k) = (e^{0}+k-2)^2 + (e^{m}+k-3)^2 + (e^{2m}+k-5)^2 +(e^{4m}+k-6)$.
  * If a local extreme value happens at a point on a surface, then the tangent plain at the point will be parallel to the $xy$-plain, i.e. the derivative along $x$-axis and $y$-axis are zeros.
  * We will plugin the critical points that we found in the second step to $D(x,y)$ and $\frac{\partial^2 f}{\partial x^2}$ and see if they are positive, negative, or zero. Then, we use the second order test to determine if the points are maximum, minimum, or saddle.
  * code:
      ```python
      vars = var('m k')
      f = (e^{0}+k-2)^2 + (e^{m}+k-3)^2 + (e^{2m}+k-5)^2 +(e^{4m}+k-6)
      minimize(f, [0.1, 0.3])
      ```
  * code:
      ```python
      vars = var('m k')
      initial_vector = [(0, 0)]
      point_list = [(0, 2),(1, 3),(2, 5),(4, 6)]
      f = 0
      for x, y in point_list:
        f = f + (e^(x*m) +k - y)^2
      minimize(f, initial_vector)
      ```

2. 
  * Let us set up the system of equations.\
  $$
  \begin{cases}
    y = \lambda 2x,\\\\
    x = \lambda 2y,\\\\
    x^2+y^2=1
  \end{cases}
  $$
  By dividing the first equation over the second equation, the system of equations becomes
  $$
  \begin{cases}
  \frac{y}{x} = \frac{x}{y},\\\\
  x^2+y^2=1
  \end{cases}
  $$
  This one is easy to solve, and we will get $x=\pm\frac{1}{\sqrt{2}}$ and $y=\pm\frac{1}{\sqrt{2}}$.
  * A level curve that passes throught one of the critical points is $\frac{1}{2}=xy$, and the other one is $-\frac{1}{2}=xy$. See the following for graph.
      <div class="compute">
      vars = var("x y")                                     # tell your computer to set x and y as variables
    constrain = implicit_plot(x^2+y^2-1, (x,-4,4), (y,-4,4), color="red")     # draw x^2+y^2=1
    level_curve_1 = implicit_plot(x*y-1/2, (x,-4,4), (y,-4,4), color="blue")  # draw a level curve
    level_curve_2 = implicit_plot(x*y+1/2, (x,-4,4), (y,-4,4), color="green") # draw another level curve
    (constrain+level_curve_1+level_curve_2).show()        # print out those curves
      </div>
  * The level curves and the constraint are tangent at the points where they have extreme values.
  * At a critical point on the constraint, the gradient of the level curve and the gradient of the constraint are parallel since the tangent line of the constraint and a level curve at a point with an extreme value are the same. It deduces the desired equation
  $$
  \nabla f =\lambda\nabla g.
  $$
</details>

---

## OpenAI Answer Check (Beta)
API Key: You can get your key by following the following steps [link](https://mrtang.tw/blog/post/how-to-apply-for-a-chatgpt-api-key)
<input type="text" id="api-key" name="api-key">



Your answer of 1-1: <input type="text" id="1-1" name='1-1'><button onclick="openai_0()">Submit</button><br>
<div id="result-box-1-1">ChatGPT will show your is correct or not</div>
Your answer of 1-2: <input type="text" id="1-2" name='1-2'><button onclick="openai_1()">Submit</button><br>
<div id="result-box-1-2">ChatGPT will show your is correct or not</div>
Your answer of 1-3: <input type="text" id="1-3" name='1-3'><button onclick="openai_2()">Submit</button><br>
<div id="result-box-1-3">ChatGPT will show your is correct or not</div>
Your answer of 1-4: <input type="text" id="1-4" name='1-4'><button onclick="check4()">Submit</button><br>
<div id="result-box-1-4">ChatGPT will show your is correct or not</div>


2-1: See our lecture note<br>
2-2: You can use GeoGebra on this task<br>
Your answer of 2-3: <input type="text" id="2-3" name='2-3'><button onclick="openai_3()">Submit</button><br>
<div id="result-box-2-3">ChatGPT will show your is correct or not</div>
Your answer 2-4: <input type="text" id="2-4" name='2-4'><button onclick="openai_4()">Submit</button>
<div id="result-box-2-4">ChatGPT will show your is correct or not</div>

