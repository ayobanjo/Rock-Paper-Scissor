const startGame = document.querySelector(".start");

const gameObjects = ["ROCK", "PAPER", "SCISSOR"];
const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  recordScore();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

// function for players' choice

function playerChoice() {
  let choice = prompt("Type Rock, Paper, or Scissors", "");
  while (choice == null) {
    choice = prompt("Type Rock, Paper, or Scissors", "");
  }
  choice = choice.toLocaleUpperCase();

  let check = validateChoice(choice);
  while (check == false) {
    choice = prompt("Type Rock, Paper, or Scissors. Spelling must be correct");

    while (choice == null) {
      choice = prompt("Type Rock, Paper, or Scissors", "");
    }
    choice = choice.toLocaleUpperCase();
    check = validateChoice(choice);
  }

  return choice;
}

// function for computerss' choice
function computerChoice() {
  return gameObjects[Math.floor(Math.random() * gameObjects.length)];
}

// a function to validate input
function validateChoice(choice) {
  return gameObjects.includes(choice);
  // if(gameObjects.includes(choice)){
  //     return true
  // }else{
  //     return false
  // }
}

//for simplification, since includes returns true or false...
// return gameObjects.includes(choice)

//function that plays the round

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Its a Draw`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER")
  ) {
    return `Player`;
  } else {
    return `Computer`;
  }
}
function recordScore() {
  //   console.log(winners);
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let draws = winners.filter((item) => item == "Its a Draw").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Draws:", draws);

  // an array method to filter through the array winners and check the conditions. Length shows us the number of times the item occured
}
function logRound(playerSelection, computerSelection, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerSelection);
  console.log("Computer chose:", computerSelection);
  console.log(winner, "Won the round");
  console.log("----------------------------------------");
}

startGame.addEventListener("click", game);
