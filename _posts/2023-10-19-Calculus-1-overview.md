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
    LimitTech["Useful algebraic techniques of evaluating limits"];
    Squeeze["The squeeze theorem"];
    LHopital["L'Hopital Rule"];


    subgraph LimitHow [Evaluatate a limit];
      direction LR;
      LimitLaw~~~LimitTech;
      LimitTech~~~Squeeze;
      Squeeze-->LHopital;
    end;
```
    Limit-->LimitHow;
    subgroup LimitApplication [Application of limit];
      direction LR;
      Asymptote~~~Continuity;
      Continuity~~Diff;
    end;
    Limit-->LimitApplication;
    subgraph ContinuityTheorems [Theorems assume continuity];
      direction LR;
      EVT~~~IVT;
    end;
    Continuity-->ContinuityTheorems;
    subgraph DiffHow [How to take differentiation?];
      direction LR;
      BasicFunction & BasicRules-->ImplicitDiff;
      ImplicitDiff-->DiffInverse & LogDiff;
    end;
    Diff-->DiffHow;
    subgroup DiffApplication [What applications use differentiation?];
      direction LR;
      TangentLine-->LinearApprox;
      RelatedRate~~~Increasing & Concavity;
      Increasing & Concavity-->CurveSketch;
      CriticalPt-->ExtremValue;
      InflectionPt & ExtremeValue --> CurveSketch;
      Increasing-->|The first derivative test|ExtremeValue;
      Concavity-->|The second derivative test|ExtremeValue;
      ExtremeValue-->OptimizationProblem;
    end;
    Diff-->DiffApplication;
    ImplicitDiff-.->TangentLine;
    ImplicitDiff-.->RelatedRate;
    Asymptote-->CurveSketch;
    subgroup DiffTheorems [Theorems assume differentiability];
      direction LR;
      Fermat-->Roll-->MVT;
      Roll-->MVT;
    end;
    Fermat-->CriticalPt;
    Diff-->DiffTheorems;