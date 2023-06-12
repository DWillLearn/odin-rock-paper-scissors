//Set variables for game buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
//Randomly return "Rock", "Paper", or "Scissors"
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

//Play a single round of Rock, Paper Scissors
let playRound = (computer = getComputerChoice(), player = prompt("Choose item!")) => {
  //Change to title case
  player = player.slice(0, 1).toUpperCase() + player.slice(1).toLowerCase();
  if ((computer === "Rock" && player === "Paper") || (computer === "Paper" && player === "Scissors") || (computer === "Scissors" && player === "Rock")) {
    return "You Win";
  } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
    return "Computer Wins";
  } else if (computer === player) {
    return "Tie";
  } else {
    return `Not a possible outcome.`;
  }
};

// //Play game 5 times and tell function who wins
let playGame = () => {
  playerScore = 0;
  computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  let outcome = playRound();
  switch (outcome) {
    case "You Win":
      playerScore++;
      break;
    case "Computer Wins":
      computerScore++;
      break;
    case "Tie":
      break;
    default:
      return "Error!";
  }
  // }
};

let whoWon = (player, computer) => {
  if (player > computer) {
    return "You Win!";
  } else if (player < computer) {
    return "Computer Wins!";
  } else if (player === computer) {
    return "It's a Tie!";
  } else {
    return "Error!";
  }
};
