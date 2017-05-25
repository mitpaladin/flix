
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Flix</h2>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </div>

          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/movies/:movieId" component={Movie} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
