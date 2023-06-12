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

//Play a single round of Rock, Paper Scissors
let playRound = (computer, player) => {
  if ((computer === "Rock" && player === "Paper") || (computer === "Paper" && player === "Scissors") || (computer === "Scissors" && player === "Rock")) {
    return "You Win";
  } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
    return "Computer Wins";
  } else if (computer === player) {
    return "Tie";
  }
};

//Set variables for results
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const finalScore = document.querySelector(".final");

// //Play game 5 times and tell function who wins (Figure out how that correlates to buttons)
let playGamePrompt = () => {
  playerCount = 0;
  computerCount = 0;

  for (let i = 0; i < 5; i++) {
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
  }
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
