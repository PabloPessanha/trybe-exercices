import React, { Component } from 'react';
/*
 - CIDADE - TEXTO
        Limite de 28 caracteres
        Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
        Campo obrigatório.
*/

class Cidade extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Cidade:</label>
        <input type='text' name='Cidade' />
      </React.Fragment>
    );
  }
}

export default Cidade;
