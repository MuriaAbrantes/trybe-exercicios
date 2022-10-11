//  3 set - 13:16h
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let maiorNumber = 0;
let menorNumero =0;

for (let index = 0; index < numbers.length; index += 1) {

  numero = numbers[index];
  if (numero > maiorNumber) {
      maiorNumber = numero; 
  } else if (numero < maiorNumber) {
    menorNumero = numero;
  }
}
console.log(menorNumero)

// errado.