"use strict";

let playerScoreValue = 0;
let computerScoreValue = 0;

const ROCK = "КАМЕНЬ";
const PAPER = "БУМАГУ";
const SCISSORS = "НОЖНИЦЫ";
const DRAW = "НИЧЬЯ";
const VICTORY = "ПОБЕДА";
const DEFEAT = "ПОРАЖЕНИЕ";

const gameRoundsSelectForm = document.querySelector(".select-form");
const gameRoundsSelect = document.querySelector(".rounds-select");
const gameInfo = document.querySelector(".game-info");
const gameInfoMessage = document.querySelector(".game-info__message");
const gameInfoSelectedRounds = document.querySelector(
  ".game-info__selected-rounds"
);
const gameStartButton = document.querySelector(".start-button");
const gameEndButton = document.querySelector(".end-button");

const gameStateContainer = document.querySelector(".game-state");
const choiceWord = document.querySelectorAll(".choice-word");
const playerChoice = document.querySelector(".player__choice");
const computerChoice = document.querySelector(".computer__choice");
const gameChoiceButtons = document.querySelectorAll(".game-choices__button");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const gameResultContainer = document.querySelector(".game-result");
const playerScore = document.querySelector(".game-result__score-player");
const computerScore = document.querySelector(".game-result__score-computer");
const gameResultFinalMessage = document.querySelector(
  ".game-result__final-message"
);
const gameResultFinal = document.querySelector(".game-result__final");

const resetScore = () => {
  playerScoreValue = 0;
  computerScoreValue = 0;
  playerScore.innerText = playerScoreValue;
  computerScore.innerText = computerScoreValue;
  gameResultFinal.innerText = "";
};

const showPlayerAndComputerChoices = () => {
  choiceWord.forEach((element) => {
    element.classList.remove("is-hidden");
  });
  playerChoice.classList.remove("is-hidden");
  computerChoice.classList.remove("is-hidden");
};

const disableGameElementsAndShowFinalResult = () => {
  gameInfoMessage.classList.add("is-hidden");
  gameResultFinalMessage.classList.remove("is-hidden");
  gameChoiceButtons.forEach((element) => {
    element.classList.add("is-disabled");
  });
};

const toggleVisibillity = () => {
  gameInfo.classList.toggle("is-hidden");
  gameRoundsSelectForm.classList.toggle("is-hidden");
  gameStateContainer.classList.toggle("is-hidden");
  gameResultContainer.classList.toggle("is-hidden");
  choiceWord.forEach((element) => {
    element.classList.add("is-hidden");
  });
  playerChoice.classList.add("is-hidden");
  computerChoice.classList.add("is-hidden");
  gameInfoMessage.classList.remove("is-hidden");
  gameResultFinalMessage.classList.add("is-hidden");
  gameChoiceButtons.forEach((element) => {
    element.classList.remove("is-disabled");
  });
};

gameStartButton.addEventListener("click", (event) => {
  toggleVisibillity();
  gameInfoSelectedRounds.innerText = gameRoundsSelect.value;
});

gameEndButton.addEventListener("click", (event) => {
  toggleVisibillity();
  resetScore();
});

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
  showPlayerAndComputerChoices();

  const playerChoiceValue = playerSelection;
  const computerChoiceValue = getComputerChoice();

  getRoundResult(playerChoiceValue, computerChoiceValue);

  playerChoice.innerText = playerChoiceValue;
  computerChoice.innerText = computerChoiceValue;
  playerScore.innerText = playerScoreValue;
  computerScore.innerText = computerScoreValue;

  if (
    playerScoreValue == gameRoundsSelect.value ||
    computerScoreValue == gameRoundsSelect.value
  ) {
    gameResultFinal.innerText =
      playerScoreValue === computerScoreValue
        ? DRAW
        : playerScoreValue > computerScoreValue
        ? VICTORY
        : DEFEAT;
    disableGameElementsAndShowFinalResult();
  } else return;
};

rockButton.addEventListener("click", (event) => game(ROCK));

paperButton.addEventListener("click", (event) => game(PAPER));

scissorsButton.addEventListener("click", (event) => game(SCISSORS));
