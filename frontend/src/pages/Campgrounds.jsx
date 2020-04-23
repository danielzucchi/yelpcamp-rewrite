import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCampgrounds from '../lib/content/fetchCampgrounds';
import CampgroundsContainer from '../components/campgrounds/CampgroundsContainer';

class Campgrounds extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCampgrounds('campgrounds'));
  }

  render() {
    return <CampgroundsContainer />;
  }
}

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(Campgrounds);
