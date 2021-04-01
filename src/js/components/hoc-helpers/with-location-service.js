import React from 'react';
import { LocationServiceConsumer } from '../location-service-context';

/* eslint react/display-name: 0 */

const withLocationService = () => (Wrapped) => {
  return (props) => {
    return (
      <LocationServiceConsumer>
        {
          (locationService) => {
            return (
              <Wrapped {...props} locationService = { locationService }/>
            );
          }
        }
      </LocationServiceConsumer>
    );
  };
};

export default withLocationService;
