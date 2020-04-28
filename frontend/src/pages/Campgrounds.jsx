import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCampgrounds from '../lib/content/fetchCampgrounds';
import CampgroundsListContainer from '../components/campgrounds-list/CampgroundsListContainer';

const Campgrounds = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchCampgrounds('campgrounds'));
  }, [dispatch]);

  return <CampgroundsListContainer />;
};

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(Campgrounds);
