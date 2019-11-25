const startGameBtn = document.getElementById('start-game-btn');

const getPlayerChoice = function() {
  const selection = prompt('Rock, Paper, or Scissors', '');
  if (selection != 'Rock' && selection != 'Paper' && selection != 'Scissors') {
  }
};

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting');
});
