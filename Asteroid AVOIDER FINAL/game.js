var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var gameOver = true

//asteroid variables
var numAsteroids = 20;
var asteroids = [];
var asteroidPosition = null;
var speed = 3;

var score = 0
var highScore = 0
var currentState = 0
var gameState = []

var hitBoundary = false;

//load asteroid sprite
var asteroid_Sprite = new Image();
asteroid_Sprite.src = "images/aster_Sprite.png"  

var spaceBackground = new Image();
spaceBackground.src = "images/SpaceBackground.png"

var spaceShipSmol = new Image();
spaceShipSmol.src = "images/PixelSpaceshipSmol.png"

var fireLong = new Image();
fireLong.src = "images/FireThruster_Long.png"

var fireSmall = new Image();
fireSmall.src = "images/FireThruster_Short.png"

var fireIdle = new Image();
fireIdle.src = "images/FireThruster_Idle.png"




//create keyboard event handlers 
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

currentState = 1
currentState = 0

function pressKeyDown(e){
    if(!gameOver){
        if(e.keyCode == 38 ){
            //code for up
            ship.up = true
            console.log("pressed down")
    
        }
        if(e.keyCode == 37){
            //code for left
            ship.left = true
    
        }
        if(e.keyCode == 39){
            //code for right
            ship.right = true
    
        }
        if(e.keyCode == 40){
            //code for down
            ship.down = true;
    
        }
    }
    //STARTING THE GAME UP     MENU INPUT USING SPACEBAR
    if(gameOver){
        if(e.keyCode == 32){
            if(currentState == 2){
                //gameover inputs

                currentState = 0;
                numAsteroids = 20;
                asteroids = [];
                score = 0;
                //start game here
                
                main()

            }else{
                //main menu inputs
                gameStart()
                currentState = 1;
                gameOver = false
                main()
                scoreTimer()
            }
        }
    }
}

function pressKeyUp(e){
    if(!gameOver){
        if(e.keyCode == 38){
            //code for up
            ship.up = false
            console.log("PRESSED UP")
        }
        if(e.keyCode == 37){
            //code for left
            ship.left = false
        }
        if(e.keyCode == 39){
            //code for right
            ship.right = false
        }
        if(e.keyCode == 40){
            //code for down
            ship.down = false
        }
    }
}


//asteroid class

function Asteroid(){
    //properties to draw the asteroid
    this.radius = randomRange(30,10)
    this.width = 25;   
    this.height = 20
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width;
    this.y = randomRange(canvas.height - this.radius, this.radius);
    this.vx = randomRange(speed, 2)
    this.color = "green"

    //methods (functions)
    //var asteroidRock = new Image();
    this.drawAsteroid = function(){
        shape.save();

        

        
        // shape.beginPath()
        // shape.fillStyle = this.color;
        // shape.arc(this.x, this.y, this.radius, 0, Math.PI *2,true)
        // shape.closePath();
        // shape.fill();
        
        shape.drawImage(asteroid_Sprite, this.x-(this.radius) , this.y-(this.radius), this.radius + this.radius, this.radius + this.radius)
        
        shape.restore();
    }   
}

//player ship variables

var ship = new playerShip();

function playerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 30;
    this.height = 31;

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.vx = 0
    this.vy = 0

    this.flameLength = 30

    this.drawShip = function(){
        shape.save();
        shape.translate(this.x, this.y)

        //draw the thruster
        if(this.up || this.down || this.right){
            shape.save()
            
            if(this.flameLength == 30){

                shape.drawImage(fireLong, 0-75, -10.5,60,23)

                this.flameLength = 20
                //shape.fillStyle = "yellow"
            }else{

                shape.drawImage(fireSmall, 0-65, -10.5,60,23)

                this.flameLength = 30
                //shape.fillStyle = "orange"
            }
            



            //draw the flame
            shape.beginPath();
            shape.moveTo(0,this.flameLength)
            //shape.lineTo(5,5)
            //shape.lineTo(-5,5)
            //shape.lineTo(0,this.flameLength)
            shape.closePath();
            shape.fill()
            shape.restore()
        
        }


        //draw the ship

        
        
        shape.fillStyle = "darkgreen"
        // shape.lineWidth = 2;
        // shape.strokeStyle = "rgb(0,255,0)"
        // shape.beginPath();
        // shape.moveTo(0,-10);
        // shape.lineTo(10,10);
        // shape.lineTo(-10,10);
        // shape.lineTo(0,-10);
        // shape.closePath();
        // shape.fill()
        // shape.stroke()
        

        shape.drawImage(spaceShipSmol, -14.75, -14.6, 30, 31)

        shape.restore()
    }

    this.moveShip = function(){
        this.x += this.vx
        this.y += this.vy

        //adding boundaries for the screen

        //bottom
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2
            this.vy = 0
        }

        //top
        if(this.y < this.height/2){
            this.y = this.height/2
            this.vy = 0
        }
        //right
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2
            this.vx = 0
        }
        //left
        // if(this.x < this.width/2){
        //     this.x = this.width/2
        //     this.vx = 0
        // }
    }
}



