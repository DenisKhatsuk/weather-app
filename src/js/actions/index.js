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

export {
  locationRequested,
  locationLoaded,
  locationError,
};
