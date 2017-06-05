
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import FeaturedMovieProps from './Props'

import './Info.css';

const FeaturedMovieInfo = ({ className, movie }) => (
  <List className={className}>
    <List.Item><List.Header>{movie.name}</List.Header></List.Item>
    <List.Item>{movie.director}</List.Item>
    <List.Item>{movie.released}</List.Item>
  </List>
);

FeaturedMovieInfo.propTypes = {
  className: PropTypes.string,
  movie: FeaturedMovieProps.isRequired,
};

FeaturedMovieInfo.defaultProps = {
  className: 'featured-movie__info',
}

export default FeaturedMovieInfo;
