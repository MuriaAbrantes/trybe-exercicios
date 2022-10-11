// pushNumberAsync.js
const pushNumber = (list, number) => list.push(number);

const numbers = [];

const TREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1, TREE_SECONDS));
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers));

// Saída:
// [ 1, 2, 3 ]