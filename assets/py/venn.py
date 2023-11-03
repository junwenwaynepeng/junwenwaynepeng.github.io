import matplotlib.pyplot as plt
from matplotlib_venn import venn2

venn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))
plt.show()