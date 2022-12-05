let playerScore = 0;
let computerScore = 0;

function playerChoice() {
    let choose = prompt("Choose rock, paper or scissors").toLowerCase().trim();
    while (choose !== "rock" && choose !== "paper" && choose !== "scissors") {
        choose = prompt("Choose a proper move: ").toLowerCase().trim();
    }
    return choose;  
}

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = playerChoice();

    if (playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        return "It's a TIE!";
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (playerScore > computerScore) {
        return `You WON the match - ${playerScore}:${computerScore}`;
    }
    else if (playerScore < computerScore) {
        return `You LOSE the match - ${playerScore}:${computerScore}`;
    }
    else {
        return `The match is a TIE - ${playerScore}:${computerScore}`;
    }
}

console.log(game());