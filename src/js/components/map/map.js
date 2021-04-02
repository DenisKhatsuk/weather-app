import React, { useEffect } from 'react';
import MapService from '../../services/map-service';

import './mapbox.css';
import './map.scss';

const mapService = new MapService();

const Map = () => {
  useEffect(() => {
    mapService.getMap();
  }, []);
  return (
    <div
      className = 'map'
      id = 'map'>
      Map
    </div>
  );
};

export default Map;
