import React, { Component } from 'react';
/*
- ESTADO - COMBOBOX
  Todos os estados do Brasil
  Campo obrigatório.
*/

class Estado extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Estado:</label>
        <input type='text' name='Estado' />
      </React.Fragment>
    );
  }
}

export default Estado;
