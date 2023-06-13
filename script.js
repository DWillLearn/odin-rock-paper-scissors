//Set variables for game buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const gameButtons = Array.from(document.querySelectorAll("button"));

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

//Add an event listener that uses button's text and random computer choice as args for playRound
gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound((computer = getComputerChoice()), button.textContent);
  });
});

//Show what each player did

//Set variables for results
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const finalScore = document.createElement("p");
finalScore.classList.add("final");

//Set initial scores
let playerCount = 0;
let computerCount = 0;

//Play a single round of Rock, Paper Scissors
let playRound = (computer, player) => {
  if ((computer === "Rock" && player === "Paper") || (computer === "Paper" && player === "Scissors") || (computer === "Scissors" && player === "Rock")) {
    playerCount++;
    playerScore.textContent = `Player: ${playerCount}`;
  } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
    computerCount++;
    computerScore.textContent = `Computer: ${computerCount}`;
  }
  keepCount();
};

//Keep score until someone reaches 5  and send scores to whoWon
let keepCount = () => {
  if (playerCount === 5 || computerCount === 5) {
    whoWon(playerCount, computerCount);
  }
};

//Announce winner
let whoWon = (player, computer) => {
  if (player > computer) {
    finalScore.textContent = "You Win!";
  } else if (player < computer) {
    finalScore.textContent = "Computer Wins!";
  } else if (player === computer) {
    finalScore.textContent = "It's a Tie!";
  }
};
