//  Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,];

// Primeiro declaro a variável que quero descobrir.
let maiorNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
// Defino outra variável contendo o valor, que nesse caso começa no indice 5. Depois vai ser 9 ... 
  numero = numbers[index];
// Condição:
//Se numero 5 for > que 0
  if (numero > maiorNumber) {
// então maiorNumero que é 0, passa a ser = 5. | Depois disso, volta para o for e muda do indice 0 (elemento 5) para o indice 1 (elemento 9). | Repete o if.. e assim ai até o array acabar.
      maiorNumber = numero; 
    // por fim teremos o resultado de maiorNumero.
  } 
//  senão não altera o valor dentro de maiorNumero.
}
console.log(maiorNumber)
