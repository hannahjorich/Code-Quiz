// how do we start? 
// Set questions variables with arrays and objects 
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

// declare variables 
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsTitle = document.querySelector("#question-title");
var wrapper = document.querySelector("#wrapper");
var startButton = document.getElementById ('startTime');
var questionCard = document.getElementById ('question-card');
var choicesEL = document.getElementById ('choices-box');

function startGame() {
    var startCard = document.getElementById("start-card");
    startCard.setAttribute("class", "hide");

    questionCard.removeAttribute("class", "hide");

    buildQuestionCard()
}
function buildQuestionCard() {
var currentQuestion = questions[index]

    questionsTitle.textContent = currentQuestion.title

    choicesEL.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = choice;

        choiceBtn.onclick = questionClick;

        choicesEL.appendChild(choiceBtn);
    })
}

function questionClick(){
    console.log(this.value);
    index++
    buildQuestionCard()
}
// next step create if else statemens 
// create a timer attached to a button with a start value of 0 
// The timer needs to start when the user clicks start quiz 
// when the timer starts a reverse countdown of 75 happens 

// Store the users choices 
// When user selects the right answer, textcontent "Correct!"
// When user selects the right answer, textcontent "Wrong!"

startButton.addEventListener ('click', startGame);