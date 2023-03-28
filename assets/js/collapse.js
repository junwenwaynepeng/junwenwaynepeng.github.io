const collapseBtn = document.querySelector('.collapse-btn');
const collapseContent = document.querySelector('.collapse-content');

collapseBtn.addEventListener('click', function() {
  collapseContent.classList.toggle('show');
  collapseContent.innerHTML = 'Hide Answer'
});
