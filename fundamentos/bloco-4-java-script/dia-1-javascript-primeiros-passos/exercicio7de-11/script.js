//  Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let valor = 20;
let vTotal= 20;
let porcentagem = (valor * 100) / vTotal
console.log(porcentagem)

if(porcentagem >= 90) {
  console.log("A")
} else if(porcentagem >= 80) {
  console.log("B")
}