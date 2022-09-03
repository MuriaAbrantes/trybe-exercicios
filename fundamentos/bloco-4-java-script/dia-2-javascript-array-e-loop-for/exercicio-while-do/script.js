
let counter = 4;
let sun = 0;
while(counter !== 9) {
  counter += 1;
  sun = counter * 2;
}

console.log(sun)

// __________________________
function testaBreak(x) {
  let i = 0;

  while (i < 6) {
     if (i == 3) {
        break;
     }
     i += 1;
  }
  return i * x;
}

testaBreak();


// não entendi pq não aparece nada no console