<!DOCTYPE html>
<html>
    <head>
        <title>Rock, Papper, Scissors</title>
    </head>
    <body>
        <script>
            function computerPlay() {
                let choices = ['rock', 'paper', 'scissors'];
                let selection = Math.floor(Math.random() * 3);
                return choices[selection];
            }

            // returns 1 if player wins, returns 0 if computer wins, returns -1 if its a tie
            function playRound(playerSelection, computerSelection) {
                playerSelection = playerSelection.toLowerCase();
                
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
            
            function game() {
                let playerSelection;
                let computerSelection;
                let playerScore = 0;
                let computerScore = 0;

                for (let i = 0; i < 5; i++) {
                    playerSelection = prompt("Rock, Paper, Scissors, shoot!");
                    computerSelection = computerPlay();
                    
                    let roundResult = playRound(playerSelection, computerSelection);

                    console.log("Round " + (i+1) + ":");
                    console.log("Computer selection: " + computerSelection);
                    console.log("Player selection: " + playerSelection);
                    console.log();

                    if (roundResult == 1) {
                        playerScore++;
                        console.log("You win this round!");
                    } else if (roundResult == 0) {
                        computerScore++;
                        console.log("You lose this round!");
                    } else {
                        console.log("You tied this round!");
                    }
                    console.log();
                }

                console.log("Final Score:");
                console.log("Computer: " + computerScore);
                console.log("User: " + playerScore);
                console.log();

                if (playerScore > computerScore) {
                    console.log("You win!");
                } else if (playerScore < computerScore) {
                    console.log("You lose!");
                } else {
                    console.log("It's a tie!");
                }
            }
            
            game();
        </script>
    </body>
</html>