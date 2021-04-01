import React, { Fragment } from 'react';

import LocationPlace from '../location-place';
import ErrorBoundary from '../error-boundary';
import SearchForm from '../search-form';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <h1>Fancy Weather App</h1>
      <ErrorBoundary>
        <SearchForm />
      </ErrorBoundary>
      <ErrorBoundary>
        <LocationPlace />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
