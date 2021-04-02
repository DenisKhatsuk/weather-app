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

const forecastRequested = () => {
  return {
    type: 'FETCH_FORECAST_REQUEST',
  };
};

const forecastLoaded = (forecast) => {
  return {
    type: 'FETCH_FORECAST_SUCCESS',
    payload: forecast,
  };
};

const forecastError = (error) => {
  return {
    type: 'FETCH_FORECAST_FAILURE',
    payload: error,
  };
};

const fetchForecast = (dispatch, forecastService) => (lat, long) => {
  dispatch(forecastRequested());
  forecastService.getForecast(lat, long)
    .then((forecast) => dispatch(forecastLoaded(forecast)))
    .catch((err) => dispatch(forecastError(err)));
};

export {
  fetchLocation,
  fetchGeocodingData,
  fetchForecast,
};
