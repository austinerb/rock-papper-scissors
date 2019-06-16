// globals
let playerScore = 0;
let computerScore = 0;
const header = document.querySelector("h1");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerScoreDisplay = document.querySelector("#player-score");
const selections = document.querySelector("#selections");

// round initiated by button press
function playRound(e) {
    playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = computerPlay();
    
    let result = determineRoundWinner(playerSelection, computerSelection);
    adjustScores(result);
    displaySelections(playerSelection, computerSelection);
    displayScores();
    checkWinner();
}

// randomly makes a selection
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * 3);
    return choices[selection];
}

// compares selectinons to determine the winner of the round
// returns 1 if player wins, returns 0 if computer wins, returns -1 if its a tie
function determineRoundWinner(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "paper" ||
            computerSelection == "paper" && playerSelection == "scissors" ||
            computerSelection == "scissors" && playerSelection == "rock") {
        return 1;
    } else if (computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "paper" && playerSelection == "rock" ||
            computerSelection == "scissors" && playerSelection == "paper") {
        return 0;
    } else {
        return -1;
    }
}

// adds event listener to the 3 button choices
function addEventListeners() {
    btns = document.querySelectorAll("button");

    btns.forEach(function(btn) {
        btn.addEventListener("click", playRound);
    });
}

// removes event listeners once the game is over
function removeEventListeners() {
    btns = document.querySelectorAll("button");

    btns.forEach(function(btn) {
        btn.removeEventListener("click", playRound);
    });
}

// adjust scores given the result of the round
function adjustScores(roundResult) {
    if (roundResult == 1) {
        playerScore++;
        header.textContent = "You win this round!";
    } else if (roundResult == 0) {
        computerScore++;
        header.textContent = "You lose this round!";
    } else {
        header.textContent = "You tied this round!";
    }
}

// display selections of each player 
function displaySelections(playerSelection, computerSelection) {
    selections.textContent = "Computer: " + computerSelection + ", Player: " + playerSelection;
}

// updates display to show current scores
function displayScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// checks winner
function checkWinner() {
    if (playerScore == 5) {
        header.textContent = "You win!";
        removeEventListeners();
    } else if (computerScore == 5) {
        header.textContent = "You lose!";
        removeEventListeners();
    }
}

// adds event listners to the buttons
// pressing a button initiates the game
addEventListeners();