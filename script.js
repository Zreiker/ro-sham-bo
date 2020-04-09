const choices = ["Rock", "Paper", "Scissors"]; // Button names
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


/* Takes an int [0,2] for each selection. Returns "win"
   for a win, "loss" for a loss, and "tie" for a tie. */
function computeResult(playerSelection, computerSelection) {
  // Win case
  if ((playerSelection - 1 + choices.length) % choices.length ===
      computerSelection) {
    return "win";
  }
  // Lose case
  else if ((playerSelection + 1) % choices.length === computerSelection) {
    return "loss";
  }
  // Tie case
  else if (playerSelection === computerSelection) {
    return "tie";
  }
  else {
    console.error("imporper playerSelection!");
  }
}

function playRound(playerSelection) {
  let computerSelection = Math.floor(Math.random() * 3);
  let playerString = choices[playerSelection];
  let computerString = choices[computerSelection];

  let result = computeResult(playerSelection, computerSelection);
  let resultString = "Not set.";

  if (result === "win") {
    const playerElement = document.querySelector("#player-score");
    playerElement.textContent = (playerScore += 1);
    resultString = `You win! ${playerString} beats ${computerString}!`;
  }
  else if (result === "loss") {
    const computerElement = document.querySelector("#computer-score");
    computerElement.textContent = (computerScore += 1);
    resultString = `You lose. ${playerString} loses to ${computerString}.`;
  }
  else if (result === "tie") {
    resultString = `It's a tie! You both chose ${playerString}.`;
  }

  const gamesElement = document.querySelector("#games");
  gamesElement.textContent = (gamesPlayed += 1);

  const resultElement = document.querySelector("#result");
  resultElement.textContent = resultString;
}

const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(choices.indexOf(e.target.textContent));
    // Logic to win the whole game.
    if (gamesPlayed === 5) {
      let message = "";
      if (playerScore > computerScore)
        message = "You win the game!";
      else if (playerScore < computerScore)
        message = "You lose the game.";
      else
        message = "It's a tie!";
      setTimeout(() => { alert(message); location.reload(); }, 100);
    }
  });
});
