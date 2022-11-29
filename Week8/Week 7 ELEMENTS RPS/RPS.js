//camvas drawing stuff

var canvas = document.getElementById("c");
var shape = canvas.getContext("2d");

var fire = new Image();
var water = new Image();
var rock = new Image();
var hfire = new Image();
var hwater = new Image();
var hrock = new Image();


rock.src = "images/rock.png"
water.src = "images/water.png"
fire.src = "images/fire.png"
hrock.src = "images/rockHIGHLIGHT.png"
hwater.src = "images/waterHIGHLIGHT.png"
hfire.src = "images/fireHIGHLIGHT.png"

hfire.onLoad = function () {
    draw(rock, water, fire, rock, water, fire);
}


document.addEventListener("keydown", onKeyDown);
document.addEventListener("keydown", onKeyUp);


shape.font = "40px Arial"
shape.fillStyle = "red"
shape.strokeStyle = "red"
shape.textAlign = "center"

shape.fillText("Welcome to the RPS Game!", canvas.width / 2, 280);
shape.strokeText("Welcome to the RPS Game!", canvas.width / 2, 280);
shape.fillText("Press 'Space' to start", canvas.width / 2, 420);


var gameOver = true;
var results = "Select Rock, water, fire above..."


function onKeyDown(e) {
    console.log(e.keyCode);
}

function onKeyUp(e) {
    if (e.keyCode == 32) {
        shape.clearRect(0, 0, canvas.width, canvas.height)
        console.log("You pressed the spacebar!")

        gameOver = false;
        draw(rock, water, fire, rock, water, fire);
    }
}

function draw(rock, water, fire, crock, cwater, cfire) {
    if (gameOver == true) {
        //drawing the fonts
        shape.font = "40px Arial";
        shape.fillStyle = "red"
        shape.strokeStyle = "red"
        shape.textAlign = "center"


    }
    else {

        shape.save();

        shape.clearRect(0, 0, canvas.width, canvas.height);
        shape.font = "30px Arial"
        shape.textAlign = "center"
        shape.fillStyle = "red";
        //players choice
        shape.fillText("Player Choice", canvas.width / 2, 100)
        shape.drawImage(rock, canvas.width / 2 - rock.width / 2 - 100, 100)
        shape.drawImage(water, canvas.width / 2 - water.width / 2, 100)
        shape.drawImage(fire, canvas.width / 2 - fire.width / 2 + 100, 100)
        //computers choice
        shape.fillText("Cpu Choice", canvas.width / 2, 325)
        shape.drawImage(crock, canvas.width / 2 - crock.width / 2 - 100, 330)
        shape.drawImage(cwater, canvas.width / 2 - cwater.width / 2, 330)
        shape.drawImage(cfire, canvas.width / 2 - cfire.width / 2 + 100, 330)

        shape.fillText(results, canvas.width / 2, 525)

        shape.restore();
    }
}




//alert("Select rock, paper, or scissors!");


var rps = ["rock", "water", "fire"];


document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You picked " + rps[0])
    playGame(rps[0])
});
document.getElementById("water").addEventListener('click', function (e) {
    //alert("You picked " + rps[1])
    playGame(rps[1])
});
document.getElementById("fire").addEventListener('click', function (e) {
    //alert("You picked " + rps[2])
    playGame(rps[2])
});


function playGame(playerChoice) {
    if (gameOver == true) {
        return;
    }
    else {
        var cpuChoice = Math.floor(Math.random() * 2.99);
        console.log(rps[cpuChoice.toString()], playerChoice)

        switch (playerChoice) {
            case "rock":
                if (cpuChoice == 0) {
                    //rock
                   
                    results = "Cpu chose Rock. Its a tie"
                    draw(hrock, water, fire, hrock, water, fire);

                }
                else if (cpuChoice == 1) {
                    //paper
                    
                    results = "Cpu chose water. You lose!"
                    draw(hrock, water, fire, rock, hwater, fire);
                }
                else {
                    //scissors
                    
                    results = "Cpu chose fire. You win!"
                    draw(hrock, water, fire, rock, water, hfire);
                }
                break;
            case "water":
                if (cpuChoice == 0) {
                    //rock
                    
                    results = "Cpu chose fire. You win!"
                    draw(rock, hwater, fire, rock, water, hfire);

                }
                else if (cpuChoice == 1) {
                    //paper
                    
                    results = "Cpu chose water. It's a tie!"
                    draw(rock, hwater, fire, rock, hwater, fire);
                }
                else {
                    //scissors
                    
                    results = "Cpu chose rock. You lose!"
                    draw(rock, hwater, fire, hrock, water, fire);
                }
                break;

            case "fire":
                if (cpuChoice == 0) {
                    //rock
                    //alert("Cpu chose Rock. You lose!")
                    results = "Cpu chose Rock. You lose!"
                    draw(rock, water, hfire, hrock, water, fire);

                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("Cpu chose Paper. You Win!")
                    results = "Cpu chose water. You Lose!"
                    draw(rock, water, hfire, rock, hwater, fire);
                }
                else {
                    //scissors
                    //alert("Cpu chose scissors. Its a tie!");                                                                               
                    results = "Cpu chose fire. Its a tie!"
                    draw(rock, water, hfire, rock, water, hfire);
                }
                break;

        }

    }

}


