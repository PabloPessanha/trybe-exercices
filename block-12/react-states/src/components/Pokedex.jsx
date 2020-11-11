import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      index: 0,
    };
  }

  handleClick() {
    this.setState((acc) => ({
      index: acc.index + 1 < this.props.pokemons.length ? acc.index + 1 : (acc.index = 0),
    }));
  }

  render() {
    const { pokemons } = this.props;
    return (
      <React.Fragment>
        <div className='pokedex'>
          <Pokemon key={pokemons[this.state.index].id} pokemon={pokemons[this.state.index]} />
        </div>

        <button onClick={this.handleClick}>Próximo</button>
      </React.Fragment>
    );
  }
}

export default Pokedex;
