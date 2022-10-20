import React from 'react';

class HelloWorld extends React.Component {               // PADRÃO PARA CRIAR COMPONENTE
  render() {                                             //FUNÇÃO RENDER QUE RETORNA O COMPONENTE
    return (
      <h1 className='hello-word'>Hello World!!!</h1>      //JSX SENDO RETORNADO
    )
  }
}

export default HelloWorld;