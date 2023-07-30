'use scrict'

let computerChoice;

// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’:

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3); // returns random number between 0 and 2;

  switch(computerChoice) {
    case 0:
      computerChoice = 'Rock';
      break;
    case 1:
      computerChoice = 'Paper';
      break;
    case 2:
      computerChoice = 'Scissors';
      break;
  }

  return computerChoice;
}

getComputerChoice();
console.log(computerChoice);