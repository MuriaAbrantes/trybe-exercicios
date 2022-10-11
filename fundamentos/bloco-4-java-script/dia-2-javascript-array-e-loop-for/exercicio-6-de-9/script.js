// 3 - set - 12:59h
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

let numero = 0;
for (let index = 0; index < numbers.length; index += 1) {
  // Defino outra variável contendo o valor, que nesse caso começa no indice 5. Depois vai ser 9 ... 
    numero = numbers[index];
  // Condição:
  //Se numero o resto da divisão de numero por 2 for = diferente de 0, então o número é impar. | RESTO = 0, O NÚMERO É PAR.
    if ((numero % 2) !== 0) {

        console.log(numero); 
      // por fim teremos o resultado de maiorNumero.
    } 
  //  senão não altera o valor dentro de maiorNumero.
  }