
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

const MovieContainer = (props) => {
  return (<Container className={props.className}>{props.children}</Container>);
};

MovieContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

MovieContainer.defaultProps = {
  className: "movie",
};

export default MovieContainer;
