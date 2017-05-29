
import React from 'react';

import MovieData from '../MovieData';

import FeaturedMovie from './FeaturedMovie';

const Home = () => {
  // const topFour = movies.slice(0, 4);
  const topFour = new MovieData().get(4);

  return (
    <div>
      <h2 className="featured-movies__header">
        Featured Movies
      </h2>

      <hr />

      <div className="featured-movies">
        {/* Remember, "key" is meaningful only to React for managing lists */}
        {topFour.map((movie) => (
          <FeaturedMovie
            movie={movie}
            key={[movie.name, movie.director].join('.')}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
