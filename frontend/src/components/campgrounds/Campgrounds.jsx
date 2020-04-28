import React from 'react';
import PropTypes from 'prop-types';
import CampgroundTile from '../campground-tile/CampgroundTile';

const Campgrounds = ({ campgrounds, isLoading, error }) => {
  return (
    <div>
      <h1>Campgrounds:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

Campgrounds.propTypes = {
  campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Campgrounds.defaultProps = {
  campgrounds: null,
  error: null,
};

export default Campgrounds;
