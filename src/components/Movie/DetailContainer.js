
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

const MovieDetailContainer = ({ children, className }) => {
  return (<Container className={className}>{children}</Container>);
};

MovieDetailContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

MovieDetailContainer.defaultProps = {
  className: 'movie-container'
};

export default MovieDetailContainer;
