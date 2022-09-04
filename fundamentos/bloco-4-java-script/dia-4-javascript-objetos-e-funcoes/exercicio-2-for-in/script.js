
// FOR IN RETORNA O INDICE DO ARRAY/OBJETO:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  // mostra o indice, e o elemento
  console.log(index,cars[index]);
}
// NO CONSOLE APARECE:
// 0 Saab
// 1 Volvo
// 2 BMW

  // _________________
  let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }
  // NO CONSOLE APARECE:
// type Fiat
// model 500
// color white

// ___________________________________

// FOR OF:

// FOR OF RETORNA O VALOR/ELEMENTO DO ARRAY/OBJETO:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
// NO CONSOLE APARECE:
// hamburguer
// bife
// acarajé

// Mesmo código acima,só que agora com for IN:
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value in food) {
  console.log(value);
};
// NO CONSOLE APARECE:
// 0
// 1
// 2

// ___________________________________________

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log(`OLá ${names[index]}, tudo bem com você?`)
}
// ok

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let chave in car) {
  console.log(`${chave}: ${car[chave]}`)
}

// ok
