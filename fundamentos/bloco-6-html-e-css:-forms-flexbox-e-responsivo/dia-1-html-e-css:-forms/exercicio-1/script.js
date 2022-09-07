const formulario = document.getElementById('formulario');

function salvarFormulario (event) {
  event.preventDefault();
  console.log('salvar o Formulario');
}

formulario.addEventListener('submit', salvarFormulario);

// olhar como colocar data. e fazer o style.