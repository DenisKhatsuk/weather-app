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
  forecast: {
    today: {
      temp: '',
      feelsLike: '',
      humidity: '',
      windSpeed: '',
      description: '',
      icon: '',
    },
    daily: '',
    isLoading: true,
    error: null,
  },
  map: {
    isLoading: true,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_REQUEST':
      return {
        ...state,
        location: {
          ...state.location,
          isLoading: true,
          error: null,
        },
      };

    case 'FETCH_LOCATION_SUCCESS':
      return {
        ...state,
        location: {
          ...action.payload,
          isLoading: false,
          error: null,
        },
      };

    case 'FETCH_LOCATION_FAILURE':
      return {
        ...state,
        location: {
          ...state.location,
          isLoading: false,
          error: action.payload,
        },
      };

    case 'FETCH_GEOCODING_REQUEST':
      return {
        ...state,
        location: {
          ...state.location,
          isLoading: true,
          error: null,
        },
      };

    case 'FETCH_GEOCODING_SUCCESS':
      return {
        ...state,
        location: {
          ...action.payload,
          isLoading: false,
          error: null,
        },
      };

    case 'FETCH_GEOCODING_FAILURE':
      return {
        ...state,
        location: {
          ...state.location,
          isLoading: false,
          error: action.payload,
        },
      };

    case 'FETCH_FORECAST_REQUEST':
      return {
        ...state,
        forecast: {
          ...state.forecast,
          isLoading: true,
          error: null,
        },
      };

    case 'FETCH_FORECAST_SUCCESS':
      return {
        ...state,
        forecast: {
          ...action.payload,
          isLoading: false,
          error: null,
        },
      };

    case 'FETCH_FORECAST_FAILURE':
      return {
        ...state,
        forecast: {
          ...state.forecast,
          isLoading: false,
          error: action.payload,
        },
      };

    case 'FETCH_MAP_REQUEST':
      return {
        ...state,
        map: {
          isLoading: true,
          error: null,
        },
      };

    case 'FETCH_MAP_SUCCESS':
      return {
        ...state,
        map: {
          isLoading: false,
          error: null,
        },
      };

    case 'FETCH_MAP_FAILURE':
      return {
        ...state,
        map: {
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
