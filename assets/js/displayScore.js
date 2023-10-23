var scoreList = document.querySelector("#highScores");
var clearButton = document.querySelector("#clearMe");

function showMyScores(){ // function to display all the scoreds
    var allMyScores = []; // create array
    allMyScores = JSON.parse(localStorage.getItem("allMyScores")); // get all my scores from local storage

    if(allMyScores !== null){ // if something is in local storage then display
        // loop that creates elements and appends it to list
        for (var i = 0; i < allMyScores.length; i++) {
            var score = allMyScores[i];
        
            var li = document.createElement("li");
            li.textContent = score;
        
            scoreList.appendChild(li);
        }
    }
}

clearButton.addEventListener("click", function() { // when clear high scores button is clicked
    localStorage.clear(); // clear the storage
    location.reload(); // reload the page
});

showMyScores();