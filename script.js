"use scrict";

game();

// основная функция
function game() {
  let playerScore = 0;
  let computerScore = 0;
  // вызываем функцию для выбора счета для победы
  const numberOfRounds = getNumberOfRounds();
  // проверка если игрок закрыл окно ввода или ввел неверное значение
  if (!numberOfRounds) {
    console.log("wrong input, game is over");
    return;
  } else console.log(`WINNER SCORE MUST BE EQUAL TO ${numberOfRounds}`);
  // цикл для повторения раундов игры пока счет игрока или компьютера не станет равным выбранному ранее счету для победы
  while (playerScore < numberOfRounds && computerScore < numberOfRounds) {
    console.log('<NEW ROUND>');
    // вызываем функцию выбора игрока
    const playerSelection = getPlayerSelection();
    // проверка если игрок закрыл окно ввода или ввел неверное значение
    if (!playerSelection) {
      console.log("wrong input, game is over");
      return;
    }
    console.log(`your choice is --- ${playerSelection} ---`);
    // вызываем функцию выборы компьютера
    const computerSelection = getComputerSelection();
    console.log(`computer choice is --- ${computerSelection} ---`);
    // вызываем функцию для определения победителя одного раунда
    const roundResult = getRoundResult(playerSelection, computerSelection);
    console.log(`IT'S A ${roundResult}!`);
    // увеличиваем счет игрока или компьютера в зависимости от результата раунда
    switch (roundResult) {
      case "VICTORY":
        playerScore++;
        break;
      case "DEFEAT":
        computerScore++;
        break;
      case "DRAW":
        break;
    }
    console.log(`Round score is ${playerScore} : ${computerScore}`);
  }
  // вызываем функцию для определения победителя всей игры
  const gameResult = getGameResult(playerScore, computerScore);
  console.log(
    `GAME IS FINISHED!\nSCORE IS ${playerScore} : ${computerScore}!\nYOU ${gameResult}!`
  );
  return gameResult;
}

// вспомогательные функции

// функция для определения сколько игрок или компьютер должны набрать очков для победы
function getNumberOfRounds() {
  const numberOfRounds = +prompt("Score to win?", 3);
  return numberOfRounds;
}

// функция для вывода компьтером нужных значений случайным образом
function getComputerSelection() {
  const randomNumberOf3 = Math.floor(Math.random() * 3);
  switch (randomNumberOf3) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// функция для выбора значений которые вводит игрок
function getPlayerSelection() {
  const playerSelection = prompt(
    "Enter your choice: ",
    "Rock, Paper or Scissors"
  );
  // проверка если игрок нажмет отмена или отправит пустую строку
  if (!playerSelection) {
    return;
  } else if (
    playerSelection.toLowerCase() === "rock" ||
    playerSelection.toLowerCase() === "paper" ||
    playerSelection.toLowerCase() === "scissors"
  ) {
    return playerSelection.toLowerCase();
  }
  return;
}

// функция которая определяет победителя одного раунда игры (или ничью)
function getRoundResult(playerSelection, computerSelection) {
  // проверка на ничью
  if (playerSelection === computerSelection) {
    return "DRAW";
    // проверка на проигрыш
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "DEFEAT";
    // проверка на выигрыш
  } else {
    return "VICTORY";
  }
}

//функция для установления победителя игры
function getGameResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "WIN";
  } else return "LOOSE";
}
