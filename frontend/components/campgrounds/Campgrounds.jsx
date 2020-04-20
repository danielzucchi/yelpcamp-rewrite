import React from 'react';
import PropTypes from 'prop-types';

const Campgrounds = ({ campgrounds }) => {
  return (
    <div>
      <h1>Campgrounds:</h1>
      {campgrounds ? (
        campgrounds.map(campground => (
          <p key={campground.id}>{campground.name}</p>
        ))
      ) : (
        <div>No campgrounds found.</div>
      )}
    </div>
  );
};

Campgrounds.propTypes = {
  campgrounds: PropTypes.arrayOf(PropTypes.shape({})),
};

Campgrounds.defaultProps = {
  campgrounds: null,
};

export default Campgrounds;
