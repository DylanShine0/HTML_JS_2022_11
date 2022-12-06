var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 50
var finish = 750
var carPos = 2


//car fuel
var startFuel = randomNumber1(canvas.width, 1)
var fuel = startFuel;
var fuelBarWidth = 300;
var carWidth = 50;


var car = new playerCar();

function playerCar() {

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 60
    this.height = 100


    this.drawCar = function () {

        shape.save();

        shape.fillStyle = "red"
        shape.fillRect(carPos, canvas.height / 2, 40, 20)
        shape.drawImage(carSprite, carPos, canvas.height / 2, 50, 20)


        shape.restore()
    }

}




var gameOver = true;

var seconds = 3;
var fps = 60
var frames = fps




//load game car sprite
var carSprite = new Image();
carSprite.src = "images/pixelCAR.png"






//add some event listeners 

document.addEventListener("keydown", keyPressDown);
function keyPressDown(e) {

    if (e.keyCode == 32 && gameOver == true) {
        gameOver = false;
    }
}

function main() {
    shape.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {

        shape.fillStyle = "black"
        shape.font = "30px Arial"
        shape.textAlign = "center"
        shape.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2);

    } else {

        if (!gameOver && seconds > 0) {
            console.log(seconds)
            car.drawCar()
            runStartTimer();
            drawStartTimer();
            drawStartFinish();
            drawFuelBar("red", 70, 30);
        } else {
            if (fuel > 0) {
                carPos += 2;
                fuel -= 1;
            }
        }

        if (carPos + carWidth > finish || fuel <= 0) {
            drawResults();
        }
    }

    timer = requestAnimationFrame(main);

}
main();







function drawStartFinish() {
    shape.fillStyle = "black"
    //start line
    shape.fillRect(start, 50, 10, 500)
    //finish line
    shape.fillRect(finish, 50, 10, 500)
}


function drawResults() {

    if (carPos + carWidth > finish) {
        shape.fillStyle = "white"
        shape.font = "20px arial"
        shape.textAlign = "center"
        shape.fillText("You made it across the finish line! you win!", canvas.width / 2, canvas.height / 2)
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

function runStartTimer() {
    console.log(frames);
    frames -= 1;
    if (frames < 0) {
        frames = fps
        seconds -= 1;
    }
}

function drawStartTimer() {
    if (carPos || carPos_BLUE || carPos_YELLOW > finish) {
        shape.fillStyle = "black"
        shape.font = "25px Arial"
        shape.textAlign = "center"
        shape.fillText(seconds, canvas.width / 2, canvas.height / 2)
    }
}

function randomNumber1(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function restartGame() {
    location.reload();
}