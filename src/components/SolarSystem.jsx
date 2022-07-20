import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planet = planets.map(({ name, image }, index) => (<PlanetCard
      Key={ index }
      planetName={ name }
      planetImage={ image }
    />));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <p>{planet}</p>
      </div>

    );
  }
}

export default SolarSystem;
