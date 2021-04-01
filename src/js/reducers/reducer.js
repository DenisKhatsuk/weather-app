const initialState = {
  location: {
    city: 'Grodno',
    country: 'BY',
    coordinates: '53.6688,23.8223',
    timezone: 'Europe/Minsk',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_REQUEST':
      return {
        location: state.location,
      };
    case 'FETCH_LOCATION_SUCCESS':
      return {
        location: action.payload,
      };
    case 'FETCH_LOCATION_FAILURE':
      return {
        location: state.location,
      };

    default:
      return state;
  }
};

export default reducer;
