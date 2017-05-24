
import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Router from 'react-router/BrowserRouter';
// import Match from 'react-router/Match';
// import Link from 'react-router/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Flix</h2>
            <Link to="/">Home</Link>
          </div>

          <div className="container">
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
