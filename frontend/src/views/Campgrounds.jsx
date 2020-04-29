import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCampgrounds from '../lib/content/fetchCampgrounds';
import CampgroundsPageContainer from '../components/campgrounds-page/CampgroundsPageContainer';

const Campgrounds = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchCampgrounds('campgrounds'));
  }, [dispatch]);

  return <CampgroundsPageContainer />;
};

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(Campgrounds);
