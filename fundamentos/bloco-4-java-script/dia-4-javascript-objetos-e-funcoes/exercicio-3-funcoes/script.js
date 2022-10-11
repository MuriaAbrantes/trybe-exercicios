let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

// console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

console.log('O usuário está ' + statty