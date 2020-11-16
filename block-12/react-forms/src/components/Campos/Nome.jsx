import React, { Component } from 'react';
/*
- NOME - TEXTO
  Limite de 40 caracteres
  Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
  Campo obrigatório
*/

class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <React.Fragment>
        <label>Nome: </label>
        <input
          type='text'
          name='nome'
          value={value}
          onChange={handleChange}
          minLength='1'
          maxLength='40'
          required='required'
        />
      </React.Fragment>
    );
  }
}

export default Nome;
