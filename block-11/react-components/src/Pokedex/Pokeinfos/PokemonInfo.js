import React, { Component } from 'react';
import './PokemonInfo.css';

class PokemonInfo extends Component {
  render() {
    const {
      pokemon,
      type,
      weigth: [peso, kg],
      pokeId,
    } = this.props;
    return (
      <div className='pokemon' id={pokeId}>
        <span className='pokemon-name'>{pokemon}</span>
        <span className='pokemon-type'>{type}</span>
        <span className='pokemon-weigth'>
          {peso}
          {kg}
        </span>
      </div>
    );
  }
}

export default PokemonInfo;
