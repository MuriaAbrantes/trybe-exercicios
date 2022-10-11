// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

const idade = [2, 4, 6, 7, 10, 0, -3];
let menorNumero = 0;
function verificaMenor() {
  for (let index = 0; index < idade.length; index += 1) {
    numero = idade[index];
    //         0 > -3
    if (menorNumero > numero) {
      menorNumero = numero
    }
  }
}

verificaMenor();
console.log(menorNumero)

// ok
