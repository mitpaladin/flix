
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Image, List } from 'semantic-ui-react';

const FeaturedMovie = ({ movie }) => (
  <Container className="featured-movie">
    <Link to={`/movies/${movie.id}`}>
      <Image className="featured-movie__image" alt={movie.name} src={movie.image} />
    </Link>

    <List className="featured-movie__info">
      <List.Item><List.Header>{movie.name}</List.Header></List.Item>
      <List.Item>{movie.director}</List.Item>
      <List.Item>{movie.released}</List.Item>
    </List>
  </Container>
);

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
