var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 58
var finish = 956
var carPos = 2


//car fuel
var startFuel = randomNumber1(canvas.width, 100)
var fuel = startFuel
var fuelBarWidth = 300;
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

var seconds = 1000;
var fps = 60
var frames = fps




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
        shape.font = "30px Arial"
        shape.textAlign = "center"
        shape.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2);
    }

    if(!gameOver){
        
        console.log(seconds)
        drawFuelBar("red", 70, 30);
        drawStartTimer();
        drawStartFinish();
        car.drawCar();
        runStartTimer();
            
        if (fuel > 0) {
            carPos += 2;
            fuel -= 1;
        }
        if (carPos + carWidth > finish || fuel <= 0) {
            fuel = 0
            drawResults();
        }
       
    }
    timer = requestAnimationFrame(main);
}

function drawStartTimer() {
    if (carPos < finish) {
        shape.fillStyle = "black"
        shape.font = "25px Arial"
        shape.textAlign = "center"
        shape.fillText("Get Ready! " + seconds + ` *broken*`, canvas.width / 2, canvas.height / 3)

    }
}

function runStartTimer() {
    if(!gameOver){
        seconds -= 1
        //calls the score timer every second
        //setTimeout(runStartTimer, 1000)
    }
}


function drawStartFinish() {
    var finishLineImage = new Image;
    var StartLineImage = new Image;

    finishLineImage.src = "images/FINISH-LINE.png"
    StartLineImage.src = "images/FINISH-LINE.png"

    //finish line
    shape.drawImage(finishLineImage, finish, 50, 83, 500)
    //start line
    shape.drawImage(StartLineImage, start, 50, 83, 500)

}


function drawResults() {
    if (carPos + carWidth > finish) {
        shape.fillStyle = "black"
        shape.font = "20px arial"
        shape.textAlign = "center"
        shape.fillText("You made it across the finish line! with " + startFuel + " fuel!", canvas.width / 2, canvas.height / 2)
    } else {
        shape.fillText("You did not make it with " + startFuel + " fuel :(", canvas.width/2, canvas.height/2.5)
    }
}



function drawFuelBar(gasColor, x, y) {
    var currentBarWidth = fuelBarWidth * (fuel / startFuel);
    shape.fillStyle = "Black"
    shape.fillRect(x, y, fuelBarWidth, 10)

    shape.font = "25px Arial"
    shape.fillText("fuel", start, 28)

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


