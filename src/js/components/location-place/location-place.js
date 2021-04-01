import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withLocationService from '../hoc-helpers';
import fetchLocation from '../../actions';

const LocationPlace = ({ city, country }) => {
  return (
    <div className="location__place">
      { `${city}, ${country}` }
    </div>
  );
};

const LocationPlaceWrapper = ({ city, country, fetchLocationAndDispatch }) => {
  useEffect(async () => {
    fetchLocationAndDispatch();
  }, []);

  return (
    <LocationPlace city = { city } country = { country }/>
  );
};

const mapStateToProps = ({ location: { city, country } }) => {
  return {
    city,
    country,
  };
};

const mapDispatchToProps = (dispatch, { locationService }) => ({
  fetchLocationAndDispatch: fetchLocation(dispatch, locationService),
});

export default compose(
  withLocationService(),
  connect(mapStateToProps, mapDispatchToProps),
)(LocationPlaceWrapper);
