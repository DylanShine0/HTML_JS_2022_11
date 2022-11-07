var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main);
var x = 100;


function main() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, 300, 20, 0, 2 * Math.PI, true)
    ctx.fill()
    x += 5;
    
    if(x > 800 + 20){
        x = -20;
    }

    timer = requestAnimationFrame(main)
}


