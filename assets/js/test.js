

fetch('./assets/js/chatgpt/template.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('test').innerHTML = text;
  });