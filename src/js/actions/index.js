const locationRequested = () => {
  return {
    type: 'FETCH_LOCATION_REQUEST',
  };
};

const locationLoaded = (location) => {
  return {
    type: 'FETCH_LOCATION_SUCCESS',
    payload: location,
  };
};

const locationError = (error) => {
  return {
    type: 'FETCH_LOCATION_SUCCESS',
    payload: error,
  };
};

const fetchLocation = (dispatch, locationService) => () => {
  dispatch(locationRequested());
  locationService.getLocation()
    .then((location) => dispatch(locationLoaded(location)))
    .catch((err) => dispatch(locationError(err)));
};

export default fetchLocation;
