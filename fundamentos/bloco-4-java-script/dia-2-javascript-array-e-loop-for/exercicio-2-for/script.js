// FOR SEM ARRAY: multiplicar o 7 9 vezes.
let numero = 7;
//    vai iniciar:   ;for roda até 9x; adiciona +1 a cada vez que rodar. Para alterar o valor de contador.   
for( let contador = 1; contador <= 9; contador += 1) {
  console.log(numero * contador);
  //            7    *    0   = 0 | 1º contador = 0  é < 9, então faz a multiplicação, depois contador = 0 + 1 (contador = 1). Então nesse caso não faz sentido começar em 0, e sim em 1.
  //            7    *    1   = 7 | 2  contador = 1  é < 9, então faz a multiplicação, depois contador = 1 + 1 (contador = 2).
  //            7    *    2   = 14| 3º contador = 2  é < 9, então faz a multiplicação, depois contador = 2 + 1 (contador = 3).
  //            7    *    3   = 21| 4º contador = 3  é < 9, então faz a multiplicação, depois contador = 3 + 1 (contador = 4).
  //            7    *    4   = 28| 5º contador = 4  é < 9, então faz a multiplicação, depois contador = 4 + 1 (contador = 5).
  //            7    *    5   = 35| 6º contador = 5  é < 9, então faz a multiplicação, depois contador = 5 + 1 (contador = 6).
  //            7    *    6   = 42| 7º contador = 6  é < 9, então faz a multiplicação, depois contador = 6 + 1 (contador = 7).
  //            7    *    7   = 49| 8º contador = 7  é < 9, então faz a multiplicação, depois contador = 7 + 1 (contador = 8).
  //            7    *    8   = 56| 9º contador = 8  é < 9, então faz a multiplicação, depois contador = 8 + 1 (contador = 9).
  //            7    *    9   = 63|10º contador = 9  é = 9, então faz a multiplicação, depois contador = 9 + 1 (contador = 10). 
  // Aqui o for para de rodar, pois a condição é que rode até que contador seja <= 9.
}

console.log('FOR com Array: ')
// ______________________________________
// FOR COM ARRAY:
//       ARRAY = Indice 0, Indice 1, Indice 2,  Indice 3
let listaNomes = ['Bento', 'Afonso', 'Carlota', 'Antônio'];

for (let index = 0; index <= listaNomes.length; index += 1) {
  let mensagem = `Boas vindas!`;
  console.log(`Oi ${listaNomes[index]}, ${mensagem}`);
//Indice 0 = Bento, então: Boas vindas, Bento! | index 0 + 1 = 1;
//Indice 1 = Afonso, então: Boas vindas, Afonso! | index 1 + 1 = 2;
//Indice 2 = Carlota, então: Boas vindas, Carlota! | index 2 + 1 = 3;
//Indice 3 = Antônio, então: Boas vindas, Antônio! | index 3 + 1 = 4. Aqui o for para de rodar, pois não tem mais indices dentro do array.
}

// ok