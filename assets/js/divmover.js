document.addEventListener("DOMContentLoaded", function(event) {
  var questions = document.querySelectorAll(".question");
  for (var i = 0; i < questions.length; i++) {
    var pk = questions[i].id;
    var target = document.getElementById("question-" + pk);
    if (target) {
      target.innerHTML = questions[i].innerHTML;
    }
  }
  var answers = document.querySelectorAll(".answer");
  for (var i = 0; i < answers.length; i++) {
    var pk = answers[i].id;
    var target = document.getElementById("answer-" + pk);
    if (target) {
      target.innerHTML = answers[i].innerHTML;
    }
  }
});