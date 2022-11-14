var canvas = document.querySelector('canvas');
var shape = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var speed = 5;

//random number function
function randomRange(high, low){
    return Math.random() * (high - low) + low;
}

function GameObject(){
    //examples of properties of a class
    this.width = randomRange(50,10);
    this.height = this.width;
    this.radius = randomRange(50, 2);
    this.x = randomRange(canvas.width, 0);
    this.y = randomRange(canvas.height, 0);
    this.vx = randomRange(speed,-speed);
    this.vy = randomRange(speed,-speed);
    this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255, 0)})`
    

    //this is an example of a method for function
    this.drawSquare = function(){
        shape.fillStyle = this.color;
        shape.fillRect(this.x,this.y,this.width,this.height);
    }

    this.drawCircle = function(){
        shape.beginPath();
        shape.fillStyle = this.color;
        shape.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        shape.closePath();
        shape.fill();

        

    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //make sure it doesn't leave the screen

        //bottom of canvas
        if(this.y > canvas.height - this.radius){
            
            this.y = canvas.height - this.radius
            this.vy = -this.vy; 
            this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255, 0)})`
        }
        //top of the canvas
        if(this.y < 0 + this.radius){
            this.y = this.radius;
            this.vy = this.vy * -1;
            this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255, 0)})`
        }
        //right side of the canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius
            this.vx = -this.vx
            this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255, 0)})`
        }
        if(this.x < this.radius){
            this.x = this.radius
            this.vx = this.vx * -1
            this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255, 0)})`
        }
    }

}

//makes a new instance of square
var square = new GameObject();
//use dot syntax to draw the square
square.drawSquare();





/*squares[0] = new GameObject();
  squares[0].drawSquare();
*/
var squares = []
var numSquares = 10;

for(var i = 0; i<numSquares; i++){
    squares[i] = new GameObject();
    squares[i].drawSquare();
}


var circles = [];
var numCircles = 50;

for(var j = 0; j<numCircles; j++){
    circles[j] = new GameObject();
    circles[j].drawCircle();
}

function main(){
    //clear the canvas
    shape.clearRect(0,0,canvas.width,canvas.height)

    //loop through all objects in the array
    for(var i = 0; i < circles.length; i++){

        circles[i].move();
        //draw circles to the screen
        circles[i].drawCircle();

        


    }


    



    // request the animation frame
    timer = requestAnimationFrame(main);

}
main();