const board = ['', '', '', '', '', '', '', '', ''];

const gameBoard = (() => {
  const move = (a) => board[a] = 'x';
  return { move };
})();

console.log(gameBoard.move('2'));
console.log(gameBoard.move(0));
console.log(board);

/* const calculator = (() => {
  const add = (a, b) => a + b;
  return { add };
})();

console.log(calculator.add(1, 2));
 */
