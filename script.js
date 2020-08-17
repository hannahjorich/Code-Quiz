var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// Variables for quiz

// Start Screen variables
var startBtn = document.getElementById("start-btn");
var startScreenEl = document.getElementById("start-screen");
var questionCard = document.getElementById("question-card");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var rightWrongEl = document.getElementById("right-wrong");
var buttonsEL = document.getElementById("buttons");
var endScreen = document.getElementById("end-screen");
var initialsFormEl = document.getElementById("user-initials");
var initialsSubmit = document.getElementById("initials-submit")
var finalScoreEl = document.getElementById("final-score");
var highScoreScreen = document.getElementById("high-score-screen");

// Timer variable
var timerDisplay = document.getElementById("timer");


// Quiz variables
var index = 0;
var correct = [];
var secondsLeft = 60;
var timerInterval;

// starting quiz functions
function startQuiz() {
  startScreenEl.setAttribute("style", "display: none;"); // hiding the start screen
  buildQuestionCard(); // building the question card
  questionCard.setAttribute("style", "visibility: visible;"); // showing the question card
  startTimer(); // starting the timer when the button is pressed
}

// When start button is clicked, the quiz will begin!
startBtn.addEventListener("click", startQuiz);

// Building the question card
function buildQuestionCard() {
  let currentQuestion = questions[index];

  questionTitleEl.textContent = currentQuestion.title; // Putting each question in the title

  choicesEl.innerHTML = ""; // Creating space inside the 'choices' element

  currentQuestion.choices.forEach(function (choice, i) {
    const choices = document.createElement("button"); // creating buttons for each choice
    choices.setAttribute("class", "choice"); // setting class to choice to connect to css styling
    choices.setAttribute("value", choice); // setting inside value for each
    choices.textContent = choice; // displaying the text of each value
    choicesEl.appendChild(choices); // attaching each choice to one another
    choices.onclick = decisionClick; // registering "click" for user decicision
  });
}

// Determining function for user answer picks
function decisionClick() {
  // If user chooses the right answer...
  if (this.value === questions[index].answer) {
    console.log("correct");
    rightWrongEl.setAttribute("class", "right");
    rightWrongEl.setAttribute("style", "visibility: visible;");
    rightWrongEl.textContent = "Correct!"; // "Correct!" is displayed on the screen
    secondsLeft += 10; // 10 seconds is added to the timer

    // If user chooses the wrong answer...
  } else {
    console.log("wrong");
    rightWrongEl.setAttribute("class", "wrong");
    rightWrongEl.setAttribute("style", "visibility: visible;");
    rightWrongEl.textContent = "Wrong"; // "Wrong" is displayed on the screen
    secondsLeft -= 10; // 10 seconds is subtracted from the timer
  }
  index++;
  if (index === questions.length) {
    // if the user answers all of the questions..
    gameOver(); // ...the game ends...
  } else {
    // ...otherwise...
    buildQuestionCard(); // ...it continues.
  }
}

// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--; // decrements time left
    timerDisplay.textContent = secondsLeft; // displays remaining time on screen

    if (secondsLeft <= 0) {
      // if the timer is less than or equal to zero...
      clearInterval(timerInterval); // timer is clearned and...
      return gameOver(); // ..."Game Over" function is fired.
    }
  }, 1000);
}

// End Quiz Screen
function gameOver() {
  questionCard.setAttribute("style", "display: none;"); 
  endScreen.setAttribute("style", "visibility: visible;"); 
  clearInterval(timerInterval); 
  timerDisplay.textContent = 0; 
  if (secondsLeft < 0) {
    // preventing the time to go below zero
    secondsLeft = 0;
  }
  finalScoreEl.textContent = secondsLeft; 
}

// High Score Screen

initialsSubmit.addEventListener('submit', function(event) {
  event.preventDefault()
  finalScoreEl.innerHTML += '<li>' + initialsFormEl.value + ' ' + secondsLeft + "</li>";
  initialsFormEl.value = '';
  localStorage.setItem('highScoreList', finalScoreEl.innerHtml)
  // endScreen.setAttribute("style", "display: none;"); 
  highScoreScreen.setAttribute("style", "visibility: visible;"); 
}, false);

// Check for saved 

// Grab finalScore.EL + initialsFormEL 
localStorage.getItem('finalScoreEL')

//pull down the high scores an array and springifyJSON something that can be stored in my local storage 

// use JONparsit change it back to a javascript object and print the values to your high scores div using a for loop 

