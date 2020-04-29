import React from 'react';
import PropTypes from 'prop-types';
import CampgroundTile from '../campground-tile/CampgroundTile';

const CampgroundsList = ({ campgrounds, error }) => {
  return (
    <div>
      {campgrounds ? (
        campgrounds.map(campground => (
          <CampgroundTile key={campground.id} campground={campground} />
        ))
      ) : (
        <div>No campgrounds found.</div>
      )}

      {error && <h6>{error}</h6>}
    </div>
  );
};

CampgroundsList.propTypes = {
  campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.string,
};

CampgroundsList.defaultProps = {
  campgrounds: null,
  error: null,
};

export default CampgroundsList;
