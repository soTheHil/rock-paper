const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}



function playRound(pSelection, comSelection) {
    console.log(pSelection);
    console.log(comSelection);
    
    if (pSelection.toLowerCase() == "rock"){
        switch (comSelection) {
            case "rock":
                console.log("Rock ties with rock");
                return 0;
                break;
            
            case "paper":
                console.log("You lose. Paper beats rock.");
                return -1;
                break;

            case "scissors":
                console.log("You win. Rock beats scissors");
                return 1;
        }
    } else if (pSelection.toLowerCase() == "paper") {
        switch (comSelection) {
            case "rock":
                console.log("You win. Paper beats rock");
                return 1;
                break;
            
            case "paper":
                console.log("Paper ties with paper");
                return 0;
                break;

            case "scissors":
                console.log("You lose. Scissors beats paper.");
                return -1;
        }
    } else if (pSelection.toLowerCase() == "scissors") {
        switch (comSelection) {
            case "rock":
                console.log("You lose. Rock beats scissors");
                return -1;
                break;
            
            case "paper":
                console.log("You win. Scissors beats paper.");
                return 1;
                break;

            case "scissors":
                console.log("Tie");
                return 0;
        }
    }
}



function game() {
    let pScore = 0, comScore = 0;
    for (let i = 0; i < 5; i++) {

        let pSelection = prompt("Enter choice");
        let comSelection = getComputerChoice();
        let gameResult = playRound(pSelection, comSelection);
        if (gameResult == 1) pScore++;
        else if (gameResult == -1) comScore++;
        console.log(`Player:${pScore} Computer:${comScore}`);
    }
    if (comScore > pScore) console.log("You lost to the computer");
    else if (pScore > comScore) console.log("You won");
    else console.log("It's a tie");
}

game();