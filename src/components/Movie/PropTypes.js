
import PropTypes from 'prop-types';

const _MovieReviewProps = PropTypes.shape({
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

const _MovieProps = PropTypes.shape({
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(_MovieReviewProps),
});

const MoviePropTypes = {
  Review: _MovieReviewProps,
  Movie: _MovieProps,
};

export default MoviePropTypes;
