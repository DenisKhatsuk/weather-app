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

const fetchForecast = (dispatch, forecastService) => (lat, long, mapContainerId) => {
  dispatch(forecastRequested());
  forecastService.getForecast(lat, long, mapContainerId)
    .then((forecast) => dispatch(forecastLoaded(forecast)))
    .catch((err) => dispatch(forecastError(err)));
};

const mapRequested = () => {
  return {
    type: 'FETCH_MAP_REQUEST',
  };
};

const mapLoaded = () => {
  return {
    type: 'FETCH_MAP_SUCCESS',
  };
};

const mapError = (error) => {
  return {
    type: 'FETCH_MAP_FAILURE',
    payload: error,
  };
};

const fetchMap = (dispatch, mapService) => (lat, long) => {
  dispatch(mapRequested());
  mapService.getMap(lat, long)
    .then(() => dispatch(mapLoaded()))
    .catch((err) => dispatch(mapError(err)));
};

export {
  fetchLocation,
  fetchGeocodingData,
  fetchForecast,
  fetchMap,
};
