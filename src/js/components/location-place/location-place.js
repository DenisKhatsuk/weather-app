import React from 'react';
import { connect } from 'react-redux';

const LocationPlace = ({ place }) => {
  return (
    <div className="location__place">
      { place }
    </div>
  );
};

const mapStateToProps = ({ location: { place } }) => {
  return {
    place,
  };
};

export default connect(mapStateToProps)(LocationPlace);
