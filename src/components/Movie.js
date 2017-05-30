
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieData from '../MovieData';

const MovieImageAndMetadata = ({ movie }) => {
  return(
    <div className="movie-container">
      <div className="movie-image">
        <img alt={movie.name} src={movie.image} />
      </div>

      <div className="movie-information">
        <p><b>Director:</b> {movie.director}</p>
        <p><b>Release Date:</b> {movie.released}</p>
        <p><b>Description:</b> {movie.description} </p>
      </div>
    </div>
  );
};

MovieImageAndMetadata.propTypes = {
  movie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  }).isRequired,
};


const MovieReviewTitleAttribution = ({ author }) => {
  return(
    <span className="review-author">by {author}</span>
  );
};

MovieReviewTitleAttribution.propTypes = {
  author: PropTypes.string.isRequired,
};

const MovieReviewTitle = ({ review }) => {
  return(
    <h3>
      {review.title} <MovieReviewTitleAttribution author={review.author} />
    </h3>
  );
};

MovieReviewTitle.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const MovieReviews = ({ reviews }) => {
  return(
    <div className="movie-reviews">
      <h2>Reviews</h2>

      <hr />

      {/* eslint-disable react/no-array-index-key */}
      {/* Normally a good idea; we don't (now) support reordering, etc. */}
      {reviews.map((review) => (
        <div key={[review.title, review.author].join('-')} className="movie-review">
          <MovieReviewTitle review={review} />
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

// eslint-disable-next-line react/prefer-stateless-function
class MovieContainer extends Component {
  render() {
    return (
      <div className="movie">
        {this.props.children};
    </div>
    );
  }
}

MovieContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

const MovieTitle = ({ name }) => {
  return(<div className="movie-title"><h2>{name}</h2></div>);
};

MovieTitle.propTypes = {
  name: PropTypes.string.isRequired
};

const Movie = ({ match: { params: { movieId } } }) => {
  const movie = new MovieData().find({ id: parseInt(movieId, 10) })[0];

  return (
    <MovieContainer>
      <MovieTitle name={movie.name} />
      <MovieImageAndMetadata movie={movie} />
      <MovieReviews reviews={movie.reviews} />
    </MovieContainer>
  );
};

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Movie;
