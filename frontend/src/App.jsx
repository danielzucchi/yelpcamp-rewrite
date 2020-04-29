import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/home-page/HomePage';
import Campgrounds from './views/Campgrounds';
import './App.scss';
import initStore from './lib/store';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
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
            <HomePage />
          </Route>
          <Route path="/campgrounds">
            <Campgrounds />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
