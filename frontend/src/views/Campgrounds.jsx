import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchContent from '../lib/content/fetchContent';
import CampgroundsPageContainer from '../components/campgrounds-page/CampgroundsPageContainer';
import Loading from '../components/ui/loading-spinner/Loading';

const Campgrounds = ({ dispatch, content }) => {
  const { campgrounds, isLoading } = content;

  useEffect(() => {
    if (!campgrounds) {
      dispatch(fetchContent.fetchCampgrounds('campgrounds'));
    }
  }, [dispatch, campgrounds]);

  return isLoading ? <Loading /> : <CampgroundsPageContainer />;
};

Campgrounds.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.shape({
    campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default connect(state => state)(Campgrounds);
