// calls for program game
var timerEl = document.getElementById("timer");
var startDiv = document.getElementById("start");
var questionEl = document.getElementById("question");
var questionDiv = document.getElementById("question-div");
var answerEl = document.getElementById("answer");
var startEl = document.getElementById("start-btn");
var scoreEl = document.getElementById("view-scores");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var gameEndEl = document.getElementById("game-over");

// after game calls
var highScoreBtnEl = document.getElementById("view-scores-btn");
var clearScoreBtnEl = document.getElementById("clear-scores-btn");
var submitScoreBtnEl = document.getElementById("submit-score-btn");
var displayInitEl = document.getElementById("display-initials");
var displayScoreEl = document.getElementById("display-score");
var highScoreLink = document.getElementById("view-scores-link");
var mainEl = document.getElementById("main-screen");






// questions
function generateQuestion() {
    if (questionNumber === 1) {
      questionEl.textContent = "1. String values must be enclosed within ______ when being assigned to variables.";
      answerSet = answer1.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
    }
  
    if (questionNumber === 2) {
      questionEl.textContent = "2. Commonly used data types DO Not Include: ";
      answerSet = answer2.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
    }
  
    if (questionNumber === 3) {
  
      questionEl.textContent = "3. The condition in an if/else statement is enclosed with ______.";
      answerSet = answer3.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
  
    }
  
    if (questionNumber === 4) {
      questionEl.textContent = "4. Arrays in JavaScript can be used to store _________ ";
      answerSet = answer4.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
  
    }
  
    if (questionNumber === 5) {
      questionEl.textContent = "5. A very useful tool used during development and debugging for printing content to the debugger is:"
      answerSet = answer5.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
  
  
    }
  
    if (questionNumber === 6) {
      questionEl.textContent = "6. What div is this statement accessing document.getElementByID('start-btn');? _______"
      answerSet = answer6.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
      displayQuestion();
  
    }
  }
  