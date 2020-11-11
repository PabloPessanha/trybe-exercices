import React, { Fragment } from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data.js';
import './App.css';

function App() {
  return (
    <Fragment>
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </Fragment>
  );
}

export default App;
