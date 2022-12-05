var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)

var gameOver = false

//asteroid variables
var numAsteroids = 20;
var asteroids = [];
var asteroidPosition = null;
var speed = 2.5;

var score = 0

//load asteroid sprite
var asteroid_Sprite = new Image();
asteroid_Sprite.src = "images/aster_Sprite.png"


//create keyboard event handlers 
document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

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
    this.radius = randomRange(10,2)
    this.width = 25;   
    this.height = 20
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(speed, 1)
    this.color = "green"

    //methods (functions)
    //var asteroidRock = new Image();
    this.drawAsteroid = function(){
        shape.save();

        //shape.drawImage(asteroid_Sprite, this.x, this.y)

        
        shape.beginPath()
        shape.fillStyle = this.color;
        shape.arc(this.x, this.y, this.radius, 0, Math.PI *2,true)
        shape.closePath();
        shape.fill();
        

        shape.restore();
    }

   
}

//player ship variables

var ship = new playerShip();

function playerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20
    this.height = 20


    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.vx = 0
    this.vy = 0


    this.drawShip = function(){
        shape.save();
        shape.translate(this.x, this.y)


        //draw the ship
        shape.fillStyle = "darkgreen"
        shape.lineWidth = 2;
        shape.strokeStyle = "rgb(0,255,0)"
        shape.beginPath();
        shape.moveTo(0,-10);
        shape.lineTo(10,10);
        shape.lineTo(-10,10);
        shape.lineTo(0,-10);
        shape.closePath();
        shape.fill()
        shape.stroke()
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
        if(this.x < this.width/2){
            this.x = this.width/2
            this.vx = 0
        }
            
    

    }
}

//for loop to instantiatie asteroids for game 

for(var i = 0; i < numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

function main(){
    shape.clearRect(0,0,canvas.width,canvas.height)

    //draw score to the screen

    shape.save()
    shape.font = "15px Arial"
    shape.fillStyle = "white"
    shape.fillText(`Score: ${score}`, canvas.width-150, 30)
    shape.restore()

    //vertical movement
    if(ship.up){
        ship.vy = -3;
    }else{
        ship.vy = 2.5
    }
    //horizontal
    if(ship.left){
        ship.vx = -1
    }else if(ship.right){
        ship.vx = 1
    }else{

        ship.vx = 0
    }
        
    



//                                                          .radius x2               .radius x2

    for(var i = 0; i < asteroids.length; i++){


        var dX = ship.x - asteroids[i].x; 
        var dY = ship.y - asteroids[i].y; 
        var distance = Math.sqrt((dX*dX) + (dY * dY));

        if(detectCollision(distance, (ship.height/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true;
        }



        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height ;
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            
        }
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }


    //draw ship
    ship.moveShip();
    ship.drawShip();

    if(!gameOver){
         //REFRESH THE SCREEN
        timer = requestAnimationFrame(main)
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
        console.log("Added more asteroids!!!")
    }



   
}
//main();






//Utility function

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

//temp call score function

scoreTimer();