function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

const you = new Player('Branko', 'x');

const computer = new Player('Computer', 'o');

const board = ['', '', '', '', '', '', '', '', ''];

const yourMove = (() => {
  const move = (a) => board[a] = you.symbol;
  return { move };
})();

const compMove = (() => {
  const move = (a) => board[a] = computer.symbol;
  return { move };
})();

const gameFlow = (() => {
  while 

})();


yourMove.move(3);
compMove.move(2);
console.log(board);
