import React from 'react';
import PropTypes from 'prop-types';
import CampgroundsListContainer from '../campgrounds-list/CampgroundsListContainer';
import Loading from '../ui/loading-spinner/Loading';

const CampgroundsPage = ({ isLoading }) => {
  return (
    <div>
      <h1>Campgrounds:</h1>
      {isLoading ? <Loading /> : <CampgroundsListContainer />}
    </div>
  );
};

CampgroundsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default CampgroundsPage;
