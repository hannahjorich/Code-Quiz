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

var score = 0;
var index = 0;
var correct = [];

// declare variables 
var timer = document.querySelector("#startTime");
var questionsTitle = document.getElementById('question-title');
var wrapper = document.querySelector("#wrapper");
var startButton = document.getElementById ('startTime');
var questionCard = document.getElementById ('question-card');
var choicesEL = document.getElementById ('choices-box');
var countdownEl = document.querySelector("#currentTime");
var feedbackEl = document.getElementById("feedback");
var currentQuestion = questions[index]


function startGame() {
    var startCard = document.getElementById("start-card");
    startCard.setAttribute("class", "hide");

    questionCard.removeAttribute("class", "hide");


    buildQuestionCard()
    startTimer()



function buildQuestionCard() {
    var currentQuestion = questions[index]

        questionsTitle.textContent = currentQuestion.title
    
    choicesEL.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = choice;
        choicesEL.appendChild(choiceBtn);
        choiceBtn.onclick = questionClick;


    })
    
}

function questionClick(){
    // console.log(this.value);
    if (this.value === questions[index].answer) {
        console.log("correct");
        feedbackEl.setAttribute("class", "right");
        feedbackEl.setAttribute("style", "visibility: visible;");
        feedbackEl.textContent = "Correct!"; // "Right!" is displayed on the screen
        // secondsLeft += 10; // 10 seconds is added to the timer
    } else {
        console.log("wrong");
        feedbackEl.setAttribute("class", "wrong");
        feedbackEl.setAttribute("style", "visibility: visible;");
        feedbackEl.textContent = "Wrong"; // "Wrong" is displayed on the screen
        // secondsLeft -= 10; // 10 seconds is subtracted from the timer
      }
      index++
      if (index === questions.length) {
        gameOver();
      } else {
        buildQuestionCard();
      }
}




function startTimer() {

    timeLeft = 75;
        timerInterval = setInterval(function () {
        countdownEl.textContent = timeLeft;
        timeLeft--;
        (countdownEl.textContent = timeLeft);
        // console.log(timeLeft);
        if (timeLeft === 0) {

            endGame();
        }
        // timeLeft--10);
    }, 1000);
    console.log(timeLeft);
}

}
startButton.addEventListener ('click', startGame);