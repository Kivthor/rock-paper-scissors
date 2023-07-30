'use scrict'

// Begin with a function called getcomputerSelection that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’:

let computerSelection;

function getComputerSelection() { // функция для вывода компьтером нужных значений случайным образом
  computerSelection = Math.floor(Math.random() * 3); // выводит случайное число от 0 до 2

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
function gameRound(playerSelection, computerSelection) { // функция которая определяет победителя одного раунда игры (или ничью)

    if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
    (playerSelection === 'Paper' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Scissors')) {

    return roundResult = `DRAW!\n \n${playerSelection} equals ${computerSelection}!`; // проверка на ничью

  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')) {

    return roundResult = `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`; // проверка на проигрыш

  } else return roundResult = `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`; // проверка на выигрыш
}


function firstCharOfStringInUpperCaseAndRestOfStringInLower() { // функция берет строку и делает первую букву заглавной а остальные строчные (имя тупое, да)

  const stringLowerCase = playerSelection.toLowerCase(); // rock
  const stringFirstChar = stringLowerCase.charAt(0); // r
  const stringFirstCharUpperCase = stringFirstChar.toUpperCase(); // R
  const stringSliceOf = stringLowerCase.slice(1); // ock
  const newString = stringFirstCharUpperCase.concat(stringSliceOf); // R + ock

  return playerSelection = newString; // ROCK => Rock или sciSSORs => Scissors

}


function getPlayerSelection() { // функция для выбора значений которые вводит игрок

  playerSelection = prompt('Enter your choice: ', 'Rock, Paper or Scissors');

  if (playerSelection === null || playerSelection === '') { // проверка если игрок нажмет отмена или отправит пустое поле
    alert('Goodbye!');
    return;
  } else {

      firstCharOfStringInUpperCaseAndRestOfStringInLower()

      if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') { // проверка что вводятся именно нужные значения
        return playerSelection;
      } else {
        alert('Wrong Choice!');
        return;
      }
  }
}


let playerWinCounter = 0;
let computerWinCounter = 0;

function roundResultCount() { // функция для подсчета побед игрока и компьютера в раунде
  switch(roundResult) {
    case `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`:
      playerWinCounter++;
      break;
    case `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`:
      computerWinCounter++;
      break;
  }
}


let numberOfRounds;

function getNumberOfRounds() { // функция для ввода количства желаемых игроком раундов
  numberOfRounds = +prompt('How many rounds in a game you want to play?', 1);
  return numberOfRounds;
}


let gameResult;

function getGameResult() { // функция для подсчета количества очков в конце игры
  if (playerWinCounter === computerWinCounter) {
    gameResult = 'Game is finished!\n \nIT IS DRAW!';
  } else if (playerWinCounter > computerWinCounter) {
    gameResult = 'Game is finished!\n \nYOU WON!';
  } else {
    gameResult = 'Game is finished!\n \nYOU LOST!';
  }
}


function game() { // функция для основной игры

  if (getNumberOfRounds()) {
    for ( let i = 1; i <= numberOfRounds; i++) {

      if (getPlayerSelection()){
        alert(`You chose the ${playerSelection}!`);
      } else return;
  
      getComputerSelection();
      alert(`Computer chose the ${computerSelection}!`);
    
      gameRound(playerSelection, computerSelection);
      alert(roundResult);
  
      roundResultCount();
    }

    getGameResult();
    return gameResult;

  } else {
    alert('Goodbye!');
    return;
  }

}

if (game()) {
  alert(`${gameResult}\n \nYour score is (${playerWinCounter})\nComputer score is (${computerWinCounter})`);
}
