
import React from 'react';
import PropTypes from 'prop-types';

const MovieContainer = (props) => {
  return (<div className={props.className}>{props.children}</div>);
};

MovieContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

MovieContainer.defaultProps = {
  className: "movie",
};

export default MovieContainer;
