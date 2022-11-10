let score = 0;
let gameDone = false;
var movement; 
let numTargets = 0;










function countDown(count) {
    if (count >= 0){
        var timerLabel = document.getElementById("timer")
        timerLabel.innerHTML = "Timer: " + count;
    }
    if (count == 0){
        gameDone = true;
        target.style.visibility = "hidden";
        startButton.style.visibility = "visible";
        startButton.innerText = "RESTART!";
    }
}

startButton.addEventListener("click", () => {
    if (gameDone == false){
        let timerCount = 60;
        setInterval(function() {  
            timerCount--;
            countDown(timerCount); 
        }, 1000);
        updateScore();
        target.style.visibility = "visible";

        playGame();
        movement = setInterval(playGame, 4000);
        startButton.style.visibility = "hidden";
    }
    else{
        startButton.style.visibility = "hidden";
        score = 0;
        numTargets = 0;
        gameDone = 0;
        clearInterval(movement);
        let timerCount = 60;
        setInterval(function() {  
            timerCount--;
            countDown(timerCount); 
        }, 1000);
        updateScore();
        target.style.visibility = "visible";
        playGame();
        movement = setInterval(playGame, 4000);
        
    }
    
    
    
    
        
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateScore(){
    var scoreLabel = document.getElementById("score")
    scoreLabel.innerText = "Score: " + score;
}
function updateNumTargets(){
    var targetLabel = document.getElementById("numTargets")
    targetLabel.innerText = "Number of Targets: " + numTargets;   
}

function updateAccuracy(){
    var accuracyLabel = document.getElementById("accuracy")
    accuracyLabel.innerText = "Accuracy: " + Math.round((score/numTargets*100)) + "%";   
}
target.addEventListener("click",() => {
    score += 1;
    updateScore();
    clearInterval(movement);
    playGame();
    movement = setInterval(playGame, 4000);
    
    
    
})

function playGame(){
    numTargets += 1;
    updateNumTargets();
    updateAccuracy();
    target.style.position = 'absolute';    
    let yCoord = getRandomInt(window.innerWidth-150) + 75;
    let xCoord = getRandomInt(window.innerHeight-150) + 75;
    
    while (yCoord<275 && xCoord < 265){
        yCoord = getRandomInt(window.innerWidth-150) + 75;
        xCoord = getRandomInt(window.innerHeight-150) + 75;
    }
    target.style.left = yCoord + "px";
    target.style.top = xCoord + "px";
}







