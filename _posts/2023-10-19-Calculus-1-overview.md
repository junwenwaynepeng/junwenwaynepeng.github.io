---
title: Mindmap of Calculus 1
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
mermaid: true
---

```mermaid
%%{init: {"flowchart":{"useMaxWidth": 0}}}%%
flowchart LR;
    Limit[<a herf='../books/calculus/1-definition-of-limit'>Definition of Limit</a>];
    LimitLaw[<a herf='../books/calculus/1-1-how-to-evaluate-limits#limit-laws'>Limit laws</a>];
    LimitTech[<a herf='../books/calculus/1-1-how-to-evaluate-limits#algebraic-tricks'>Useful algebraic techniques of evaluating limits</a>];
    Squeeze[<a herf='../books/calculus/1-1-how-to-evaluate-limits#the-squeeze-theorem'>The squeeze theorem</a>];
    LHopital[<a herf='../books/calculus/1-1-how-to-evaluate-limits#lhopital-rule'>L'Hopital Rule</a>];
    Asymptote[<a href='../books/calculus/1-2-asymptotes'>Vertical asymptote
    Horizontal asymptote
    Slant asymptote</a>];
    Continuity[<a herf='../books/calculus/2-definition-of-continuity'>Definition of continuity</a>];
    EVT[<a herf='../books/calculus/2-1-theorems-assuming-continuity#EVT'>Extreme value theorem</a>];
    IVT[<a herf='../books/calculus/2-1-theorems-assuming-continuity#IVT'>Intermediate value theorem</a>];
    Diff[<a herf='../books/calculus/3-definition-of-derivative'>Definition of derivative</a>];
    BasicFunction[<a herf='../books/calculus/3-1-how-to-do-derivative#derivatives-of-basic-functions'>Derivative of basic functions</a>];
    BasicRules[<a herf='../books/calculus/3-1-how-to-do-derivative#differential-rules'>Differentiation v.s. operation of functions</a>];
    ImplicitDiff[<a herf='../books/calculus/3-1-how-to-do-derivative#implicit-differentiation'>Implicit Differentiation</a>];
    DiffInverse[<a herf='../books/calculus/3-1-how-to-do-derivative#derivatives-of-inverse-functions'>Derivatives of inverse functions</a>];
    LogDiff[<a herf='../books/calculus/3-1-how-to-do-derivative#logarithmetic-differentiation'>Logarithmetic Differentiation</a>];
    Fermat[<a herf='../books/calculus/3-2-theorems-assuming-differentiability#fermats-theorem>Fermat's theorem</a>];
    Roll[<a herf='../books/calculus/3-2-theorems-assuming-differentiability#rolls-theorem>Roll's theorem</a>];
    MVT[<a herf='../books/calculus/3-2-theorems-assuming-differentiability#the-mean-value-theorem>Mean value theorem</a>];
    CriticalPt[<a herf='../books/calculus/3-2-theorems-assuming-differentiability#critical-points>Critical points</a>];
    TangentLine[<a herf='../books/calculus/3-3-application-of-differentiation#tangent-lines'>Tangent Lines</a>];
    LinearApprox[<a herf='../books/calculus/3-3-application-of-differentiation#linear-approximation>Linear Approximation</a>];
    RelatedRate[<a herf='../books/calculus/3-3-application-of-differentiation#related-rate>Related Rate</a>];
    CurveSketch[<a herf='../books/calculus/3-3-application-of-differentiation#curve-sketch>Curve Sketch</a>];
    ExtremeValue[<a herf='../books/calculus/3-3-application-of-differentiation#extreme-values>Extreme Values</a>];
    InflectionPt[<a herf='../books/calculus/3-3-application-of-differentiation#inflection-points>Inflection Points</a>];
    Increasing[<a herf='../books/calculus/3-3-application-of-differentiation#increasing-and-decreasing-intervals>Increasing and Decreasing Intervals</a>];
    Concavity[<a herf='../books/calculus/3-3-application-of-differentiation#concavity>Concave and Convex</a>];
    OptimizationProblem[<a herf='../books/calculus/3-3-application-of-differentiation#optimization-problem>Optimization Problem</a>];
    subgraph LimitApplication [Application of limit];
      direction LR;
      Asymptote;
      Continuity;
      Diff;
    end;
    Limit-->LimitApplication;
    subgraph LimitHow [Evaluatate a limit];
      direction LR;
      LimitLaw;
      LimitTech;
      Squeeze;
      LHopital;
    end;
    Limit-->LimitHow;
   
    subgraph ContinuityTheorems [Theorems assume continuity];
      direction TB;
      EVT;
      IVT;
    end;
    Continuity-->ContinuityTheorems;
    subgraph DiffTheorems [Theorems assume differentiability];
      direction BT;
      Fermat-->Roll-->MVT;
      Fermat-->CriticalPt;
    end;
    subgraph DiffHow [How to take differentiation?];
      direction TB;
      BasicFunction & BasicRules-->ImplicitDiff;
      ImplicitDiff-->DiffInverse & LogDiff;
    end;
    Diff-->DiffHow;
    
    subgraph DiffApplication [What applications use differentiation?];
      direction TB;
      TangentLine-->LinearApprox;
      RelatedRate~~~Increasing & Concavity;
      Increasing & Concavity-->CurveSketch;
      InflectionPt & ExtremeValue --> CurveSketch;
      Increasing-.->|The first derivative test|ExtremeValue;
      Concavity-.->|The second derivative test|ExtremeValue;
      Concavity-->InflectionPt
      ExtremeValue-->OptimizationProblem;
      Concavity-.->LinearApprox
    end;
    Diff-->DiffApplication;
    ImplicitDiff-.->TangentLine;
    ImplicitDiff-.->RelatedRate;
    Asymptote-->CurveSketch;
    CriticalPt-->ExtremeValue;
    EVT-.->ExtremeValue;
    Diff-->DiffTheorems;
    EVT-->Fermat;        
    LHopital<-.-DiffApplication;
```