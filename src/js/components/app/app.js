import React, { Fragment } from 'react';

import LocationWrapper from '../location-wrapper';
import ErrorBoundary from '../error-boundary';
import SearchForm from '../search-form';
import Forecast from '../forecast-wrapper';

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
        <Forecast />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
