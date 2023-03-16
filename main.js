function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //Show Choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var ele = document.getElementById("choice" + i);
      ele.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = () => {
    quiz.guess(guess);
    populate();
  };
}
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1 ;
  var element = document.getElementById("progress");
  element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;

}
function showScores() {
  var gameOverHtml = `<h1>Result</h1>`;
  gameOverHtml += `<h2 id="score">Your scores: ${quiz.score}</h2>`;
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question(
    "Which one is not an object oriented programming language?",
    ["Java", "C#", "C++", "C"],
    "C"
  ),
  new Question(
    "Which language is used for styling web pages?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "There are _____ main components of object oriented programmin.",
    [1, 6, 2, 4],
    4
  ),
  new Question(
    "Which language is used for web apps?",
    ["PHP", "Python", "Javascript", "All"],
    "All"
  ),
  new Question(
    "MVC is a _____.",
    ["Language", "Liberary", "Framework", "All"],
    "Framework"
  ),
];

var quiz = new Quiz(questions);

populate();
