//camvas drawing stuff

var canvas = document.getElementById("c");
var shape = canvas.getContext("2d");

//drawing the fonts

shape.font = "40px Arial";
shape.fillStyle = "blue"
shape.strokeStyle = "green"
shape.fillText("Welcome to the RPS Game!", 125, 280);
shape.strokeText("Welcome to the RPS Game!", 125, 280);



//alert("Select rock, paper, or scissors!");


var rps = ["rock", "paper", "scissors"];


document.getElementById("rock").addEventListener('click', function (e) {
    alert("You picked " + rps[0])
    playGame(rps[0])
});
document.getElementById("paper").addEventListener('click', function (e) {
    alert("You picked " + rps[1])
    playGame(rps[1])
});
document.getElementById("scissors").addEventListener('click', function (e) {
    alert("You picked " + rps[2])
    playGame(rps[2])
});


function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(rps[cpuChoice.toString()], playerChoice)

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                alert("Cpu chose Rock. Its a tie")

            }
            else if (cpuChoice == 1) {
                //paper
                alert("Cpu chose Paper. You lose!")
            }
            else {
                //scissors
                alert("Cpu chose scissors. You win!");
            }
            break;
        case "paper":
            if (cpuChoice == 0) {
                //rock
                alert("Cpu chose Rock. You win!")

            }
            else if (cpuChoice == 1) {
                //paper
                alert("Cpu chose Paper. It's a tie!")
            }
            else {
                //scissors
                alert("Cpu chose scissors. You lose!");
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                alert("Cpu chose Rock. You lose!")

            }
            else if (cpuChoice == 1) {
                //paper
                alert("Cpu chose Paper. You Win!")
            }
            else {
                //scissors
                alert("Cpu chose scissors. Its a tie!");
            }
            break;

    }

}


