
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Divider, Header } from 'semantic-ui-react';

import './Title.css';

const MovieTitle = ({ name, className }) => {
  return (
    <Container className={className}>
      <Header>{name}</Header>
      <Divider vertical><hr /></Divider>
    </Container>
  );
};

MovieTitle.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MovieTitle.defaultProps = {
  className: "movie-title",
};

export default MovieTitle;
