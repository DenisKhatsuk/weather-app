import React, { Fragment } from 'react';

import LocationWrapper from '../location-wrapper';
import ErrorBoundary from '../error-boundary';
import SearchFormWrapper from '../search-form-wrapper';
import ForecastWrapper from '../forecast-wrapper';
import MapWrapper from '../map-wrapper';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <h1>Fancy Weather App</h1>
      <ErrorBoundary>
        <SearchFormWrapper />
      </ErrorBoundary>
      <ErrorBoundary>
        <LocationWrapper />
      </ErrorBoundary>
      <ErrorBoundary>
        <ForecastWrapper />
      </ErrorBoundary>
      <ErrorBoundary>
        <MapWrapper />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
