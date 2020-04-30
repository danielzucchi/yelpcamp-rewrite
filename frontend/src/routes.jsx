import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Campgrounds from './views/Campgrounds';
import NavBar from './components/ui/NavBar/NavBar';
import fetchContent from './lib/content/fetchContent';

const Routes = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchContent.fetchGlobalCopy());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
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
};

export default connect(state => state)(Routes);
