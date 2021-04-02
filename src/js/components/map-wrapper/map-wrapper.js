import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Map from '../map';
import MapService from '../../services/map-service';
import { fetchMap } from '../../actions';

import './map-wrapper.scss';

const mapService = new MapService();

const MapWrapper = ({ lat, long, fetchMapAndDispatch }) => {
  const mapContainerId = 'map';

  useEffect(() => {
    if (lat) fetchMapAndDispatch(lat, long, mapContainerId);
  }, [lat, long]);

  return (
    <div className="map-wrapper">
      <Map />
    </div>
  );
};

const mapStateToProps = ({
  location: {
    coordinates: { lat, long },
  },
}) => ({ lat, long });

const mapDispatchToProps = (dispatch) => ({
  fetchMapAndDispatch: (lat, long, mapContainerId) => (
    fetchMap(dispatch, mapService)(lat, long, mapContainerId)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
