import './App.js';

const myName = 'Múria';
const city = 'Uberlândia';

function modules(modulesName) {
  return `Algumas das minhas habilidades: ${modulesName}`;
};

function App() {
  const arrayHabilits = ['Atenciosa', 'Prestativa', 'Boa ouvinte'];
  return (
    <>
    <h1>Olá, me chamo {myName}</h1>
    <p>Tenho 28 anos, moro em {city}.</p>
    <h2>Minhas Habilidades:</h2>
    {arrayHabilits.map((modulesName) => {
      return <li>{modules(modulesName)}</li>
    })};
    </>
    )
};