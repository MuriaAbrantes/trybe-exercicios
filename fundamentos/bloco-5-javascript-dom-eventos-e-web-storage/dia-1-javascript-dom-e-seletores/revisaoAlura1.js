// // // testando exercícios FUNÇÃO:

// // const somaNumPequenos = (num1, num2) => {
// //   if(num1 > 10 || num2 > 10) {
// //     return "Somente numeros de 1 a 9";
// //   } else {
// //     return num1 + num2;
// //   }
// // }

// // somaNumPequenos (2, 4)

// // _____________________________________

// // const num1 = 5;
// // const num2 = 5;
// // const resultado = num1 + num2;

// // function soma(num1, num2) {
// //   return num1 + num2;
// // }
// // console.log(soma(3, 5))
// //  ok Não esquecer de coloar nome da função no conssole.log

// // ________________________________________________

// function subtracao(num1, num2) {
//   return num1 - num2;
// }
// console.log(subtracao(12, 2))

// // ok
// // ___________________________________________

// // const frase = nome => `Olá! meu nome é ${nome}`;

// // frase =  muria;
// // // ???

// // ________________________________________

// let age = 20;
// console.log(age);
// let name = 'flora';
// console.log(name);

// // ok
// // ________________________________________
// // if else:

// const comida = 'pão na chapa';
// const bebida = 'leite';

// if (bebida === 'cafezinho' || comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }
// // ok
// // ________________________________________-

// // array - lista ordenada de elementos

// // índice     0   1   2   3
// const nums = [50, 43, 12, 9, 23, 57, 13, 31];
// console.log(nums.length) //8
// // ok
// __________________________________________-


// ___________________________________________

// jantarDeHoje = ['🍔', '🌭', '🍕']

// jantarDeHoje.pop()
// jantarDeHoje.pop()

// jantarDeHoje.push('🍳')
// jantarDeHoje.push('🥗')
// jantarDeHoje.push('🍏')

// console.log(jantarDeHoje)
// ok
// ______________________________________________--

// let idades = [30, 35, 28];
// let nomes = ["Ana", "Juliana", "Leonardo"];
// let faculdade = [false, true, true];

// funcionarios = [nomes,idades,faculdade];

// console.log(faculdade[0][1])

// ________________________________________________
// FOR Clássico:

// push adiciona novos elementos ao final da lista

// const notas = [10, 6, 8];
// notas.push(7); 
// let soma = 0;
// for (let index = 0; index <  notas.length; index += 1) {
//   soma += notas[index];
// }
// let media = soma/notas.length;
// console.log(media)
//  ok

// FOR EACH:

// const notas = [10, 6, 8, 12];
// let soma = 0;

// // notas.forEach(nota => {
// //   soma += nota
// // })

// // console.log(soma)
// // for each uso uma função dentro do for. 
// // exemplo 1 em cima e ex 2 embaixo:

// notas.forEach(function (nota){
//   soma += nota
// })
// console.log(soma)
// // ok

// ______________________________________-

// const notas1 = [10, 6.5, 8, 7.5]
// const notas2 = [9, 6, 6]
// const notas3 = [8.5, 9.5]
// // indices              [0]   [1]    [2]
// const notasGerais = [notas1, notas2, notas3]

// let media = 0;
// //   primeiro notas1 / indice 0 (notas1) < 3 / indice 0+1= indice 1.             Tem 3 indices que são 3 arrays
// for (let index = 0; index < notasGerais.length; index += 1) {
// //     começa em 10 / indice 0 (10) < 4 (tá dentro de notas1) / indice 0+1= 1.   ESSE SEGUNDO FOR ESTÁ DENTRO DE NOTAS1, DEPOIS NOTAS2 E NOTAS3.   
//   for (let index2 = 0; index2 < notasGerais[index].length; index2 += 1) {
//     media += notasGerais[index][index2] / notasGerais[index].length;
//   }
// } media = media / notasGerais.length;
// console.log(media)

// _____________________________

// const nomes = ['Ana', 'Paula', 'Afonso', 'Inacio', 'José'];
// // nomes.push('Henrique');

// nomes.forEach(lista => {
//   nomes.push(lista);
// })
// console.log('Amanda');

// ______________________________________

// OBJETOS: 

// const dadosClientes = {
//   nome: "Sandra",
//   idade: 26,
//   cpf: 12345678910,
//   email: "sandra123@email.com"
// }
// console.log(dadosClientes)

// _________________________________________

