import React, { Fragment } from 'react';

import LocationPlace from '../location-place';

import './app.scss';

const App = () => {
  return (
    <Fragment>
      <h1>Fancy Weather App</h1>
      <LocationPlace />
    </Fragment>
  );
};

export default App;
