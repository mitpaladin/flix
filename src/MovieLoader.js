
/* NOTE: Excluded from coverage testing */

import request from 'sync-request';
import { isWebUri } from 'valid-url'; // eslint-disable-line no-unused-vars

import movieDataForCI from './movies.json';

const mustUseLocalData = !!process.env.CI;
const overridesMoviesUrl = isWebUri(process.env.MOVIES_URL);

function loadLocalMovies() {
  return (movieDataForCI.movies);
}

const moviesUrl = () => {
  const defaultUrl = 'http://localhost:3456/movies/';

  return overridesMoviesUrl ? process.env.MOVIES_URL : defaultUrl;
};

/* FIXME: This is **NOT** production-quality code!
 * See [here](https://github.com/ForbesLindesay/sync-request) for why. */

const loadRemoteMovies = () => {
  const res = request('GET', moviesUrl());
  return JSON.parse(res.getBody());
};

function MovieLoader() {
  const ret = mustUseLocalData ? loadLocalMovies() : loadRemoteMovies();
  return ret
}

export default MovieLoader;
