import logo from './logo.svg';  // const logo = require('./logo.svg');  SERIA ASSIM NO JS
import './App.css';  // require('./App.css');
import HelloWorld from './componentes/HelloWorld'; // IMPORTANDO A CLASS HelloWorld DA PASTA COMPONENTE

function modules(modulesName) {
  return `Na Trybe aprendemos ${modulesName}`;
}

function App() {   //COMPONENTE FUNCIONAL
  const name = 'Múria';
  const arrayModules = ['Fundamentos', 'FRont-End', 'Back-End', 'Ciência da Computação'];
  return (            // NELE TEM SÓ UM RETURN
    <>
      <HelloWorld/>
      <h2>Olá, sou a {name}.</h2>
      <p>Este é meu primeiro projeto usando react JSX!</p>
      <li><small>{ modules('Fundamentos') }</small></li>
      <li><small>{ modules('Front-End') }</small></li>
      <li><small>{ modules('Bach-End') }</small></li>
      <li>{ modules('CS') }</li>
      <br/>
      
      {arrayModules.map((modulesName) => {
        return <li>{ modules(modulesName) }</li>
      })}
    </>
  );
}

export default App;

// return (
//   <>
//     <h1>Hello Word!!!</h1>
//     <p>Este é meu primeiro projeto usando react JSX!</p>
//   </>
// );