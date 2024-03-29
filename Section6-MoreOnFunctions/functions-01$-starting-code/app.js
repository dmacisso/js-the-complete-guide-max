const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'Player Wins';
const RESULT_COMPUTER_WINS = 'Computer Wins';
const DEFAULT_USER_CHOICE = 'ROCK';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS}`, '').toUpperCase();
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `Player selected ${playerChoice ||
    DEFAULT_USER_CHOICE}, and the computer selected ${computerChoice}; therefore the`;
  if (winner === RESULT_DRAW) {
    message = `${message} game is a ${RESULT_DRAW}`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `${message} ${RESULT_PLAYER_WINS}`;
  } else {
    message = `${message} ${RESULT_COMPUTER_WINS}`;
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
const combine = (resultHandler, operation, ...numbers) => {
  // Function inside of a function -- local scoped
  const validateNumber = numb => {
    return isNaN(numb) ? 0 : numb;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, 'The result is ');
};

// const subtractDown = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The result after adding all numbers is: '),
  'ADD',
  1,
  5,
  -3,
  'albert',
  10,
  25,
  28
);
combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  -3,
  6,
  10,
  25,
  28,
  88,
  92
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUBTRACT',
  1,
  10,
  15,
  20
);
