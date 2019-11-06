const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
  alert('Game is starting ...');
};

// const person = {
//   greet: function greet() {
//     console.log('Hello there!!');
//   }
// };
// person.greet();
// console.dir(startGame);
startGameBtn.addEventListener('click', start);
