import React, { Fragment } from 'react';

import LocationWrapper from '../location-wrapper';
import ErrorBoundary from '../error-boundary';
import SearchForm from '../search-form';
import ForecastWrapper from '../forecast-wrapper';
import Map from '../map';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <h1>Fancy Weather App</h1>
      <ErrorBoundary>
        <SearchForm />
      </ErrorBoundary>
      <ErrorBoundary>
        <LocationWrapper />
      </ErrorBoundary>
      <ErrorBoundary>
        <ForecastWrapper />
      </ErrorBoundary>
      <ErrorBoundary>
        <Map />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
