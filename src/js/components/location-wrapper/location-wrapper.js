import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withLocationService from '../hoc-helpers';
import { fetchLocation } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import LocationPlace from '../location-place';
import DateIndicator from '../date-indicator';

const LocationWrapper = ({
  city,
  country,
  timezone,
  isLoading,
  error,
  fetchLocationAndDispatch,
}) => {
  useEffect(async () => {
    fetchLocationAndDispatch();
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator error = {error} />;
  return (
    <section className="location">
      <LocationPlace city = { city } country = { country }/>
      <DateIndicator timezone = { timezone }/>
    </section>
  );
};

const mapStateToProps = ({
  location: {
    city,
    country,
    timezone,
    isLoading,
    error,
  },
}) => {
  return {
    city,
    country,
    timezone,
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
)(LocationWrapper);
