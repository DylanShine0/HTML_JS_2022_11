//camvas drawing stuff

var canvas = document.getElementById("c");
var shape = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();


rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"
hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

hscissors.onLoad = function () {
    draw(rock, paper, scissors, rock, paper, scissors);
}


document.addEventListener("keydown", onKeyDown);
document.addEventListener("keydown", onKeyUp);


shape.font = "40px Arial"
shape.fillStyle = "blue"
shape.strokeStyle = "green"
shape.textAlign = "center"

shape.fillText("Welcome to the RPS Game!", canvas.width / 2, 280);
shape.strokeText("Welcome to the RPS Game!", canvas.width / 2, 280);
shape.fillText("Press 'Space' to start", canvas.width / 2, 420);


var gameOver = true;
var results = "Select Rock, paper, scissors above..."


function onKeyDown(e) {
    console.log(e.keyCode);
}

function onKeyUp(e) {
    if (e.keyCode == 32) {
        shape.clearRect(0, 0, canvas.width, canvas.height)
        console.log("You pressed the spacebar!")

        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
}

function draw(rock, paper, scissors, crock, cpaper, cscissors) {
    if (gameOver == true) {
        //drawing the fonts
        shape.font = "40px Arial";
        shape.fillStyle = "blue"
        shape.strokeStyle = "green"
        shape.textAlign = "center"


    }
    else {

        shape.save();

        shape.clearRect(0, 0, canvas.width, canvas.height);
        shape.font = "30px Arial"
        shape.textAlign = "center"
        shape.fillStyle = "pink";
        //players choice
        shape.fillText("Player Choice", canvas.width / 2, 100)
        shape.drawImage(rock, canvas.width / 2 - rock.width / 2 - 100, 150)
        shape.drawImage(paper, canvas.width / 2 - paper.width / 2, 150)
        shape.drawImage(scissors, canvas.width / 2 - scissors.width / 2 + 100, 150)
        //computers choice
        shape.fillText("Cpu Choice", canvas.width / 2, 325)
        shape.drawImage(crock, canvas.width / 2 - crock.width / 2 - 100, 375)
        shape.drawImage(cpaper, canvas.width / 2 - cpaper.width / 2, 375)
        shape.drawImage(cscissors, canvas.width / 2 - scissors.width / 2 + 100, 375)

        shape.fillText(results, canvas.width / 2, 525)

        shape.restore();
    }
}




//alert("Select rock, paper, or scissors!");


var rps = ["rock", "paper", "scissors"];


document.getElementById("rock").addEventListener('click', function (e) {
    //alert("You picked " + rps[0])
    playGame(rps[0])
});
document.getElementById("paper").addEventListener('click', function (e) {
    //alert("You picked " + rps[1])
    playGame(rps[1])
});
document.getElementById("scissors").addEventListener('click', function (e) {
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
                    //alert("Cpu chose Rock. Its a tie")
                    results = "Cpu chose Rock. Its a tie"
                    draw(hrock, paper, scissors, hrock, paper, scissors);

                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("Cpu chose Paper. You lose!")
                    results = "Cpu chose Paper. You lose!"
                    draw(hrock, paper, scissors, rock, hpaper, scissors);
                }
                else {
                    //scissors
                    //alert("Cpu chose scissors. You win!");
                    results = "Cpu chose scissors. You win!"
                    draw(hrock, paper, scissors, rock, paper, hscissors);
                }
                break;
            case "paper":
                if (cpuChoice == 0) {
                    //rock
                    //alert("Cpu chose Rock. You win!")
                    results = "Cpu chose Rock. You win!"
                    draw(rock, hpaper, scissors, hrock, paper, scissors);

                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("Cpu chose Paper. It's a tie!")
                    results = "Cpu chose Paper. It's a tie!"
                    draw(rock, hpaper, scissors, rock, hpaper, scissors);
                }
                else {
                    //scissors
                    //alert("Cpu chose scissors. You lose!");
                    results = "Cpu chose scissors. You lose!"
                    draw(rock, hpaper, scissors, rock, paper, hscissors);
                }
                break;

            case "scissors":
                if (cpuChoice == 0) {
                    //rock
                    //alert("Cpu chose Rock. You lose!")
                    results = "Cpu chose Rock. You lose!"
                    draw(rock, paper, hscissors, hrock, paper, scissors);

                }
                else if (cpuChoice == 1) {
                    //paper
                    //alert("Cpu chose Paper. You Win!")
                    results = "Cpu chose Paper. You Win!"
                    draw(rock, paper, hscissors, rock, hpaper, scissors);
                }
                else {
                    //scissors
                    //alert("Cpu chose scissors. Its a tie!");
                    results = "Cpu chose scissors. Its a tie!"
                    draw(rock, paper, hscissors, rock, paper, hscissors);
                }
                break;

        }

    }

}


