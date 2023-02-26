let playerScore=0;
let computerScore=0;
const playerScore_board = document.getElementById("playerScore");
const computerScore_board = document.getElementById("computerScore");
const results = document.getElementById("finalResult");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

play();

function play() {
    rockButton.addEventListener('click', () => game("rock"));
    paperButton.addEventListener('click', () => game("paper"));
    scissorsButton.addEventListener('click', () => game("scissors"));
}

function computerPlay (){
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function game(playerSelection){
    const computerSelection = computerPlay();
    
    if (playerSelection === computerSelection){
        results.textContent = "It's a draw!";
    }

    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScore_board.textContent = `${playerScore}`;
        const playerChoice = playerSelection.toUpperCase();
        const computerChoice = computerSelection.toUpperCase();
        results.textContent = `You won this round! ${playerChoice} beats ${computerChoice}!`; 
    }

    else {
        computerScore++;
        computerScore_board.textContent = `${computerScore}`;
        const playerChoice = playerSelection.toUpperCase();
        const computerChoice = computerSelection.toUpperCase();
        results.textContent = `You lost this round! ${computerChoice} beats ${playerChoice}!`;
    }
    
    checkWinner();  
}

function checkWinner(){  
    if (playerScore === 5){
        results.textContent = `Congratulations! You won the game!`;
        results.style.cssText +="color:#792435; font-size:50px; font-weight:800;"; 
        setTimeout(() => { 
           playAgain();
        }, 1000);
    }

    else if (computerScore === 5){
        results.textContent = `Sorry! You lost the game!`;
        results.style.cssText +="color:#792435; font-size:50px; font-weight:800;";   
        setTimeout(() => { 
            playAgain();
        }, 1000); 
    }
}

function playAgain(){
    if (window.confirm("Would you like to play again?")){
        location.href="index.html";
    }
    else {
        return;
    }
}