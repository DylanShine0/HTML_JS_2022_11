var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main);
var x = 100;
var y = 0;
var speedX = 3;
var speedY = 3;




var mario = new Image();
mario.src = "images/mario2.png";
mario.onload = function(){
    main();
}
var bg = new Image();
bg.src = "images/galaxy.jpeg"
bg.onload = function(){
    main();
}



function main() {
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(x, 300, 20, 0, 2 * Math.PI, true)
    // ctx.fill()
    
    //draw sprite image
    //ctx.save();
    //ctx.scale(-1, 1);
    ctx.drawImage(mario, x, y, 90, 98.88)

    x += speedX;
    y += speedY;

    
    if(x > canvas.width  || x < -1){
        speedX *= -1;
        
    }
    console.log(speedX);
    
    if(y > canvas.height  || y < -1){
        speedY *= -1;

    }
    console.log(speedY);

    timer = requestAnimationFrame(main)
}