// const dadosClientes = {
//   nome: "Sandra",
//   idade: 26,
//   cpf: 12345678910,
//   email: "sandra123@email.com"
// }
// console.log(`A cliente ${dadosClientes.nome} tem ${dadosClientes.idade} anos.`)
// // console.log(dadosClientes.cpf.substring(0,3))      SUBSTRING NÃO DEU CERTO
// const dados = ['nome', 'idade', 'cpf', 'email']
// dados.forEach(info => console.log(dadosClientes[info]))
// ________________________________________

// DELETANDO ELEMENTOS DO OBJETO:

// const objPersonagem = {
//   nome: "Gandalf",
//   classe: "mago",
//   nivel: "20",
//   aliado: {
//     nome: "Saruman",
//     classe: "mago"
//   },
//   status: "desaparecido"
//  }

//  delete objPersonagem.classe;
// console.log(objPersonagem)
// // ok
// ________________________

// outro exemplo com objeto - adicionando elementos e exibindo 3 digitos do cpf:

// const pessoa = {
//   nome:"Bruce Banner",
//   dataNascimento:"25/01/1980",
//   carteiraIdentidade:"997776-X",
//   email:"profbanner@email.com",
//   telefone:"+552877776666",
//   cidade:"Cachoeiro de Itapemirim",
//   estado:"ES"
// }

// pessoa.seguroSocial = '98765432';
// pessoa.cpf = '12343245665'; 
// // até ok.


// console.log(`Os 3 primeiros dígitos do CPF de ${pessoa.nome} são: ` + pessoa.cpf.substring(0,3));
// // ok. deu certo. USEI O SUBSTRING PARA PEGAR OS 3 PRIMEIROS DIGITOS DO CPF.

// _________________________________________________

// const crespo = {
//   nome: 'Jonatan ',
//   sobrenome: 'Domingues Crespo',
//   idade: 29,
//   dataDeNasc: '23/03/1993',
//   naturalidade: 'Maringa-PA',
//   cor: 'Preto',
//   telefone: '99898-2302',
//   cpf: '11610843684',
// }

// crespo.nomeDaMae = 'Luzia Maria';
// crespo.nomeDoPai = 'José Luis';
// crespo.estadoCivil = 'Casado';

// console.log(`Sou casada com ${crespo.nome + crespo.sobrenome}, ele tem ${crespo.idade} de idade e nasceu na cidade de ${crespo.naturalidade}`);

// ok
// ______________________________________

// const crespo = {
//   nome: 'Jonatan ',
//   sobrenome: 'Domingues Crespo',
//   idade: 29,
//   dataDeNasc: '23/03/1993',
//   naturalidade: 'Maringa-PA',
//   cor: 'Preto',
//   telefone: ['99898-2302', '9293838430', '43590348454'],
//   cpf: '11610843684',
// }

// // quero exibir somente os telefones no console:

// crespo.telefone.forEach(fones => console.log(fones))
// // ok
// _____________________________________

// const crespo = {
//   nome: 'Jonatan ',
//   sobrenome: 'Domingues Crespo',
//   idade: 29,
//   dataDeNasc: '23/03/1993',
//   naturalidade: 'Maringa-PA',
//   cor: 'Preto',
//   telefone: ['99898-2302', '9293838430', '43590348454'],
//   cpf: '11610843684',
// }

// // quero adicionar um objeto dentro desse objeto:
// crespo.dependentes = {
//   nome: 'Muria',
//   idade: 27,
//   cor: 'preta',
// }

// crespo.dependentes.naturalidade = 'Paracatu-MG';
// console.log(`${crespo.nome} e ${crespo.dependentes.nome} são casados.`)
// ok
// __________________________________

// // USANDO .FILTER NO ARRAY:

// const cliente = {
//   nome: 'Ana',
//   idade: 30,
//   cidade: 'Rio de Janeiro',
//   pais: [{
//     nome: 'Maria',
//     idade: 53,
//     cidade: 'Betim',
//   }]
// }

// cliente.pais.splice(1, 2, {
//   nome: 'Samuel',
//   idade: 60,
//   cidade: 'Paracatu',
// })
// //  até aqui ok. consegui adicionar um novo objeto dentro do array pais

// // agora preciso selecionar o que tem menor idade.

// // nova variável que irá filtrar array pais, o que tem menor idade.
// const paiMaisJovem = cliente.pais.filter( pai => pai.idade <= 55)

// console.log(paiMaisJovem[0].nome)

// ok, deu certo

// ___________________________________________

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }

 const objPersonagem2 = objPersonagem
 objPersonagem2.nome = "Gandalf, o Cinzento"
 
 console.log(objPersonagem.nome) //Gandalf, o Cinzento
 console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//  ________________________________________

// Algoritmos:

