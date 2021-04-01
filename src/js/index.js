import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import LocationService from './services/location-service';
import { LocationServiceProvider } from './components/location-service-context';
import store from './store';

const locationService = new LocationService();

ReactDOM.render(
  <Provider store = { store }>
    <ErrorBoundary>
    <LocationServiceProvider value = { locationService }>
      <App />
    </LocationServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
