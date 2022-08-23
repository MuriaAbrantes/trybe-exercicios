// Algo muito legal, é que você pode utilizar o switch case para diversas coisas, não só para imprimir um valor no terminal. No exemplo a seguir, você verá que é possível alterar o valor de uma variável:

// mes = 'trybe';
// let estacaoDoAno;

// switch (mes) {
//     case 'janeiro':
//     case 'fevereiro':
//     case 'março':
//         estacaoDoAno = 'Verão';
//         break;
//     case 'abril':
//     case 'maio':
//     case 'junho':
//         estacaoDoAno = 'Outono';
//         break;
//     case 'julho':
//     case 'agosto':
//     case 'setembro':
//         estacaoDoAno = 'Inverno';
//         break;
//     case 'outubro':
//     case 'novembro':
//     case 'dezembro':
//         estacaoDoAno = 'Primavera';
// }

// console.log(estacaoDoAno); // 'Outono'

// criado por mim:

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

nota = 90;

switch (nota) {
  case 100:
  case 90:
  case 80:
    console.log('aprovada');
    break;
  case 70:
  case 60:
  case 50:
    console.log('lista');
    break;
  case 40:
  case 30:
  case 20:
  case 10:
    console.log('reprovada');
    break;

  default:
    break;
}

// CONSEGUI! ok


