import React, { Component } from 'react';

class Descricao extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Descricao:</label>
        <input type='text' name='Descricao' />
      </React.Fragment>
    );
  }
}

export default Descricao;
