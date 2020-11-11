import React, { Component } from 'react';
/*
- TIPO - RADIO BUTTON
        Casa, Apartamento
        Campo obrigatório.
*/

class Tipo extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Tipo: </label>
        <input type='text' name='Tipo' />
      </React.Fragment>
    );
  }
}

export default Tipo;
