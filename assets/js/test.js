

fetch('./chatgpt/template')
  .then(response => response.text())
  .then(text => {
    document.getElementById('test').innerHTML = text;
  });