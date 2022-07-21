import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (

      <div className="PlanetCard" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img
          className={ `imgPlanet ${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>

    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
