import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ForecastService from '../../services/forecast-service';
import { fetchForecast } from '../../actions';
import ForecastToday from '../forecast-today';

import './forecast-wrapper.scss';

const forecastService = new ForecastService();

const ForecastWrapper = ({
  fetchForecastAndDispatch,
  forecast,
  lat,
  long,
}) => {
  useEffect(() => {
    if (lat) fetchForecastAndDispatch(lat, long);
  }, [lat, long]);
  return (
    <section className="forecast">
      <ForecastToday today = { forecast.today }/>
    </section>
  );
};

const mapStateToProps = ({
  location: {
    coordinates: { lat, long },
  },
  forecast,
}) => ({ lat, long, forecast });

const mapDispatchToProps = (dispatch) => ({
  fetchForecastAndDispatch: (lat, long) => fetchForecast(dispatch, forecastService)(lat, long),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastWrapper);
