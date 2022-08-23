// Operador AND:

// const comida = 'pão na chapa';
// const bebida = 'leite';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = true;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && false)

// Criada por mim: 

// const currentHour = 10;
// let message = "Vamos fazer um bolo pro café da tarde?";

// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".]

// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

// if (currentHour >= 22) {
//   console.log("Não deveríamos comer nada, é hora de dormir")
// } else if (currentHour >= 18 && currentHour < 22) {
//   console.log("Rango da noite, vamos jantar :D")
// } else if (currentHour >= 14 && currentHour < 18) {
//   console.log(message)
// } else if (currentHour >= 11 && currentHour < 14) {
//   console.log("Hora do almoço!!!")
// } else {
//   console.log("Hmmm, cheiro de café recém passado")
// }
// // // OK ATÉ AQUI
// // // Agora imprima a variável message fora das suas condições. NÃO ENTENDI COMO INSERIR OUTRAS STRINGS NA MESMA VARIÁVEL.

// __________________________________________________________________________
// Operador OR:

// Por exemplo, imagine novamente que estamos na padaria, mas nosso pedido agora vai ser diferente. Dessa vez, se não tiver um café, pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

// const bebidaPrincipal = 'cafezinho';
// const bebidaAlternativa = 'suco de laranja';
// //                       false                            true       
// if (bebidaPrincipal === 'leite' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

//  O retorno no console foi : Obrigado por me atender :D

// // MESMO UM SENDO FALSE, NO ||, POIS PARA ELE SER TOLTALMENTE FALSO, PRECISA QUE SEJA false || false. Conforme axempli abaixo:

// const bebidaPrincipal = 'cafezinho';
// const bebidaAlternativa = 'suco de laranja';
// //                       false                            false       
// if (bebidaPrincipal === 'leite' || bebidaAlternativa === 'chá') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// O retorno no console foi: EI, EU NÃO PEDI ISSO!
// ___________________________________________________________________________

// EXERCICIO:

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".


// Implemente condicionais para que:

// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

// let weekDay = "domingo";

// if (weekDay === "segunda-feira" || weekDay === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// } else if (weekDay === "sábado" || weekDay === "domingo") {
//   console.log("FINALMENTE, descanso merecido UwU")
// } else {
//   console.log("que dia é hoje?")
// }

// TENTEI USAR FOR, MAS NÃO CONSEGUI, ENTÃO CHEGUEI NESSE RESULTADO.
// ________________________________________________________________________

// Operador NOT:

// console.log((2 + 2) === 4); 
// true

console.log(!(2 + 2) === 4);
//  false
