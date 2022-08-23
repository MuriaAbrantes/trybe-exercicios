// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


const a = Math.floor(10 * Math.random() + 1);
const b = Math.floor(10 * Math.random() + 1);
const c = Math.floor(10 * Math.random() + 1);

console.log("a = " + a, "b = " + b, "c = " + c)

if (c < a && a > b) {
  console.log(" a é o maior.")
} else if (c < b && b > a) {
  console.log("b é o maior.")
} else {
  console.log("c é o maior.")
}

// RESOLVIDO em 23 de ago as 00:42min!