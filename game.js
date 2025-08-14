let playerScore = 0;
let computerScore = 0;
let round = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundCountEl = document.getElementById("round-count");
const roundResultEl = document.getElementById("round-result");
const finalResultEl = document.getElementById("final-result");
const playAgainBtn = document.getElementById("play-again");

const choices = document.querySelectorAll(".choice-btn");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        if (round < 5) {
            playRound(choice.dataset.choice);
        }
    });
});

playAgainBtn.addEventListener("click", resetGame);

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    round++;
    roundCountEl.textContent = round;

    if (playerChoice === computerChoice) {
        roundResultEl.textContent = `Tie! You both chose ${playerChoice}`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        roundResultEl.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        roundResultEl.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }

    if (round === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore > computerScore) {
        finalResultEl.textContent = "🎉 Congratulations! You Won The Game!";
    } else if (computerScore > playerScore) {
        finalResultEl.textContent = "💻 Game Over! Computer Wins!";
    } else {
        finalResultEl.textContent = "🤝 It's a Tie Game! Try Again!";
    }
    playAgainBtn.classList.remove("hidden");
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    playerScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    roundCountEl.textContent = "0";
    roundResultEl.textContent = "";
    finalResultEl.textContent = "";
    playAgainBtn.classList.add("hidden");
}
