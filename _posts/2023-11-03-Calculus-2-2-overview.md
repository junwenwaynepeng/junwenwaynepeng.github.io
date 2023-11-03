---
title: The Fundamental Theorem of Calculus
subtitle: 
tags: [calculus, calculus-2, overview]
sagecell: true
head-package:
  -
    file: "package/pyscript.html"
pyenv:
  - matplotlib
  - matplotlib_venn

---

<div id='venndiagram'></div>
<py-script output='venndiagram'>
import matplotlib.pyplot as plt
from matplotlib_venn import venn2

venn2(subsets = (10, 5, 2), set_labels = ("Group A", "Group B"))
plt.show()
</py-script>