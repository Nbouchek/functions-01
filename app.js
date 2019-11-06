const startGameBtn = document.getElementById('start-game-btn');

let start = function(x) {
  alert(x);
  alert('Game is starting ... ');
};

// const person = {
//   greet: function greet() {
//     console.log('Hello there!!');
//   }
// };
// person.greet();
// console.dir(startGame);
let input = 'Nacer';
startGameBtn.addEventListener('click', function() {
  start(input);
});

