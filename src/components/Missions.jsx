import React, { Component } from 'react';
import Title from './Title';
/* import PropTypes from 'prop-types'; */

class Missions extends Component {
  render() {
    return (

      <div data-testid="missions">
        <Title headline="Missões" />
      </div>

    );
  }
}

/* Missions.propTypes = {
  xxxx: PropTypes.string.isRequired,
}; */

export default Missions;
