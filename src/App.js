import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  IndexPage,
  MapPage
} from './pages';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={IndexPage} />
            <Route path="/map" component={MapPage} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
