import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchContent from '../lib/content/fetchContent';
import CampgroundsPageContainer from '../components/campgrounds-page/CampgroundsPageContainer';

const Campgrounds = ({ dispatch, content }) => {
  const { campgrounds } = content;

  useEffect(() => {
    if (!campgrounds) {
      dispatch(fetchContent.fetchCampgrounds('campgrounds'));
    }
  }, [dispatch, campgrounds]);

  return <CampgroundsPageContainer />;
};

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.shape({
    campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default connect(state => state)(Campgrounds);
