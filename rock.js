const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

let result = document.querySelector(".result");
let score = document.querySelector(".score");

function playRound(pSelection, comSelection) {
    
    if (pSelection.toLowerCase() == "rock"){
        switch (comSelection) {
            case "rock":
                result.innerText = "Rock ties with rock";
                return 0;
                break;
            
            case "paper":
                result.innerText ="You lose. Paper beats rock.";
                return -1;
                break;

            case "scissors":
                result.innerText = "You win. Rock beats scissors";
                return 1;
        }
    } else if (pSelection.toLowerCase() == "paper") {
        switch (comSelection) {
            case "rock":
                result.innerText = "You win. Paper beats rock";
                return 1;
                break;
            
            case "paper":
                result.innerText = "Paper ties with paper";
                return 0;
                break;

            case "scissors":
                result.innerText = "You lose. Scissors beats paper.";
                return -1;
        }
    } else if (pSelection.toLowerCase() == "scissors") {
        switch (comSelection) {
            case "rock":
                result.innerText = "You lose. Rock beats scissors";
                return -1;
                break;
            
            case "paper":
                result.innerText ="You win. Scissors beats paper.";
                return 1;
                break;

            case "scissors":
                result.innerText ="Tie";
                return 0;
        }
    }
}

let pScore = 0, comScore = 0;

function game() {
        let pSelection = this.innerText;
        let comSelection = getComputerChoice();
        let gameResult = playRound(pSelection, comSelection);
        
        if (gameResult == 1) pScore++;
        else if (gameResult == -1) comScore++;
    score.innerText = `Player Score: ${pScore}  
    Computer Score: ${comScore}`;
   
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",
game));