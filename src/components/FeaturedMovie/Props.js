
import PropTypes from 'prop-types';

const FeaturedMovieProps = PropTypes.shape({
  director: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
});

export default FeaturedMovieProps;
