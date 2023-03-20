---
itle: Calculus 3 Worksheet 1
subtitle: Second Order Test and Lagrange Multipliers
tags: ["Calculus 3", "worksheet"]
customjs:
  - ../assets/js/chatgpt/2023-03-20-1.js
  - ../assets/js/chatgpt/2023-03-20-2.js
---
1. In the following, we will guide you step-by-step through the process of finding the best-fitting exponential function $f(x) = e^{mx} + k$ for the set of data points $\{(0,2),(1,3),(2,5),(4,6)}\$ using the method of least squares.
  * First, we will define the error function $E(m,k)$ (Hint: $E(m,k)=\sum_{i=1}^4(f(x_i)-y_i)$ where $(x_i,y_i)$ is a data point).
  * Second, we will set up a system of equations by assuming that the gradient of $E(m,k)$ is the zero vector. Can you explain why we need to do this? You don't need to solve the equation.
  * Third, we will compute the discriminant $D(x,y)$ of $E(m,k)$. Can you explain how you plain to use $D(x,y)$ if you solve the system of equations above.
  * In the following, we will use python to solve $(m,k)$. Read the following code and modified to what you need. 
    <div class="sage">
      <script type="text/x-sage">
vars = var('x y z')                             # tell your computer to set x, y, and z to be variable
f = 100*(y-x^2)^2+(1-x)^2+100*(z-y^2)^2+(1-y)^2 # set-up functions
minimize(f, [0.1, 0.3, 0.4])                    # find (a,b,c) such that f(a,b,c) is a minimum of $f$.  
      </script>
    </div>

    * The `[0.1, 0.3, 0.4]` is some randomly pick initial value. And, we can randomly choice one in this situation. For more details about `minimize`, please refer to this [document](https://doc.sagemath.org/html/en/reference/numerical/sage/numerical/optimize.html#sage.numerical.optimize.minimize).
    * There are different algorithms to find extreme values of a function. The most basic version of these algorithms is [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method).
  * (A challenge question) Make your code as general as possible. You can start by making a code that can find the best-fitting exponential function for any given set of data.

2. In this question, we will make sense of the equation
[ \nabla g(x,y) = \lambda\nabla f(x,y)]
in the theorem of Lagrange multipliers.

  * Use the theorem of Lagrange multipliers to find the critical point of $z=xy$ with $x^2+y^2=1$.
  * Draw the constraint $x^2+y^2=1$ and the level curve of $z=xy$ that passes through a critical point on the same coordinate system.
  * Observe and explain what you see in the above graph.
  * Interpret your observation using gradients. (Hint: a key word is "parallel.") Now you can see why the equation makes sense.

## OpenAI Answer Check
<label for="api-key">API Key:</label>
<input type="text" id="api-key" name="api-key">

1. 
  Your answer of 1-1: <input type="text" id="1-1" name='1-1'><button onclick="check1()">Submit</button><br>
  <div id="result-box-1-1"><ChatGPT will show your is correct or not></div>
  Your answer of 1-2: <input type="text" id="1-2" name='1-2'><button onclick="openai_1()">Submit</button><br>
  <div id="result-box-1-2"><ChatGPT will show your is correct or not></div>
  Your answer of 1-3: <input type="text" id="1-3" name='1-3'><button onclick="openai_2()">Submit</button>
  <div id="result-box-1-3"><ChatGPT will show your is correct or not></div>
  Your answer of 1-4: <input type="text" id="1-4" name='1-4'><button onclick="check4()">Submit</button>
  <div id="result-box-1-4"><ChatGPT will show your is correct or not></div>

2. 
  2-1: See our lecture note
  2-2: You can use GeoGebra on this task
  Your answer of 2-3: <input type="text" id="2-3" name='2-3'><button onclick="openai_3()">Submit</button><br>
  <div id="result-box-2-3"><ChatGPT will show your is correct or not></div>
  Your answer 2-4: <input type="text" id="2-4" name='2-4'><button onclick="openai_4()">Submit</button>
  <div id="result-box-2-4"><ChatGPT will show your is correct or not></div>

