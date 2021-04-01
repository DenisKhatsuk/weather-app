import React from 'react';

const LocationPlace = ({ city, country }) => {
  return (
    <div className="location__place">
      { `${city}, ${country}` }
    </div>
  );
};

export default LocationPlace;
