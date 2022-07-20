import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const mission = missions
      .map(({ name, year, country, destination }, index) => (<MissionCard
        Key={ index }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }

      />));
    return (

      <div data-testid="missions">
        <Title headline="Missões" />
        <p>{mission}</p>
      </div>

    );
  }
}

export default Missions;
