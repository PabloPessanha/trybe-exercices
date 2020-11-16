import React, { Component } from 'react';
/*
- DESCRIÇÃO DO CARGO - TEXTO
  Limite de 500 caracteres
  Campo obrigatório
*/

class Curriculo extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Curriculo:</label>
        <input type='text' name='Curriculo' />
      </React.Fragment>
    );
  }
}

export default Curriculo;
