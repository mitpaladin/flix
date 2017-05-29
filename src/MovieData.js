
import movieData from './movies.json';

const MovieData = function() {
  const movies = movieData;

  const isValidKey = (key) => {
    const validKeys = [ 'description', 'director', 'id', 'name', 'released' ];

    return(validKeys.includes(key));
  };

  this.find = (params = {}) => {
    return movies.filter((movie) => {
      let ret = true;

      for (let key of Object.keys(params)) {
        // eslint-disable-next-line security/detect-object-injection
        ret = ret && (isValidKey(key)) && (params[key] === movie[key]);
      }
      return (ret);
    });
  }

  this.get = (count) => {
    if (count == undefined) { count = movies.length; }
    return(movies.slice(0, count));
  };

  return({ find: this.find, get: this.get });
};

export default MovieData;
