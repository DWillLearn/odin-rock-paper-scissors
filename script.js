const getPlayerChoice = () => {
  //Set variable for game buttons
  const gameButtons = Array.from(document.querySelectorAll("button"));

  //Add an event listener that uses button's text and random computer choice as args for playRound
  gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound((computer = getComputerChoice()), button.textContent);
    });
  });
};

//Randomly return "Rock", "Paper", or "Scissors" for computer turn
//Make the item returned based on a random number between 1 and 3 and rounded to the nearest whole number
let getComputerChoice = () => {
  let getItem = Math.floor(Math.random() * 3 + 1);

  switch (getItem) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return "Not an option";
  }
};

//Set initial scores
const scoreContainer = document.querySelector(".scores");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
let playerCount = 0;
let computerCount = 0;

//Make element that shows score text
let scoreText = document.createElement("p");
scoreText.classList.add("score-text");

//Play a single round of Rock, Paper Scissors and keep running score
let playRound = (computer, player) => {
  scoreContainer.appendChild(scoreText);
  if (playerCount < 5 && computerCount < 5) {
    if ((computer === "Rock" && player === "Paper") || (computer === "Paper" && player === "Scissors") || (computer === "Scissors" && player === "Rock")) {
      playerCount++;
      playerScore.textContent = `Player: ${playerCount}`;
      scoreText.textContent = `Player's ${player} vs. Computer's ${computer}! Player +1`;
    } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
      computerCount++;
      computerScore.textContent = `Computer: ${computerCount}`;
      scoreText.textContent = `Computer's ${computer} vs. Player's ${player}! Computer +1`;
    } else {
      scoreText.textContent = `Computer's ${computer} ties with Player's ${player}! +0`;
    }
    keepCount();
  }
};

//Keep score until someone reaches 5 and send scores to whoWon
let keepCount = () => {
  if (playerCount === 5 || computerCount === 5) {
    whoWon(playerCount, computerCount);
  }
};

//Announce winner
let whoWon = (player, computer) => {
  if (player > computer) {
    scoreText.textContent = "You Win!";
  } else if (player < computer) {
    scoreText.textContent = "Computer Wins!";
  }
  resetScore();
};

//Reset final score
const resetScore = () => {
  //Create and append reset button
  let gameContainer = document.querySelector(".game");
  let resetButton = document.createElement("button");
  resetButton.classList.add("reset");
  resetButton.textContent = "Try again?";
  if (!gameContainer.querySelector(".reset")) {
    gameContainer.appendChild(resetButton);
  }

  //Reset scores and remove final scores and reset button on click
  resetButton.addEventListener("click", () => {
    playerCount = 0;
    playerScore.textContent = `Player: ${playerCount}`;
    computerCount = 0;
    computerScore.textContent = `Computer: ${computerCount}`;
    scoreContainer.removeChild(scoreText);
    gameContainer.removeChild(resetButton);
  });
};

//Start game on window load
window.addEventListener("load", getPlayerChoice());
