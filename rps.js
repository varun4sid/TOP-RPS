const choices = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice(){
    while (true) {
        let user_choice = prompt("Enter your choice : ");
        user_choice = user_choice.toLowerCase();

        if (choices.includes(user_choice)) {
            return user_choice;
        } else {
            alert("Invalid Input! Try Again!");
        }
    }
}

function playRound(humanChoice,computerChoice){
    let message = "";
    if (computerChoice === humanChoice) {
        message = `Tied! ${computerChoice}!`;
    } else {
        if (computerChoice === "rock") {
            if (humanChoice === "paper") {
                message = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
            } else {
                message = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            }
        } else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                message = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            } else {
                message = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
            }
        } else {
            if (humanChoice === "rock"){
                message = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
            }
            else{
                message = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            }
        }
    }
    console.log(message);
}

function playGame(){
    
    while (humanScore<3 && computerScore<3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`User ${humanScore} - ${computerScore} Computer`);
    }

    if (humanScore === 3){
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }

    const playAgain = prompt("Would you like to play again (y/n)?");
    if (playAgain.toLowerCase() === "y"){
        humanScore = 0;
        computerScore = 0;
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

playGame();