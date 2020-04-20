import React from 'react';

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

export default Campgrounds;
