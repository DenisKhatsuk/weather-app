const initialState = {
  location: {
    place: 'Grodno, BY',
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
