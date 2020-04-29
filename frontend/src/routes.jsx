import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './views/Home';
import Campgrounds from './views/Campgrounds';

const Routes = () => (
  <Router>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campgrounds">CampgroundsPage</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/campgrounds">
        <Campgrounds />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
