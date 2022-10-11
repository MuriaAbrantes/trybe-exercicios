const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (getMarsTemperature) =>
  console.log(`Atualmente está ${toFahrenheit(getMarsTemperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Definição da função sendMarsTemperature...
function sendMarsTemperature(callback) {
  console.log(callback(temperatureInFahrenheit));
};

setTimeout(() => {sendMarsTemperature(temperatureInFahrenheit)}, 5000); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

setTimeout(() => {sendMarsTemperature(greet)}, 5000); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo