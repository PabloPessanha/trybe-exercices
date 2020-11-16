import React, { Component } from 'react';
/*
- DESCRIÇÃO DO CARGO - TEXTO
  Limite de 500 caracteres
  Campo obrigatório
*/

class Cargo extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Cargo: </label>
        <input type='text' name='Cargo' />
      </React.Fragment>
    );
  }
}

export default Cargo;
