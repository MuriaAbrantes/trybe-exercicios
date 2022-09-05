// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

const nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaNomes () {
let maiorNome;
  for (let index = 0; index < nomes.length; index += 1) {
    let nome = nomes[index];
    
    console.log(nome)
  }
}
verificaNomes()