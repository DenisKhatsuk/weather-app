const initialState = {
  location: {
    city: '',
    country: '',
    coordinates: {
      lat: '',
      long: '',
    },
    timezone: '',
    isLoading: true,
    error: null,
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
        location: {
          ...action.payload,
          isLoading: false,
          error: null,
        },
      };
    case 'FETCH_LOCATION_FAILURE':
      return {
        location: {
          ...state.location,
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
