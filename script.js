
// write a function computerPlay() that will return a random between 3 numbers
// make the function return a sting associated with each number
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors"
    }
}

// write a function with 2 parameters that evaluates the playerSelection and the computerSelection
// and displays a string if you win or lose
function outcome(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === playerSelection) {
        return `It's a tie!`;
    }
    else
        return `You lost! ${computerSelection} beats ${playerSelection}`;
}

// write a function game() that will play one round
// it takes as parameter the playerSelection and displays an error if the string was wrong
// if they enter the right string, call the outcome() function and return the outcome

function game(selection) {
    if ((selection !== "rock") && (selection !== "paper") && (selection !== "scissors")) {
        console.log("You entered the wrong thing!\nYou need to choose from rock, paper or scissors");
        return;
    }
    else {
        return outcome(selection, computerPlay());
    }
}

// get input from the user
// put that input in a variable
// make that input case insesitive
let result = prompt("Choose rock, paper or scissors!");
result = result.toLowerCase();

console.log(game(result));
