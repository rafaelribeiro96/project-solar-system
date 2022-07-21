import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (

      <div className="tittle"><h2>{headline}</h2></div>

    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
