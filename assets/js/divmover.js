document.addEventListener("DOMContentLoaded", function(event) {
  var questions = document.querySelectorAll(".question");
  for (var i = 0; i < questions.length; i++) {
    var pk = questions[i].id;
    var target = document.getElementById(pk + "-question");
    if (target) {
      target.innerHTML = questions[i].innerHTML;
    }
  }
  var answers = document.querySelectorAll(".answer");
  for (var i = 0; i < answer.length; i++) {
    var pk = answer[i].id;
    var target = document.getElementById(pk + "-answer");
    if (target) {
      target.innerHTML = answers[i].innerHTML;
    }
  }
});