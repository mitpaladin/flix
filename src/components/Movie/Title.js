
import React from 'react';
import PropTypes from 'prop-types';

const MovieTitle = ({ name, className }) => {
  return (<div className={className}><h2>{name}</h2></div>);
};

MovieTitle.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MovieTitle.defaultProps = {
  className: "movie-title",
};

export default MovieTitle;
