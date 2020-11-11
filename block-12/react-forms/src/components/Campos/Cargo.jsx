import React, { Component } from 'react';

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
