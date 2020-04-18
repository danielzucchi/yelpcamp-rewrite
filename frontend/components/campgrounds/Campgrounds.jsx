import React from 'react';

const Campgrounds = ({ campgrounds }) => {
  console.log('Campgrounds in component:', campgrounds);
  return (
    <div>
      <h1>Campgrounds:</h1>
      {campgrounds ? (
        campgrounds.map(campground => <p>{campground.name}</p>)
      ) : (
        <div>No campgrounds found.</div>
      )}
    </div>
  );
};

export default Campgrounds;
