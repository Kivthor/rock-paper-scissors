"use scrict";

let playerWinCounter = 0;
let computerWinCounter = 0;

game();

// основная функция
function game() {
  // получаем количество раундов игры
  const numberOfRounds = getNumberOfRounds();

  if (numberOfRounds) {
    console.log(`${numberOfRounds} Round(s) are chosen!`);

    for (let i = 1; i <= numberOfRounds; i++) {
      // получаем выбор игрока
      let playerSelection = getPlayerSelection();

      // проверка что игрок сделал правильный выбор
      if (playerSelection) {
        console.log(`------- ROUND ${i} -------`);
        console.log(`You chose ${playerSelection}`);
        // alert(`You chose ${playerSelection}`);
      } else {
        return;
      }
      // получаем выбор компьютера
      let computerSelection = getComputerSelection();
      console.log(`Computer chose ${computerSelection}`);
      // alert(`Computer chose ${computerSelection}`);

      // получаем победителя раунда (или ничью) и счет
      let roundResult = getRoundResult(playerSelection, computerSelection);
      console.log(`${roundResult}\n \nSCORE IS ${playerWinCounter} : ${computerWinCounter}`);
      alert(`${roundResult}\n \nSCORE IS ${playerWinCounter} : ${computerWinCounter}`);

      // получаем счет раунда
      // roundResultCount(roundResult, playerSelection, computerSelection);
      // console.log(`SCORE IS ${playerWinCounter} : ${computerWinCounter}`);
    }
    // получаем результат игры
    let gameResult = getGameResult();
    console.log(gameResult);
    alert(gameResult);
    return gameResult;
  } else {
    console.log("Goodbye!\n \nGame is Over!");
    alert("Goodbye!\n \nGame is Over!");
    return;
  }
}

// вспомогательные функции

// функция для ввода количества желаемых игроком раундов
function getNumberOfRounds() {
  let numberOfRounds = +prompt("How many rounds you want to play?", 1);
  return numberOfRounds;
}

// возвращает случайное число от 0 до 2
function getRandomNumber0_2() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

// функция для вывода компьтером нужных значений случайным образом
function getComputerSelection() {
  switch (getRandomNumber0_2()) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

// функция берет строку и делает первую букву заглавной а остальные строчные
function firstCharOfStringInUpperCaseAndRestOfStringInLower(playerSelection) {
  const stringLowerCase = playerSelection.toLowerCase(); // rock
  const stringFirstChar = stringLowerCase.charAt(0); // r
  const stringFirstCharUpperCase = stringFirstChar.toUpperCase(); // R
  const stringSliceOf = stringLowerCase.slice(1); // ock
  const newString = stringFirstCharUpperCase.concat(stringSliceOf); // R + ock
  return (playerSelection = newString); // ROCK => Rock или sciSSORs => Scissors
}

// функция для выбора значений которые вводит игрок
function getPlayerSelection() {
  let playerSelection = prompt(
    "Enter your choice: ",
    "Rock, Paper or Scissors"
  );
  // проверка если игрок нажмет отмена или отправит пустую строку
  if (!playerSelection) {
    console.log("Goodbye!\n \nGame is Over!");
    alert("Goodbye!\n \nGame is Over!");
    return;
  } else {
    // переводим ввод пользователя в нужный формат вида "Abcdef"
    playerSelection =
      firstCharOfStringInUpperCaseAndRestOfStringInLower(playerSelection);
    // проверка ввода
    if (
      playerSelection == "Rock" ||
      playerSelection == "Paper" ||
      playerSelection == "Scissors"
    ) {
      return playerSelection;
    } else {
      console.log("Wrong Choice!\n \nGame is Over!");
      alert("Wrong Choice!\n \nGame is Over!");
      return;
    }
  }
}

// функция которая определяет победителя одного раунда игры (или ничью)
function getRoundResult(playerSelection, computerSelection) {
  // проверка на ничью
  if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    return `DRAW!\n \n${playerSelection} equals ${computerSelection}!`;
    // проверка на проигрыш
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerWinCounter++;
    return `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`;
    // проверка на выигрыш
  } else {
    playerWinCounter++;
    return `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`;
  }
  
}

// // функция для подсчета побед игрока и компьютера в раунде
// function roundResultCount(roundResult, playerSelection, computerSelection) {
//   switch (roundResult) {
//     case `YOU WIN!\n \n${playerSelection} beats ${computerSelection}!`:
//       playerWinCounter++;
//       break;
//     case `YOU LOSE!\n \n${computerSelection} beats ${playerSelection}!`:
//       computerWinCounter++;
//       break;
//   }
// }

// функция для подсчета количества очков в конце игры
function getGameResult() {
  if (playerWinCounter === computerWinCounter) {
    return `Game is finished!\n \nIT IS DRAW!\n \nFinal score is ${playerWinCounter} : ${computerWinCounter}`;
  } else if (playerWinCounter > computerWinCounter) {
    return `Game is finished!\n \nYOU WON!\n \nFinal score is ${playerWinCounter} : ${computerWinCounter}`;
  } else {
    return `Game is finished!\n \nYOU LOST!\n \nFinal score is ${playerWinCounter} : ${computerWinCounter}`;
  }
}
