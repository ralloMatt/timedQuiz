// An array of objects and are the question for the quiz.
var questions = [
    {
        question: "What are Media Queries?",
        A: "A way of including responsiveness on page size.",
        B: "A way of dynamically updating certain elements on webpage.",
        C: "A way of utilizing $ to refer to DOM elements",
        D: "A way of showing videos on a webpage",
        answer: "A",
    },
    {
        question: "What is JQuery?",
        A: "Money",
        B: "Javascript library to make it easier to use Javascript.",
        C: "A way of including responsiveness on page size.",
        D: "Queries of the letter J.",
        answer: "B",
    },
    {
        question: "What does CSS stand for?",
        A: "Cascading Super Sheets",
        B: "Create Support Stand",
        C: "Color Style Sheets",
        D: "Cascading Style Sheets",
        answer: "D",
    }
  ];

var buttonStart = document.querySelector("#startQuiz"); // Start button
var startContent = document.querySelector("#startContent"); // Section with the start content 
var quizContent = document.querySelector("#quizContent"); // Section with the quiz content
var resultsContent = document.querySelector("#resultsContent"); // Section with the result content
var timer = document.querySelector("#timeLeft"); // The time in the upper right corner

var form = document.querySelector("#submitInitialsForm"); // form when user enters initials

var time = 60; // Set time to 60 seconds
 
var correctAnswers = 0; // keep track of questions answered right
var wrongAnswers = 0; // keep track of questions answered wrong
var points = 0; // keep track of points earned

function showQuiz(){

    var buttonList = document.querySelector("#choices"); // get section for button list
    buttonList.style.textAlign = "center"; // center the buttons

    // find a random element in array
    var randomIndex = Math.floor(Math.random() * questions.length);
    
    var questionDisplay = document.getElementById("question"); // find the html element for the question
    questionDisplay.innerHTML = questions[randomIndex].question; // show question in that html element
    questionDisplay.style.textAlign = "center"; // center it up

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
    // Also keep track of scores for each question answered
    // As well as deduct time if answered wrong
    buttonA.addEventListener("click", function() {
        // if clicked we know A
        if(questions[randomIndex].answer == "A"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
            correctAnswers++;
            points += 10; 
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
            wrongAnswers++;
            time -= 10;
        }

        while (buttonList.firstChild) { // remove the buttons
            buttonList.removeChild(buttonList.lastChild);
          }

        showQuiz(); // show new question
    });
    buttonB.addEventListener("click", function() {
        // if clicked we know B
        if(questions[randomIndex].answer == "B"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
            correctAnswers++;
            points += 10; 
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
            wrongAnswers++;
            time -= 10;
        }
       
        while (buttonList.firstChild) { // remove the buttons
            buttonList.removeChild(buttonList.lastChild);
          }

        showQuiz(); // show new question
    });
    buttonC.addEventListener("click", function() {
        // if clicked we know C
        if(questions[randomIndex].answer == "C"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
            correctAnswers++;
            points += 10; 
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
            wrongAnswers++;
            time -= 10;
        }

        while (buttonList.firstChild) { // remove the buttons
            buttonList.removeChild(buttonList.lastChild);
          }

        showQuiz(); // show new question
    });
    buttonD.addEventListener("click", function() {
        // if clicked we know D
        if(questions[randomIndex].answer == "D"){ // correct
            validness.style.color = "green";
            validness.innerHTML = "Correct!";
            correctAnswers++;
            points += 10; 
        } else { // incorrect
            validness.style.color = "red";
            validness.innerHTML = "Incorrect!";
            wrongAnswers++;
            time -= 10;
        }

        while (buttonList.firstChild) { // remove the buttons
            buttonList.removeChild(buttonList.lastChild);
          }

        showQuiz(); // show new question
    });
}

function showScore() { // show the score user got
    quizContent.style.display = "none"; // stop display quiz

    resultsContent.style.display = "block"; // display result content
    resultsContent.style.textAlign = "center"; // center it up

    // Set information
    document.getElementById("answeredRight").textContent = correctAnswers;
    document.getElementById("answeredWrong").textContent = wrongAnswers;
    document.getElementById("score").textContent = points;
}

buttonStart.addEventListener("click", function() { // when start quiz is clicked

    //Don't show the start content
    startContent.style.display = "none";

    //Show the quiz content
    quizContent.style.display = "block";

    showQuiz(); // start showing the quiz!

    // Set timer 
    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = time;

        if(time <= 0) {
            //stops the timer
            clearInterval(timerInterval);
            showScore();
        }

    }, 1000);
});

form.addEventListener("submit", function(event){
    event.preventDefault(); // prevent page loading

    var allMyScores = []; // array of all scores

    var storedScores = JSON.parse(localStorage.getItem("allMyScores")); // get all my scores from local storage

    if (storedScores !== null) { // if there is something in local storage
        allMyScores = storedScores; // set my variable to that
    }
    
    var userInitials = document.querySelector("#userInitials"); // get user input field

    var initials = userInitials.value;  // get text from that field

    var scoreLog = initials + " " + points; // create string of text and points user made

    allMyScores.push(scoreLog); // put user score inside array of all the scored

    localStorage.setItem("allMyScores", JSON.stringify(allMyScores)); // set the full array in local storage

    window.location.replace("highScore.html"); // redirect to score page
});
