import React from 'react';

class Algo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings(person = 'pessoas') {
        return `Olá, ${person}!`;
      },
    };
  }

  render() {
    return (
      <section>
        <h1>{this.state.greetings()}</h1>
      </section>
    );
  }
}

export default Algo;
