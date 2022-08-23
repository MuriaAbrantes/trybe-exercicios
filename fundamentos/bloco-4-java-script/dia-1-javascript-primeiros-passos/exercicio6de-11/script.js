//  Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Peao";
let result = peca.toLowerCase();
let movimento1 = "linha reta";
let movimento2 = "diagonal";
let movimento3 = "frente";
const mensagem = "Essa peça não se move assim.";

if (result === "torre") {
  console.log(movimento1)
}
else if (result === "rei") {
  console.log(movimento2)
}
else if (result === "peao") {
  console.log(movimento3)
} else {
  console.log(mensagem)
}

// DEu certo!