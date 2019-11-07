const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    'Enter your name here'
  );

  if (selection !== null) {
    selection.toUpperCase();
  }

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice, we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const startGame = () => {
  gameIsRunning = false;
  console.log('Game is starting ...');
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }

  startGame();

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computerpicked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + `you had a draw`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `won.`;
  } else {
    message = message + `lost.`;
  }
  alert(message);
  startGame();
  console.log('playerChoice: ' + playerChoice);
  console.log('computerChoice:  ' + (computerChoice || DEFAULT_USER_CHOICE));
  console.log('result: ' + winner);
});

// not related to the game
const sumUp = (resultHandler, ...numbers) => {
  const validatNumber = number => {
      return isNaN(number)? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validatNumber(num);
  }

  // callback
  resultHandler(sum);
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

const showResult = (result) => {
    alert(`The result after adding all the numbers is:  ${result}`);
};

sumUp(showResult, 12, 'rer', 3, -5);

console.log(subtractUp(12, 3, 5));
