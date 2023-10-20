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
    Limit["Definition of Limit"];
    LimitLaw["Limit laws"];
    LimitTech["Useful algebraic techniques of evaluating limits"];
    Squeeze["The squeeze theorem"];
    LHopital["L'Hopital Rule"];
    Asymptote[<a href='../books/calculus1/asymptote.md'>Vertical asymptote
    Horizontal asymptote
    Slant asymptote</a>];
    Continuity["Definition of continuity"];
    EVT["Extreme value theorem"];
    IVT["Intermediate value theorem"];
    Diff["Definition of derivative"];
    BasicFunction["Derivative of basic functions"];
    BasicRules["Differentiation v.s. operation of functions"];
    ImplicitDiff["Implicit Differentiation"];
    DiffInverse["Derivative of inverse functions"];
    LogDiff["Logarithmetic Differentiation"];
    TangentLine["Tangent Lines"];
    LinearApprox["Linear Approximation"];
    RelatedRate["Related Rate"];
    CurveSketch["Curve Sketch"];
    CriticalPt["Critical points"];
    ExtremeValue["Extreme Values"];
    InflectionPt["Inflection Points"];
    Increasing["Increasing and Decreasing Intervals"];
    Concavity["Concave and Convex"];
    OptimizationProblem["Optimization Problem"];
    Fermat["Fermat's theorem"];
    Roll["Roll's theorem"];
    MVT["Mean value theorem"];
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
      CriticalPt-->ExtremeValue;
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
    
    Fermat-->CriticalPt;
    Diff-->DiffTheorems;
    EVT-->Fermat
    DiffApplication-.->LHopital
```