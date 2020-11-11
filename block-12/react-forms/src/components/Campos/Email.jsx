import React, { Component } from 'react';
/*
- EMAIL - TEXTO
        Limite de 50 caracteres
        Campo obrigatório
*/

class Email extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Email:</label>
        <input type='text' name='Email' maxLength='50' required='required' />
      </React.Fragment>
    );
  }
}

export default Email;
