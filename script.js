let computerScore = 0;
let humanScore = 0;

scoreboard_human = document.querySelector("#user-score");
scoreboard_computer = document.querySelector("#computer-score");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const newgame = document.querySelector("#new-game");

const gamelog = document.querySelector("#gamelog");
const playground = document.querySelector("#playground");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	const index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function getHumanChoice() {
	buttons = playground.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", function (event) {
			playGame(event.target.id);
		});
	});
}

function playRound(humanChoice,computerChoice) {
	let message;
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
	const log = document.createElement("p")
	log.classList.add = "log";
	log.textContent = message;
	return log;
}

function playGame(humanChoice) {
	let computerChoice = getComputerChoice();
	let log = playRound(humanChoice, computerChoice);
	scoreboard_human.textContent = humanScore;
	scoreboard_computer.textContent = computerScore;
	gamelog.appendChild(log);
	if (computerScore === 3 || humanScore === 3) {
		let result = document.createElement("p");
		if (computerScore === 3){
			result.textContent = "Computer Wins!";
		} else {
			result.textContent = "You Win!";
		}
		gamelog.appendChild(result);
		newgame.classList.remove("hide");
	}
}

getHumanChoice();

newgame.addEventListener("click", () => {
	gamelog.textContent = "";
	newgame.classList.add("hide");
	humanScore = 0;
	computerScore = 0;
	scoreboard_human.textContent = humanScore;
	scoreboard_computer.textContent = computerScore;
});