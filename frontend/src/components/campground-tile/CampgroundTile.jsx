import React from 'react';
import PropTypes from 'prop-types';
import './CampgroundTile.scss';

const CampgroundTile = ({ campground }) => {
  return (
    <div className="campground-tile__card">
      <div>
        <img
          alt={campground.name}
          src={campground.image}
          className="campground-tile__card__image"
        />
      </div>
      <div className="campground-tile__card__info-tile">
        <h3>{campground.name}</h3>
      </div>
    </div>
  );
};

CampgroundTile.propTypes = {
  campground: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CampgroundTile;
