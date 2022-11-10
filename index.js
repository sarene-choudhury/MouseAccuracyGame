let radius = 50;
let rate = 1000;
let score = 0;
let circleInterval = 0;
let circleIntervalCounter = 2;
let circleIntervals = [];
let gameDone = false;
let num = 60;










function countDown(count) {
    if (count >= 0){
        var timerLabel = document.getElementById("timer")
        timerLabel.innerHTML = "Timer: " + count;
    }
}

startButton.addEventListener("click", () => {
    let timerCount = 61;
    setInterval(function() {  
        timerCount--;
        countDown(timerCount); 
    }, 1000);
    updateScore();
    target.style.visibility = "visible";

    playGame();
    setInterval(playGame, 4000);
    
    
    
    
        
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateScore(){
    var timerLabel = document.getElementById("score")
    timerLabel.innerText = "Score: " + score;
}

target.addEventListener("click",() => {
    score += 1;
    updateScore();
    playGame()
    
})

function playGame(){
    target.style.position = 'absolute';    
    let yCoord = getRandomInt(window.innerWidth-130) + 65;
    let xCoord = getRandomInt(window.innerHeight-130) + 65;
    
    while (yCoord<130 && xCoord < 115){
        yCoord = getRandomInt(window.innerWidth-130) + 65;
        xCoord = getRandomInt(window.innerHeight-130) + 65;
    }
    target.style.left = yCoord + "px";
    target.style.top = xCoord + "px";
}







