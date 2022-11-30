var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)


//asteroid variables
var numAsteroids = 20;
var asteroids = [];
var asteroidPosition = null;
var speed = 5;

//load asteroid sprite
var asteroid_Sprite = new Image();
asteroid_Sprite.src = "images/aster_Sprite.png"



//asteroid class

function Asteroid(){
    //properties to draw the asteroid
    this.radius = randomRange(15,2)
    this.width = 25;   ///replace radius variables with width!!
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius)
    this.vy = randomRange(speed, 1)
    this.color = "white"

    //methods (functions)
    //var asteroidRock = new Image();
    this.drawAsteroid = function(){
        shape.save();

        shape.drawImage(asteroid_Sprite, this.x, this.y)

        /*
        shape.beginPath()
        shape.fillStyle = this.color;
        shape.arc(this.x, this.y, this.radius, 0, Math.PI *2,true)
        shape.closePath();
        shape.fill();
        */

        shape.restore();
    }

   
}

//for loop to instantiatie asteroids for game 

for(var i = 0; i < numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

function main(){
    shape.clearRect(0,0,canvas.width,canvas.height)

    for(var i = 0; i < asteroids.length; i++){

        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) - canvas.height;
            asteroids[i].x = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius)
        }
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();
    }



    //REFRESH THE SCREEN
    timer = requestAnimationFrame(main)
}
main();






//Utility function

function randomRange(high,low){
    return Math.random() * (high - low) + low;
}