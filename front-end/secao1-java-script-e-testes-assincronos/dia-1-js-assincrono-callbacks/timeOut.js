// 
// FUNÇÃO TIMEOUT:
// setTimeout(() => {
//   console.log('oi');
// }, 5000);
// ______________________________________________


// linhaDeProducao.js

console.log('1 - Receber roda'); // 1 - Receber roda
const TWO_SECONDS = 2000;

setTimeout(() => {
  console.log('Comprar parafusos'); // Comprar parafusos
  console.log('Adicionar ao estoque'); // Adicionar ao estoque
}, TWO_SECONDS);

setTimeout(() => {
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
}, 1000);
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque