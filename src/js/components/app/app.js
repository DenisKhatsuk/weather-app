import React from 'react';

import LocationWrapper from '../location-wrapper';
import ErrorBoundary from '../error-boundary';
import Header from '../header';
import ForecastWrapper from '../forecast-wrapper';
import MapWrapper from '../map-wrapper';

import './app.scss';

const App = () => {
  return (
    <div className = 'app-weather'>
      <ErrorBoundary>
        <Header />
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
    </div>
  );
};

export default App;
