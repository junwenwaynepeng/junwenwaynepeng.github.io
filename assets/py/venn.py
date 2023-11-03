import matplotlib.pyplot as plt
from matplotlib_venn import venn3

set1 = set(['V', 'C', 'N'])
set2 = set(['C', 'J'])
set3 = set(['J'])
venn3([set1, set2, set3], ('Antiderivatives', 'integrable', ''))
plt.show()

set1 = set(['A', 'B', 'C', 'D'])
set2 = set(['B', 'C', 'D', 'E'])
set3 = set(['C', 'D',' E', 'F', 'G'])

venn3([set1, set2, set3], ('Set1', 'Set2', 'Set3'))
plt.show()