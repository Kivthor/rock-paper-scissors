"use strict";

let playerScoreValue = 0;
let computerScoreValue = 0;

const ROCK = "КАМЕНЬ";
const PAPER = "БУМАГУ";
const SCISSORS = "НОЖНИЦЫ";
const DRAW = "НИЧЬЯ";
const VICTORY = "ПОБЕДА";
const DEFEAT = "ПОРАЖЕНИЕ";

const roundsBlock = document.querySelector(".roundsBlock");
const numberOfRounds = document.getElementById("number-of-rounds");
const roundsText = document.getElementById("rounds-text");
const rounds = document.getElementById("rounds");

const showChoice = document.querySelectorAll(".showChoice");
const gameBase = document.querySelector(".gameBase");
const gameBlock = document.querySelector(".gameBlock");
const gameStatus = document.querySelector(".gameStatus");
const gameResultBlock = document.querySelector(".gameResultBlock");
const gameResultValue = document.getElementById("game-result");

const playerChoice = document.getElementById("player-choice");
const playerScore = document.getElementById("player-score");
const computerChoice = document.getElementById("computer-choice");
const computerScore = document.getElementById("computer-score");

const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-button");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const showGameElements = () => {
  roundsBlock.style.display = "none";
  startButton.style.display = "none";
  roundsText.style.display = "block";
  endButton.style.display = "block";
  gameBase.style.display = "flex";
  gameStatus.style.display = "flex";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
};

const hideGameElements = () => {
  roundsBlock.style.removeProperty("display");
  roundsText.style.removeProperty("display");
  startButton.style.removeProperty("display");
  endButton.style.removeProperty("display");
  rockButton.style.removeProperty("cursor");
  paperButton.style.removeProperty("cursor");
  scissorsButton.style.removeProperty("cursor");
  gameBase.style.removeProperty("display");
  gameBlock.style.removeProperty("display");
  gameBlock.style.removeProperty("opacity");
  gameStatus.style.removeProperty("display");
  gameResultBlock.style.removeProperty("display");

  showChoice.forEach((element) => {
    element.style.removeProperty("display");
  });
};

const resetScore = () => {
  playerScoreValue = 0;
  computerScoreValue = 0;
  playerScore.innerText = playerScoreValue;
  computerScore.innerText = computerScoreValue;
};

const showChoiceToggle = () => {
  if (document.querySelector(".showChoice").style.display === "") {
    showChoice.forEach((element) => {
      element.style.display = "inline";
    });
  } else return;
};

const getComputerChoice = () => {
  const randomNumberOf3 = Math.floor(Math.random() * 3);
  switch (randomNumberOf3) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
};

const getRoundResult = (playerChoiceValue, computerChoiceValue) => {
  if (playerChoiceValue === computerChoiceValue) {
    return;
  } else if (
    (playerChoiceValue === ROCK && computerChoiceValue === PAPER) ||
    (playerChoiceValue === PAPER && computerChoiceValue === SCISSORS) ||
    (playerChoiceValue === SCISSORS && computerChoiceValue === ROCK)
  ) {
    computerScoreValue++;
  } else {
    playerScoreValue++;
  }
};

const game = (playerSelection) => {
  showChoiceToggle();

  const playerChoiceValue = playerSelection;
  const computerChoiceValue = getComputerChoice();

  getRoundResult(playerChoiceValue, computerChoiceValue);

  playerChoice.innerText = playerChoiceValue;
  computerChoice.innerText = computerChoiceValue;
  playerScore.innerText = playerScoreValue;
  computerScore.innerText = computerScoreValue;

  if (
    playerScoreValue == numberOfRounds.value ||
    computerScoreValue == numberOfRounds.value
  ) {
    gameResultValue.innerText =
      playerScoreValue === computerScoreValue
        ? DRAW
        : playerScoreValue > computerScoreValue
        ? VICTORY
        : DEFEAT;

    gameResultBlock.style.display = "block";
    roundsText.style.display = "none";
    gameBlock.style.opacity = "30%";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    rockButton.style.cursor = "not-allowed";
    paperButton.style.cursor = "not-allowed";
    scissorsButton.style.cursor = "not-allowed";
  } else return;
};

startButton.addEventListener("click", (event) => {
  showGameElements();
  rounds.innerText = numberOfRounds.value;
});

endButton.addEventListener("click", (event) => {
  hideGameElements();
  resetScore();
});

rockButton.addEventListener("click", (event) => game(ROCK));

paperButton.addEventListener("click", (event) => game(PAPER));

scissorsButton.addEventListener("click", (event) => game(SCISSORS));