import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ForecastService from '../../services/forecast-service';
import { fetchForecast } from '../../actions';
import ForecastToday from '../forecast-today';
import ForecastDaily from '../forecast-daily';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

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

  const {
    today,
    daily,
    isLoading,
    error,
  } = forecast;

  if (isLoading) return <Spinner />;
  if (error) return <ErrorIndicator error = {error} />;
  return (
    <section className="forecast">
      <ForecastToday today = { today }/>
      <ForecastDaily daily = { daily }/>
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