function main(){
    shape.clearRect(0,0,canvas.width,canvas.height)

    gameState[currentState]();
    if(!gameOver){
         //REFRESH THE SCREEN
        timer = requestAnimationFrame(main)
    }
}

//game state machine

//main menu state

gameState[0] = function(){
    //code for main menu
    shape.save()


    shape.drawImage(spaceBackground, 0, 0, canvas.width, canvas.height);

    shape.font = "30px arial"
    shape.fillStyle = "white"
    shape.textAlign = "center"

    shape.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2 -30);
    shape.font = "15px Arial"
    shape.fillText("Press Space to start", canvas.width/2, canvas.height/2 +20);

    shape.restore()

}

//play game state
gameState[1] = function(){
    //code for the asteroid game

    shape.save()
    shape.font = "15px Arial"
    shape.fillStyle = "white"
    shape.fillText(`Score: ${score}`, canvas.width-150, 30)
    shape.restore()

    //ship movement
    

    if(ship.up){
        ship.vy = -2
    }else if(ship.down){
        ship.vy = 2
    }else{
        ship.vy = 0
    }
    

    if(ship.right){ //forward
        ship.vx = 2
    }else{
        ship.vx = -2
        shape.drawImage(fireIdle, 0-65, -10.5, 60,23)
        
    }

    

    
        
    for(var i = 0; i < asteroids.length; i++){

        var dX = ship.x - asteroids[i].x; 
        var dY = ship.y - asteroids[i].y; 
        var distance = Math.sqrt((dX*dX) + (dY * dY));


        //Collision Detection happens here
        if(detectCollision(distance, (ship.height/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true;
            currentState = 2;
            main();
            return;
        }
        if(ship.x <= 10){
            console.log("hit boundary")
            hitBoundary = true;
            gameOver = true
            currentState = 2;
            main();
            return;
        }

        if(asteroids[i].x < canvas.width - canvas.width - asteroids[i].radius){
                            //if divided height below it raises asteroids up
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width;
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius);
            
        }                   //if multiplied width it pushes asteroids forward
        asteroids[i].x -= asteroids[i].vx;
        asteroids[i].drawAsteroid();
    }

    //draw ship
    ship.moveShip();
    ship.drawShip();


    //adds aasteroids to game as time goes on
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
        console.log("Added more asteroids!!!")  
        //console.log("Asteroid Position" + " X: " + asteroids[1].x + " Y: " + asteroids[1].y)

    }
}


//Game Over State
gameState[2] = function(){

    //code for the Game Over  menu AND SCORE 
    if(score > highScore && !hitBoundary){
        highScore = score

        shape.save()
        shape.font = "30px orbitron"
        shape.fillStyle = "white"
        shape.textAlign = "center"
        shape.fillText("Game Over! Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 -60)
        shape.fillStyle = "yellow"
        shape.fillText("Your new High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 -10)

        shape.fillStyle = "red"
        shape.fillText("New Record!", canvas.width/2, canvas.height/2 + 45)

        shape.fillStyle = "white"
        shape.font = "30px orbitron"
        shape.fillText("Press `Space` to play again", canvas.width/2, canvas.height/2 +100)
        shape.restore()   
    }else if(hitBoundary){
        //collides with the left boundary
        shape.save()
        shape.font = "30px Orbitron"
        shape.fillStyle = "white"
        shape.textAlign = "center"
        shape.fillText("Game Over! Your score was: " + score.toString(), canvas.width/2, canvas.height/2 -60)
        shape.fillText("Dont hit the boundary!", canvas.width/2, canvas.height/2-10)
        shape.fillStyle = "red"
        shape.fillText("HIGH SCORE DELETED", canvas.width/2, canvas.height/2 +40)
        shape.font = "20px Orbitron"
        shape.fillText("Press `Space` to play again", canvas.width/2, canvas.height/2 +100)
        highScore = 0;
        shape.restore()


    }else{
        shape.save()
        shape.font = "30px orbitron"
        shape.fillStyle = "white"
        shape.textAlign = "center"
        shape.fillText("Game Over! Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 -60)
        shape.fillStyle = "yellow"
        shape.fillText("Game Over! Your High Score is: " + highScore.toString(), canvas.width/2, canvas.height/2 -10)

        shape.font = "30px orbitron"
        shape.fillStyle = "white"
        shape.fillText("Press `Space` to play again", canvas.width/2, canvas.height/2 +100)
        shape.restore()   
    }
    

    


}


//Utility functions

function gameStart(){
    //for loop to instantiatie asteroids for game 

    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid();
    }
    //gives new clean ship to start with
    ship = new playerShip();
    hitBoundary = false;
}

function randomRange(high,low){
    return Math.random() * (high - low) + low;
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++

        if(score % 5 == 0){
            numAsteroids += 5
        }

        //calls the score timer every second
        setTimeout(scoreTimer, 1000)
    }
}
