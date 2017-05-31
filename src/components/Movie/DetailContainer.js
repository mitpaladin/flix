
import React from 'react';
import PropTypes from 'prop-types';

const MovieDetailContainer = (props) => {
  return (<div className={props.className}>{props.children}</div>);
};

MovieDetailContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

MovieDetailContainer.defaultProps = {
  className: 'movie-container'
};

export default MovieDetailContainer;
