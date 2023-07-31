"use scrict";

// основная функция //////////////////////////////////////////////////////////////////////////////////////

let playerWinCounter = 0;
let computerWinCounter = 0;

function game() {
  const numberOfRounds = getNumberOfRounds();

  if (numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {

      let playerSelection = getPlayerSelection();
      if (playerSelection) {
        alert(`You chose ${playerSelection}`);
      } else {
        return;
      }

      let computerSelection = getComputerSelection();
      alert(`Computer chose ${computerSelection}`);

      let roundResult = getRoundResult(playerSelection, computerSelection);
      alert(roundResult);

      roundResultCount(roundResult, playerSelection, computerSelection);
    }

    let gameResult = getGameResult(playerWinCounter, computerWinCounter);
    return gameResult;

  } else {
    alert("Goodbye!\n \nGame is Over!");
    return;
  }
}

if (game()) {
  alert(
    `${getGameResult(
      playerWinCounter,
      computerWinCounter
    )}\n \nYour score is --- (${playerWinCounter})\nComputer score is --- (${computerWinCounter})`
  );
}

// вспомогательные функции ////////////////////////////////////////////////////////////////////////////////////

function getRandomNumber0_2() {
  // возвращает случайное число от 0 до 2
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

function getComputerSelection() {
  // функция для вывода компьтером нужных значений случайным образом
  switch (getRandomNumber0_2()) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function firstCharOfStringInUpperCaseAndRestOfStringInLower(playerSelection) {
  // функция берет строку и делает первую букву заглавной а остальные строчные (имя тупое, да)
  const stringLowerCase = playerSelection.toLowerCase(); // rock
  const stringFirstChar = stringLowerCase.charAt(0); // r
  const stringFirstCharUpperCase = stringFirstChar.toUpperCase(); // R
  const stringSliceOf = stringLowerCase.slice(1); // ock
  const newString = stringFirstCharUpperCase.concat(stringSliceOf); // R + ock

  return (playerSelection = newString); // ROCK => Rock или sciSSORs => Scissors
}

function getPlayerSelection() {
  // функция для выбора значений которые вводит игрок
  let playerSelection = prompt(
    "Enter your choice: ",
    "Rock, Paper or Scissors"
  );

  if (!playerSelection) {
    // проверка если игрок нажмет отмена или отправит пустое поле
    alert("Goodbye!\n \nGame is Over!");
    return;
  } else {
    playerSelection = firstCharOfStringInUpperCaseAndRestOfStringInLower(playerSelection);

    if (
      playerSelection == "Rock" ||
      playerSelection == "Paper" ||
      playerSelection == "Scissors"
    ) {
      // проверка что вводятся именно нужные значения
      return playerSelection;
    } else {
      alert("Wrong Choice!\n \nGame is Over!");
      return;
    }
  }
}

function getRoundResult(playerSelection, computerSelection) {
  // функция которая определяет победителя одного раунда игры (или ничью)

  if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    return `DRAW!\n \n${playerSelection} equals ${computerSelection}!`; // проверка на ничью
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`; // проверка на проигрыш
  } else return `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`; // проверка на выигрыш
}

function roundResultCount(roundResult, playerSelection, computerSelection) {
  // функция для подсчета побед игрока и компьютера в раунде
  switch (roundResult) {
    case `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`:
      playerWinCounter++;
      break;
    case `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`:
      computerWinCounter++;
      break;
  }
}

function getNumberOfRounds() {
  // функция для ввода количества желаемых игроком раундов
  let numberOfRounds = +prompt("How many rounds you want to play?", 1);
  return numberOfRounds;
}

function getGameResult(playerWinCounter, computerWinCounter) {
  // функция для подсчета количества очков в конце игры
  if (playerWinCounter === computerWinCounter) {
    return "Game is finished!\n \nIT IS DRAW!";
  } else if (playerWinCounter > computerWinCounter) {
    return "Game is finished!\n \nYOU WON!";
  } else {
    return "Game is finished!\n \nYOU LOST!";
  }
}
