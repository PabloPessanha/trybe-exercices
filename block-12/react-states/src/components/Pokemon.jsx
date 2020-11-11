import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      id,
    } = this.props.pokemon;

    return (
      <div className='pokemon' id={id}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default Pokemon;
