import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCampgrounds from '../lib/content/fetchCampgrounds';
import CampgroundsContainer from '../components/campgrounds/CampgroundsContainer';

const Campgrounds = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchCampgrounds('campgrounds'));
  }, []);

  return <CampgroundsContainer />;
};

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(Campgrounds);
