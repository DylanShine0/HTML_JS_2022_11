var canvas = document.getElementById("canvas")
var shape = canvas.getContext("2d")

var timer = requestAnimationFrame(main)


//asteroid variables
//asteroid class

function Asteroid(){
    //properties to draw the asteroid



}



function main(){
    shape.clearRect(0,0,canvas.width,canvas.height)












    //REFRESH THE SCREEN

    timer = requestAnimationFrame(main)
}


//Utility function

function randomRange(high,low){
    return Math.random() * (high - low) + low;
}