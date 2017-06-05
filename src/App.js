
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import './App.css';

import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import PageNotFound from './components/PageNotFound';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <h2>Flix</h2>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>

      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Container>
    </div>
  </Router>
)

export default App;
