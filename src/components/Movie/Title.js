
import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';

const MovieTitle = ({ name, className }) => {
  return (<Header as="h2" className={className}>{name}</Header>);
};

MovieTitle.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MovieTitle.defaultProps = {
  className: "movie-title",
};

export default MovieTitle;
