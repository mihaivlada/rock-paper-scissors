
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

// we declare a global variable to store the player score
let playerScore = 0;
// we declare a global variable to store the computer score
let computerScore = 0;

// write a function with 2 parameters that evaluates the playerSelection and the computerSelection
// and displays a string if you win or lose
function outcome(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        // we increase the player score each time the player wins
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        // we increase the player score each time the player wins
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        // we increase the player score each time the player wins
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === playerSelection) {
        return `It's a tie!`;
    }
    else {
        // we increase the computer score each time the computer wins
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
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

// we declare a contor
let i = 0;

// we do a while loop to play 5 times
while (i < 5) {

    // get input from the user
    // put that input in a variable
    // make that input case insesitive
    let result = prompt("Choose rock, paper or scissors!");
    result = result.toLowerCase();
    // play the game!
    console.log(game(result));
    // we display the score after each round
    console.log(`Player score : ${playerScore}  Computer score : ${computerScore}`);
    // we increase the contor
    i++;
}
if (playerScore > computerScore) {
    console.log("YOU ARE THE WINNER! CONGRATS");
}
else if(playerScore < computerScore){
    console.log("Computer wins");
}
else {
    console.log("It's a draw!");
}
