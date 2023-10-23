// An array of objects and are the question for the quiz.
var questions = [
    {
        question: "What are Media Queries?",
        A: "A way of including responsiveness on page size.",
        B: "A way of dynamically updating certain elements on webpage.",
        C: "A way of utilizing $ to refer to DOM elements",
        D: "A way of showing videos on a webpage",
        answer: "A",
        shown: false,
    },
    {
        question: "What is JQuery?",
        A: "Money",
        B: "Javascript library to make it easier to use Javascript.",
        C: "A way of including responsiveness on page size.",
        D: "Queries of the letter J.",
        answer: "B",
        shown: false,
    },
    {
        question: "What does CSS stand for?",
        A: "Cascading Super Sheets",
        B: "Create Support Stand",
        C: "Color Style Sheets",
        D: "Cascading Style Sheets",
        answer: "D",
        shown: false,
    }
  ];

var buttonStart = document.querySelector("#startQuiz");
var startContent = document.querySelector("#startContent");
var quizContent = document.querySelector("#quizContent");
var resultsContent = document.querySelector("#resultsContent");
var timer = document.querySelector("#timeLeft");

var time = 10;

function showQuiz(){

    var buttonList = document.querySelector("#choices"); // get section for button list
    buttonList.style.textAlign = "center";

    // find a random element in array
    var randomIndex = Math.floor(Math.random() * questions.length);


    var questionDisplay = document.getElementById("question");
    questionDisplay.innerHTML = questions[randomIndex].question; // show question
    questionDisplay.style.textAlign = "center";

    // create buttons and add content in buttons
    var buttonA = document.createElement("button");
    buttonA.textContent = questions[randomIndex].A;
    buttonA.classList.add("buttonStyle");
    buttonList.appendChild(buttonA);

    var buttonB = document.createElement("button");
    buttonB.textContent = questions[randomIndex].B;
    buttonB.classList.add("buttonStyle");
    buttonList.appendChild(buttonB);

    var buttonC = document.createElement("button");
    buttonC.textContent = questions[randomIndex].C;
    buttonC.classList.add("buttonStyle");
    buttonList.appendChild(buttonC);

    var buttonD = document.createElement("button");
    buttonD.textContent = questions[randomIndex].D;
    buttonD.classList.add("buttonStyle");
    buttonList.appendChild(buttonD);

    var validness = document.getElementById("validness");
    validness.style.textAlign = "center";
    validness.style.borderTop = "thick solid black";
    validness.style.padding = "30px";

    // create click events for each button
    buttonA.addEventListener("click", function() {
        // if clicked we know A
        if(questions[randomIndex].answer == "A"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
        }
    });
    buttonB.addEventListener("click", function() {
        // if clicked we know B
        if(questions[randomIndex].answer == "B"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
        }
    });
    buttonC.addEventListener("click", function() {
        // if clicked we know C
        if(questions[randomIndex].answer == "C"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
        }
    });
    buttonD.addEventListener("click", function() {
        // if clicked we know D
        if(questions[randomIndex].answer == "D"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
        }
    });


}

function showScore() {
    quizContent.style.display = "none";

    resultsContent.style.display = "block";
    resultsContent.style.textAlign = "center";

}

buttonStart.addEventListener("click", function() {

    //Don't show the start content
    startContent.style.display = "none";

    //Show the quiz content
    quizContent.style.display = "block";


    showQuiz(); // start showing the quiz!

// Sets timer 
  var timerInterval = setInterval(function() {
    time--;
    timer.textContent = time;

    if(time <= 0) {
      // stops the timer
      clearInterval(timerInterval);
      showScore();
    }

  }, 1000);

});