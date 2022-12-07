var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 58
var finish = 956
var carPos = 2


//car fuel
var startFuel = randomNumber1(canvas.width, 100)
var fuel = startFuel
var fuelBarWidth = 512;
var carWidth = 10;


var car = new playerCar();

function playerCar() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 60
    this.height = 100
    this.vx = 0
    this.vy = 0


    this.drawCar = function () {

        shape.save();

        //shape.fillStyle = "red"
        //shape.fillRect(carPos, canvas.height / 2, 40, 20)
        shape.drawImage(carSprite, carPos, canvas.height / 2, 100, 30)


        shape.restore()
    }
    

}




var gameOver = true;

var startingSeconds = 3;

var stopCounting = false;

var seconds = setInterval(function(){
    
    if(stopCounting == false){
        startingSeconds--;
    }
    

}, 1000)



//load game car sprite
var carSprite = new Image();
carSprite.src = "images/pixelCAR.png"






//add some event listeners 


function main() {
    shape.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {
        document.addEventListener("keydown", keyPressDown);
        function keyPressDown(e) {
            if (e.keyCode == 32 && gameOver == true) {
                gameOver = false;
            }
        }
        shape.fillStyle = "black"
        shape.font = "30px ZEN"
        shape.textAlign = "center"
        shape.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2);
    }

    if(!gameOver){
        console.log(startingSeconds)
        drawFuelBar("red", 100, 30);
        drawStartTimer();
        drawStartFinish();
        car.drawCar();

        if(startingSeconds <= 0){
            
            moveCar();

        }
    }
    timer = requestAnimationFrame(main);
}

function moveCar(){
    if (fuel > 0) {
        carPos += 2;
        fuel -= 1;
    }
    if (carPos + carWidth > finish || fuel <= 0) {
        drawResults();
        fuel = 0;
        
        
    }
}

function drawStartTimer() {
    if (carPos < finish) {
        shape.fillStyle = "black"
        shape.font = "25px ZEN"
        shape.textAlign = "center"
        shape.fillText("Get Ready! " + startingSeconds, canvas.width / 2, canvas.height / 3)

        if(startingSeconds <= 0){
            stopCounting = true;
            startingSeconds = 0;
            
        }

    }
}


function drawStartFinish() {
    var finishLineImage = new Image;
    var StartLineImage = new Image;

    finishLineImage.src = "images/FINISH-LINE-RED.png"
    StartLineImage.src = "images/FINISH-LINE-BLUE.png"

    //finish line
    shape.drawImage(finishLineImage, finish, 50, 62, 500)
    //start line
    shape.drawImage(StartLineImage, start, 50, 62, 500)

}


function drawResults() {
    if (carPos + carWidth > finish) {
        shape.fillStyle = "red"
        shape.font = "30px ZEN"
        shape.textAlign = "center"
        shape.fillText("You made it across the finish line! with " + startFuel + " fuel!", canvas.width / 2, canvas.height / 4)
    } else {
        shape.fillStyle = "red"
        shape.fillText("You did not make it with " + startFuel + " fuel :(", canvas.width/2, canvas.height/4)
    }
}



function drawFuelBar(gasColor, x, y) {

    var fuelBarImage = new Image;
    fuelBarImage.src = "images/FireFuelBar.png";
    shape.drawImage(fuelBarImage, 100, 30)

    var currentBarWidth = fuelBarWidth * (fuel / startFuel);

    shape.fillStyle = "red"
    shape.font = "25px ZEN"
    shape.fillText("FUEL", start, 28)

    if (fuel > 0) {
        shape.fillStyle = "red"
        shape.fillRect(x, y, currentBarWidth, 10);
    }
}

function randomNumber1(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function restartGame() {
    location.reload();
}


