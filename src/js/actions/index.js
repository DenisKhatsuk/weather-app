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
    type: 'FETCH_LOCATION_FAILURE',
    payload: error,
  };
};

const fetchLocation = (dispatch, locationService) => () => {
  dispatch(locationRequested());
  locationService.getLocation()
    .then((location) => dispatch(locationLoaded(location)))
    .catch((err) => dispatch(locationError(err)));
};

const geocodingRequested = () => {
  return {
    type: 'FETCH_GEOCODING_REQUEST',
  };
};

const geocodingLoaded = (geocodingData) => {
  return {
    type: 'FETCH_GEOCODING_SUCCESS',
    payload: geocodingData,
  };
};

const geocodingError = (error) => {
  return {
    type: 'FETCH_GEOCODING_FAILURE',
    payload: error,
  };
};

const fetchGeocodingData = (dispatch, geocodingService) => (city) => {
  dispatch(geocodingRequested());
  geocodingService.getGeocodingData(city)
    .then((geocodingData) => dispatch(geocodingLoaded(geocodingData)))
    .catch((err) => dispatch(geocodingError(err)));
};

export {
  fetchLocation,
  fetchGeocodingData,
};
