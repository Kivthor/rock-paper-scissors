'use scrict'

let computerResult;

// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’:

function getComputerChoice() {
  computerResult = Math.floor(Math.random() * 3); // returns random number between 0 and 2;

  switch(computerResult) {
    case 0:
      computerResult = 'Rock';
      break;
    case 1:
      computerResult = 'Paper';
      break;
    case 2:
      computerResult = 'Scissors';
      break;
  }

  return computerResult;
}

getComputerChoice();
console.log(computerResult);