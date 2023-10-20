---
title: logarithmetic differentiation, Review, and Related Rate
subtitle: 
tags: [calculus, calculus-1, overview]
sagecell: true
head-package:
  -
    file: "package/sagecell.html"
mermaid: true
---

```mermaid
flowchart TB;
    Limit["Definition of Limit"];
    LimitLaw["Limit laws"];
    LimitTech["Useful algebraic techniques of evaluating limits"]
    Squeeze["The squeeze theorem"];
    LHopital["L'Hopital Rule"];
    Asymptote["Vertical asymptote
    Horizontal asymptote
    Slant asymptote"];
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

    subgraph LimitHow [Evaluatate a limit];
      direction LR;
      LimitLaw~~~LimitTech;
      LimitTech~~~Squeeze;
      Squeeze-->LHopital;
    end;
    Limit-->LimitHow;
    subgroup LimitApplication [Application of limit];
      direction LR;
      Asymptote~~~Continuity;
      Continuity~~Diff;
    end;
```