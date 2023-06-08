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

var time = 61; 
var answerSet = [];
var correct = 0;
var incorrect = 0; //If incorrect > 0 then it will minus 10 seconds 
var questionNumber = 1;
var timeCondition = false;


// answers
var answer1 = ["commas", "quotes", "curly brackets", "parenthesis"];
var answer2 = ["alerts", "strings", "booleans", "numbers"];
var answer3 = ["quotes;", "curly brackets", "parenthesis", "nothing"];
var answer4 = ["number and strings", "all of the above", "none of the above", "booleans"];
var answer5 = ["console.log","javascript", "Domain Object Methods", "for loops"];

function displayQuestion() {
    li1.textContent = answerSet[0];
    li2.textContent = answerSet[1];
    li3.textContent = answerSet[2];
    li4.textContent = answerSet[3];
  
answerEl.appendChild(li1);
answerEl.appendChild(li2);
answerEl.appendChild(li3);
answerEl.appendChild(li4);
}

var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");



li1.setAttribute("class", "answer-btn");
li2.setAttribute("class", "answer-btn");
li3.setAttribute("class", "answer-btn");
li4.setAttribute("class", "answer-btn");

// starts timer 
startEl.addEventListener("click", function () {
    setTime();
    generateQuestion();
    gameEndEl.style.display = "none";
    questionDiv.style.display = "block";
  }, 1000);
  


function setTime() {
    var timerInterval = setInterval(function () {
      time--;
      timerEl.textContent = time + " :Seconds Remaining";
    if (time === 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "";
        gameOver();
      }
  
    if (questionNumber > 6) {
        clearInterval(timerInterval); 
        timerEl.textContent = "";
        gameOver();
      }
//   adds time if wrong
    if (incorrect > 0 && timeCondition) {
        time = time - 10;
        timeCondition = false; 
      }
    }, 1000);
  }
  

li1.addEventListener("click", function () {
    if (li1.textContent === "quotes" || li1.textContent === "alerts" || li1.textContent === "parenthesis" || li1.textContent === "all of the above" || li1.textContent === "console.log") {
      correct += 1;
      questionNumber++;
      generateQuestion();
    } else {
      incorrect += 1;
      questionNumber++;
      timeCondition = true; //this is to run the -10 seconds from the timer.
      generateQuestion();
    }
  
  }, 1000);
  
li2.addEventListener("click", function () {
    if (li2.textContent === "alerts" || li2.textContent === "parenthesis" || li2.textContent === "all of the above" || li2.textContent === "console.log") {
      correct += 1;
      questionNumber++;
      generateQuestion();
    } else {
      incorrect += 1;
      questionNumber++;
      timeCondition = true;
      generateQuestion();
    }
  }, 1000);
  
li3.addEventListener("click", function () {
    if (li3.textContent === "quotes" || li3.textContent === "alerts" || li3.textContent === "parenthesis" || li3.textContent === "all of the above" || li3.textContent === "console.log") {
      correct += 1;
      questionNumber++;
      generateQuestion();
    } else {
      incorrect += 1;
      questionNumber++;
      timeCondition = true;
      generateQuestion();
    };
  }, 1000);
  
li4.addEventListener("click", function () {
    if (li4.textContent === "quotes" || li4.textContent === "alerts" || li4.textContent === "parenthesis" || li4.textContent === "all of the abover" || li4.textContent === "console.log") {
      correct += 1;
      questionNumber++;
      generateQuestion();
    } else {
      incorrect += 1;
      questionNumber++;
      timeCondition = true;
      generateQuestion();
    }
  }, 1000);
  


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
  
  
    }};
function gameOver() {
startDiv.style.display = "none"; 
gameEndEl.style.display = "block"; 
questionDiv.style.display = "none"; 
scores();
}
      
function scores() {
//Puts the amount into local storage
localStorage.setItem("score", correct);
finalScoreEl.textContent = "Your final Score is: " + correct;
      }
      
//submits the score
submitScoreBtnEl.addEventListener("click", function (event) {
event.preventDefault();
      
//input field initials
var enteredInitials = document.querySelector("#initials").value;
      
if (enteredInitials === "") {
    alert("Error Initials cannot be blank");
    return;
    } 
var retrieveInitials = localStorage.getItem("initials");
var newInitials = enteredInitials + "-" + correct;
      
if(retrieveInitials) {
newInitials += ", " + retrieveInitials;
}
      
//Save Initials to local storage to be used in view Highscore
localStorage.setItem("initials", newInitials);})
highScoreBtnEl.addEventListener("click", function() {
scoreEl.style.display = "block";
var retrieveInitials1 = localStorage.getItem("initials");
displayInitEl.textContent = retrieveInitials1;
  });
    
      
mainEl.addEventListener("click", function() {
    location.reload();
})  


// need to add code that hides the game over and high scores till the end