'use scrict'

// Begin with a function called getcomputerSelection that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’:

let computerSelection;

function getComputerSelection() {
  computerSelection = Math.floor(Math.random() * 3); // returns random number between 0 and 2;

  switch(computerSelection) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'Paper';
      break;
    case 2:
      computerSelection = 'Scissors';
      break;
  }

  return computerSelection;
}

// Writing a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerSelection;
let roundResult;

function gameRound(playerSelection, computerSelection) {

    if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {

    return roundResult = `Draw! ${playerSelection} equals ${computerSelection}!`;

  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {

    return roundResult = `You loose! ${computerSelection} beats ${playerSelection}!`;

  } else return roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
}

function getPlayerSelection() {

  playerSelection = prompt('Enter your choice: ', 'Rock, Paper or Scissors');

  const stringLowerCase = playerSelection.toLowerCase(); // rock
  const stringFirstChar = stringLowerCase.charAt(0); // r
  const stringFirstCharUpperCase = stringFirstChar.toUpperCase(); // R
  const stringSliceOf = stringLowerCase.slice(1); // ock
  const newString = stringFirstCharUpperCase + stringSliceOf; // R + ock

  return playerSelection = newString;

}

let playerWinCounter = 0;
let computerWinCounter = 0;

function roundResultCount() {
  switch(roundResult) {
    case `You win! ${playerSelection} beats ${computerSelection}!`:
      playerWinCounter++;
      break;
    case `You loose! ${computerSelection} beats ${playerSelection}!`:
      computerWinCounter++;
      break;
  }
}

let gameResult;

function game() {

  for ( let i = 0; i <= 2; i++) {

    getPlayerSelection();

    if (playerSelection === null) {
      alert('Goodbye!');
      return;
    } else if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
      console.log(`You chose the ${playerSelection}!`);
    } else {
      alert('Wrong Choice!');
      return
    }

    getComputerSelection();
    console.log(`Computer chose the ${computerSelection}!`);
  
    gameRound(playerSelection, computerSelection);
    console.log(roundResult);

    roundResultCount();

    }

  if (playerWinCounter === computerWinCounter) {
    gameResult = 'Draw!';
  } else if (playerWinCounter > computerWinCounter) {
    gameResult = 'You Won the Game!';
  } else {
    gameResult = 'You Lost the Game!';
  }

  return gameResult;

}

if (game()) {
  console.log(`${gameResult}\nYour score is (${playerWinCounter})\nComputer score is (${computerWinCounter})`);
}
