var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var start = 50
var finish = 750
var carPos = 2
var carPos_BLUE = 2
var carPos_YELLOW = 2

//red car fuel
var startFuel = randomNumber(canvas.width, 600)
var fuel = startFuel;
//blue car fuel
var blueStartFuel = randomNumber(canvas.width, 600)
var blueFuel = blueStartFuel;
//yellow car fuel
var yellowStartFuel = randomNumber(canvas.width, 600)
var yellowFuel = yellowStartFuel;

var fuelBarWidth = 300;

var gameOver = true;

var seconds = 3;
var fps = 60
var frames = fps



//add some event listeners 

document.addEventListener("keydown", keyPressDown);
function keyPressDown(e){

    if(e.keyCode == 32 && gameOver == true){
        gameOver = false;
    }

}


function main() {

    shape.clearRect(0, 0, canvas.width, canvas.height)

    if (gameOver) {

        shape.fillStyle = "black"
        shape.font = "30px Arial"
        shape.textAlign = "center"
        shape.fillText("Press Space to Start", canvas.width/2, canvas.height/2);

       

    } else {

        if(!gameOver && seconds >0){
            console.log(seconds)
            runStartTimer();
            drawStartTimer();
        }else{
            if (fuel > 0) {
                carPos++;
                carPos_BLUE++;
                carPos_YELLOW++;

                fuel-=1;
                blueFuel-=1;
                yellowFuel-=1;
            }
        }

        drawStartFinish();
        drawCar("red", "blue", "yellow");



        drawFuelBar("red", 70, 30);
        drawFuelBar_BLUE("blue", 70, 60);
        drawFuelBar_YELLOW("yellow", 70, 90);

        


        if(carPos + 40 > finish || fuel <= 0){
            drawResults();
        }
        if(carPos_BLUE + 40 > finish || blueFuel <= 0){
            drawResults();
        }
        if(carPos_YELLOW + 40 > finish || yellowFuel <= 0){
            drawResults();
        }

        

    }




    timer = requestAnimationFrame(main);


}

function drawStartFinish() {
    shape.fillStyle = "black"
    //start line
    shape.fillRect(start, 50, 10, 500)
    //finish line
    shape.fillRect(finish, 50, 10, 500)
}


function drawCar(color, color2, color3) {
    //draw a car

    //red player 1
    shape.fillStyle = color
    shape.fillRect(carPos, 300 / 2, 40, 20)

    //blue player 2
    shape.fillStyle = color2
    shape.fillRect(carPos_BLUE, 400 / 2, 40, 20)

    //yellow player 3
    shape.fillStyle = color3
    shape.fillRect(carPos_YELLOW, 500 / 2, 40, 20)
}

function drawResults(){
    
}



function drawFuelBar(gasColor, x ,y) {
    var currentBarWidth = fuelBarWidth * (fuel / startFuel);
    shape.fillStyle = "Black"
    shape.fillRect(x, y, fuelBarWidth, 10)

    shape.font = "25px Arial"
    shape.fillText("fuel", start, 28)

    if (fuel > 0) {
        shape.fillStyle = gasColor
        shape.fillRect(x, y, currentBarWidth, 10);
    }
}

function drawFuelBar_BLUE(gasColor, x ,y) {
    var currentBarWidth = fuelBarWidth * (blueFuel / blueStartFuel);
    shape.fillStyle = "Black"
    shape.fillRect(x, y, fuelBarWidth, 10)

    shape.font = "25px Arial"
    shape.fillText("fuel", start, 28)

    if (blueFuel > 0) {
        shape.fillStyle = gasColor
        shape.fillRect(x, y, currentBarWidth, 10);
    }
}

function drawFuelBar_YELLOW(gasColor, x ,y) {
    var currentBarWidth = fuelBarWidth * (yellowFuel / yellowStartFuel);
    shape.fillStyle = "Black"
    shape.fillRect(x, y, fuelBarWidth, 10)

    shape.font = "25px Arial"
    shape.fillText("fuel", start, 28)

    if (yellowFuel > 0) {
        shape.fillStyle = gasColor
        shape.fillRect(x, y, currentBarWidth, 10);
    }
}



function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}

function runStartTimer(){
    console.log(frames);
    frames -= 1; 
    if(frames < 0){
        frames = fps
        seconds -= 1;
    }
}
function drawStartTimer(){
    if(carPos || carPos_BLUE || carPos_YELLOW > finish){
        shape.fillStyle = "black"
        shape.font = "25px Arial"
        shape.textAlign = "center"
        shape.fillText(seconds, canvas.width/2, canvas.height/2)
    }
}

function restartGame(){
    location.reload();
}