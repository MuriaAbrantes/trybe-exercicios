//  FOR OF:

// For of com array:
let lista = ['João', 'Maria', 'Antônio', 'Margarida'];

//for(elementos de array)
for (let nomes of lista) {
  console.log(`Lista de aprovados ${nomes}`)
}

//  For of com string:
let nome = 'Fridah Kallo';

for (let letras of nome) {
  console.log(letras)
}

// _______________

let eu = {
  nome: 'Muria',
  idade: 27,
  cidade: 'Paracatu',
  estado: 'MG'
}

let info = ' ';
for (let dados in eu) {
  info += `{eu.[dados]}`
  console.log(info)
}
// NÃO DEU CERTO ESSE ULTIMO (OBJETO)