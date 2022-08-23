//   Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//  Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//  Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = Math.floor(60 * Math.random() + 1);
const anguloB = Math.floor(60 * Math.random() + 1);
const anguloC = Math.floor(60 * Math.random() + 1);

const soma = anguloA + anguloB + anguloC;

console.log("anguloA é = " + anguloA, "/anguloB é = " + anguloB, "/anguloC é = " + anguloC)
console.log(soma)

if (soma === 180) {
  console.log("true")
} else {
  console.log("false")
}

// RESOLVIDO!