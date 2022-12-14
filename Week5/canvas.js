//Single line JavaScript Comment
/*
Multiline JavaScript Comment
*/

//Defines Variable to acces properties of canvas by Id
var canvas = document.getElementById("canvas");
//Define the drawing ccontext of the canvas element 
var ctx = canvas.getContext("2d");

//draw stuff 
//set up color and outline styles
ctx.fillStyle = "rgb(0,0,255)"
ctx.strokeStyle = "green"
ctx.lineWidth = "5"

//draws a rectangle fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(30,30,200,100);

//draws lines
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(800,0);
ctx.stroke();

ctx.strokeStyle = "red"

ctx.beginPath();
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//draw a circle 

ctx.beginPath()             //clockwise or counter clockwise
ctx.arc(400,300,50,0, (3*Math.PI)/2, false)
ctx.lineTo(400,300)
ctx.closePath();
ctx.fill()
ctx.stroke()

//draw some random shape    (pentagon-ish)
ctx.fillStyle = "#55ddef"
ctx.strokeStyle = "Yellow"
ctx.lineWidth = "2"

ctx.beginPath();

ctx.moveTo(650, 100)
ctx.lineTo(700, 140)
ctx.lineTo(675, 200)
ctx.lineTo(625, 200)
ctx.lineTo(600, 148)
ctx.closePath();
ctx.fill();
ctx.stroke()


//draw an image to the canvas
var mario = new Image(); 
mario.src = "images/mario.png";

mario.onload = function(){
    ctx.drawImage(mario, 470, 200, 100, 98.88);
}


