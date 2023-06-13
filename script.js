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

//Show what each player did
const showPlay = () => {};

//Set initial scores
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
let playerCount = 0;
let computerCount = 0;

//Play a single round of Rock, Paper Scissors and keep running score
let playRound = (computer, player) => {
  if (playerCount < 5 && computerCount < 5) {
    if ((computer === "Rock" && player === "Paper") || (computer === "Paper" && player === "Scissors") || (computer === "Scissors" && player === "Rock")) {
      playerCount++;
      playerScore.textContent = `Player: ${playerCount}`;
    } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
      computerCount++;
      computerScore.textContent = `Computer: ${computerCount}`;
    }
    keepCount();
  }
};

//Keep score until someone reaches 5  and send scores to whoWon
let keepCount = () => {
  if (playerCount === 5 || computerCount === 5) {
    whoWon(playerCount, computerCount);
  }
};

//Make final score container
const scoreContainer = document.querySelector(".scores");
const finalScore = document.createElement("p");
finalScore.classList.add("final");

//Announce winner
let whoWon = (player, computer) => {
  if (!scoreContainer.querySelector(".final")) {
    scoreContainer.appendChild(finalScore);
    //Show who won
    if (player > computer) {
      finalScore.textContent = "You Win!";
    } else if (player < computer) {
      finalScore.textContent = "Computer Wins!";
    }
    resetScore();
  }
};

//Add a reset button
const resetScore = () => {
  //Create and append reset button
  let gameContainer = document.querySelector(".game");
  let resetButton = document.createElement("button");
  resetButton.classList.add("reset");
  resetButton.textContent = "Try again?";
  if (!gameContainer.querySelector(".reset")) {
    gameContainer.appendChild(resetButton);
  }

  //Reset scores on button click
  resetButton.addEventListener("click", () => {
    playerCount = 0;
    playerScore.textContent = `Player: ${playerCount}`;
    computerCount = 0;
    computerScore.textContent = `Computer: ${computerCount}`;
    //Remove winner
    scoreContainer.removeChild(finalScore);
    gameContainer.removeChild(resetButton);
  });
};

//Start game on window load
window.addEventListener("load", getPlayerChoice());
