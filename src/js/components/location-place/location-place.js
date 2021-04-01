import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withLocationService from '../hoc-helpers';
import fetchLocation from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const LocationPlace = ({ city, country }) => {
  return (
    <div className="location__place">
      { `${city}, ${country}` }
    </div>
  );
};

const LocationPlaceWrapper = ({
  city,
  country,
  isLoading,
  error,
  fetchLocationAndDispatch,
}) => {
  useEffect(async () => {
    fetchLocationAndDispatch();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator error = {error} />;
  return <LocationPlace city = { city } country = { country }/>;
};

const mapStateToProps = ({
  location: {
    city,
    country,
    isLoading,
    error,
  },
}) => {
  return {
    city,
    country,
    isLoading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { locationService }) => ({
  fetchLocationAndDispatch: fetchLocation(dispatch, locationService),
});

export default compose(
  withLocationService(),
  connect(mapStateToProps, mapDispatchToProps),
)(LocationPlaceWrapper);
