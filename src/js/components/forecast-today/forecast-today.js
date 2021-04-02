import React from 'react';

import './forecast-today.scss';

const ForecastToday = ({
  today: {
    temp,
    feelsLike,
    humidity,
    windSpeed,
    description,
    icon,
  },
}) => {
  const iconURL = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <div className = "forecast__today">
      <div className = "forecast__today_temp">
        { temp }
      </div>
      <div className = "forecast__today_details">
        <div
          className = "forecast__today_icon"
          style = {{ backgroundImage: `url(${iconURL})` }}></div>
        <div>{ description }</div>
        <div>Feels like: { feelsLike }°C</div>
        <div>Wind: { windSpeed } m/s</div>
        <div>Humidity: { humidity }%</div>
      </div>
    </div>
  );
};

export default ForecastToday;
