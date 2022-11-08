let radius = 50;
let rate = 1000;
let score = 0;
let circleInterval = 0;
let circleIntervalCounter = 2;
let circleIntervals = [];
let gameDone = false;
let num = 60;







//target.addEventListener("click", () => {
    //clearInterval(intervalID);
//});

function start() {
    rate = 100;
    radius = 50;
    score = 0;

    circleInterval = setAndStart(createCircle, rate);
    gameOverText.root.setAttribute('visibility', 'hidden');
    restartButton.root.setAttribute('visibility', 'hidden');
}

function createCircle() {
    gameDone = false;
    let x = getRandomInt(radius, width - radius);
    let y = getRandomInt(radius, height - radius);

    c.root.onclick = function (event) {
        c.root.remove();
    };

}
function countDown(count) {
    if (count >= 0){
        var d = document.querySelector("p");
        d.innerHTML = "Timer: " + count;
    }
}

startButton.addEventListener("click", () => {
    let timerCount = 61;
    setInterval(function() { 
        timerCount--;
        countDown(timerCount); }, 1000);
        
})







