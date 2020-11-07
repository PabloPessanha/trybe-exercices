import React, { Component } from 'react';
import PokemonInfo from './Pokeinfos/PokemonInfo';
import pokemons from './Pokemons';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return pokemons.map((pokemon) => (
      <div key={pokemon.id} className='all-poke'>
        <PokemonInfo
          pokemon={pokemon.name}
          type={pokemon.type}
          weigth={[pokemon.averageWeight.value, pokemon.averageWeight.measurementUnit]}
          pokeId={pokemon.id}
        />
        {/* <PokemonImg src={pokemon.image} /> */}
      </div>
    ));
  }
}

export default Pokedex;
