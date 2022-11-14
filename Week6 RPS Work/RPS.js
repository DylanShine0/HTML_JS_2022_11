//camvas drawing stuff

var canvas = document.getElementById("c");
var shape = canvas.getContext("2d");

//drawing the fonts

shape.font = "40px Arial";
shape.fillStyle = "red"
shape.strokeStyle = "cyan"
shape.fillText("Welcome to the RPS Game!", 125, 80);
shape.strokeText("Welcome to the RPS Game!", 125, 80);




//alert("Select rock, paper, or scissors!");


var rps = ["rock", "paper", "scissors"];

var playerPoints = 0;
var cpuPoints = 0;
var pointDifferance = 0;
var temp = 0;




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


shape.font = "20px Arial";
shape.fillStyle = "black"


function playGame(playerChoice) {
    shape.clearRect(0, 0, canvas.width, canvas.height);

    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(rps[cpuChoice.toString()], playerChoice)

    

    shape.fillText("You picked... " + playerChoice + "!", 200, 300)
    shape.fillText("Cpu picked... " + rps[cpuChoice.toString()] + "!", 400, 300)
    
    shape.fillText("Your points: " + playerPoints, 200, 350)
    shape.fillText("Cpu's Points: " + cpuPoints, 400, 350)


    pointDifferance = playerPoints - cpuChoice

    shape.fillText("Point Differance: " + pointDifferance, 300, 400)
    

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                //alert("Cpu chose Rock. Its a tie")

            }
            else if (cpuChoice == 1) {
                //paper
                //alert("Cpu chose Paper. You lose!")
                cpuPoints += 1
            }
            else {
                //scissors
                //alert("Cpu chose scissors. You win!");
                playerPoints += 1
            }
            break;
        case "paper":
            if (cpuChoice == 0) {
                //rock
                //alert("Cpu chose Rock. You win!")
                playerPoints += 1

            }
            else if (cpuChoice == 1) {
                //paper
                //alert("Cpu chose Paper. It's a tie!")
            }
            else {
                //scissors
                //alert("Cpu chose scissors. You lose!");
                cpuPoints += 1
            }
            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                //alert("Cpu chose Rock. You lose!")
                cpuPoints += 1

            }
            else if (cpuChoice == 1) {
                //paper
                //alert("Cpu chose Paper. You Win!")
                playerPoints += 1
            }
            else {
                //scissors
                //alert("Cpu chose scissors. Its a tie!");
            }
            break;

    }
    

}


