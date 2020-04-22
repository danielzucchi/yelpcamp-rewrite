import React from 'react';
import PropTypes from 'prop-types';

const Campgrounds = ({ campgrounds, isLoading }) => {
  return (
    <div>
      <h1>Campgrounds:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {campgrounds ? (
            campgrounds.map(campground => (
              <p key={campground.id}>{campground.name}</p>
            ))
          ) : (
            <div>No campgrounds found.</div>
          )}
        </div>
      )}
    </div>
  );
};

Campgrounds.propTypes = {
  campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
};

Campgrounds.defaultProps = {
  campgrounds: null,
};

export default Campgrounds;
