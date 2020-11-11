import React, { Component } from 'react';

/*
- ENDEREÇO - TEXTO
    Limite de 200 caracteres
    Remover qualquer caracter especial que seja digitado
    Campo obrigatório
*/

class Endereco extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Endereco:</label>
        <input
          type='text'
          name='Endereco'
          maxLength='200'
          pattern='[^()/><\][\\\x22,;|]+'
          required='required'
        />
      </React.Fragment>
    );
  }
}

export default Endereco;
