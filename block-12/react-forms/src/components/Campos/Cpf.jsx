import React, { Component } from 'react';
/*
- CPF - TEXTO
        Limite de 11 caracteres
        Campo obrigatório
*/

class Cpf extends Component {
  render() {
    return (
      <React.Fragment>
        <label>CPF:</label>
        <input type='text' name='Cpf' pattern='[0-9]+' maxLength='11' required='required' />
      </React.Fragment>
    );
  }
}

export default Cpf;
