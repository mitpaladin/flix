
import React from 'react';

import movies from '../movies.json';

import FeaturedMovie from './FeaturedMovie';

const Home = () => {
  const topFour = movies.slice(0, 4);

  return (
    <div>
      <h2 className="featured-movies__header">
        Featured Movies
      </h2>

      <hr />

      {/* eslint-disable react/no-array-index-key */}
      {/* Normally a good idea; we don't (now) support reordering, etc. */}

      <div className="featured-movies">
        {topFour.map((movie, i) => (
          <FeaturedMovie
            movie={movie}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
