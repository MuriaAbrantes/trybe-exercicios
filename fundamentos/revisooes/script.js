// let array = [2, 4, 6, 8];
// let teste = array.reduce((x, y) => {
// console.log(`${x} - ${y}`)
// console.log(`${x}` )
// return x - y;
// }, 0)
// console.log(teste)
// // ________________________________

// let array = [2, 4, 6, 8];
// let teste = array.reduce((x, y) => {
// console.log(`${x} - ${y}`)
// console.log(`${x}` )
// return x - y;
// },)
// console.log(teste)
// ___________________________________

let array = [2, 4, 6, 8];
array=[...array]
array.map((elemento) => {
  elemento.innerHTML='5'
  console.log(array)
})



