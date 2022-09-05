// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

const idade = [2, 3, 6, 7, 10, 1];
let maiorNumero = 0;
function verificaMaior() {
  for (let index in idade) {
    numero = Math.max(idade[index]);
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }
}

verificaMaior();
console.log(maiorNumero)

// glóoriaaaa! Finameeente conseguiii !!!
