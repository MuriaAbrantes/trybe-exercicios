// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function salvarFormulario (event) {
  event.preventDefault();
  console.log('salvar o Formulario');
}

HREF_LINK.addEventListener('submit', salvarFormulario);