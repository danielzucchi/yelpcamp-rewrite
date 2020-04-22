import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCampgrounds from './lib/content/fetchCampgrounds';
import CampgroundsContainer from './components/campgrounds/CampgroundsContainer';

class Campgrounds extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCampgrounds());
  }

  render() {
    return <CampgroundsContainer />;
  }
}

export default connect(state => state)(Campgrounds);
