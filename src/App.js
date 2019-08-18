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

import './App.css';

const App = () => {
  return (
    <div className="App">
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
          <Route exact path="/" component={IndexPage} />
          <Route path="/map" component={MapPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
