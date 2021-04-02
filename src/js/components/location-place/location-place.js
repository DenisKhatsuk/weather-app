import React from 'react';

import './location-place.scss';

const LocationPlace = ({ city, country }) => {
  return (
    <div className="location__place">
      { `${city}, ${country}` }
    </div>
  );
};

export default LocationPlace;
