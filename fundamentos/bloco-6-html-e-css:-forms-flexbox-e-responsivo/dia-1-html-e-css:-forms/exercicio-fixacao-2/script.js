// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function addEvent (event) {
  event.preventDefault();
}
console.log(HREF_LINK.addEventListener('click', addEvent));

// function addEvent (event) {
//   preventDefault();
//   INPUT_TEXT.addEventListener('click', addEvent);
// }

// function addEvent (event) {
//   event.preventDefault();
//   INPUT_CHECKBOX.addEventListener('click', addEvent);
// }

