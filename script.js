// Improved rock paper scissors game with UI


const container = document.querySelector('#buttons');

let outputText = document.createElement('h4');
// add a class before styling

let outputScore = document.createElement('p');
// add a class before styling

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => button.addEventListener('click', function(e) {
    outcome(e.target.textContent.toLowerCase(), computerPlay());
})
);


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function outcome(playerSelection, computerSelection) {
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        outputText.textContent = "You entered the wrong thing!\nYou need to choose from rock, paper or scissors";
        return;
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        outputText.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        outputScore.textContent = `Player score : ${playerScore}  Computer score : ${computerScore}`;
        return;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        outputText.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        outputScore.textContent = `Player score : ${playerScore}  Computer score : ${computerScore}`;
        return;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        outputText.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        outputScore.textContent = `Player score : ${playerScore}  Computer score : ${computerScore}`;
        return;
    }
    else if (computerSelection === playerSelection) {
        outputText.textContent = `It's a tie!`;
        return;
    }
    else {
        computerScore++;
        outputText.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
        outputScore.textContent = `Player score : ${playerScore}  Computer score : ${computerScore}`;
        return;
    }
}


container.appendChild(outputText);
container.appendChild(outputScore);

