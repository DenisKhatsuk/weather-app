import React, { Fragment } from 'react';

import LocationPlace from '../location-place';
import ErrorBoundary from '../error-boundary';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <h1>Fancy Weather App</h1>
      <ErrorBoundary>
        <LocationPlace />
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
