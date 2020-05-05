import React from 'react';
import PropTypes from 'prop-types';
import CampgroundsListContainer from '../campgrounds-list/CampgroundsListContainer';
import Loading from '../ui/loading-spinner/Loading';

const CampgroundsPage = ({ isLoading, campgroundsTitle }) => (
  <div>
    <h1>{campgroundsTitle}</h1>
    {isLoading ? <Loading /> : <CampgroundsListContainer />}
  </div>
);

CampgroundsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  campgroundsTitle: PropTypes.string.isRequired,
};

export default CampgroundsPage;
