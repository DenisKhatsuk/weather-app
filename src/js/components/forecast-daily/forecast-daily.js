import React from 'react';

import './forecast-daily.scss';

const ForecastDaily = ({ daily }) => {
  const forecast = daily.map((day) => {
    const {
      weekDay,
      tempDay,
      tempNight,
      humidity,
      icon,
    } = day;
    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <div
        key = { weekDay }
        className = "forecast__upcoming_day">
        <div className = "forecast__upcoming_header">
          <div>{ weekDay }</div>
          <div
            className = "forecast__upcoming_icon"
            style = {{ backgroundImage: `url(${iconURL})` }}></div>
        </div>
        <div className = "forecast__upcoming_main">
          <div className = "forecast__upcoming_temp-day">{ tempDay }°C</div>
          <div className = "forecast__upcoming_temp-night">{ tempNight }°C</div>
          <div className = "forecast__upcoming_humidity">{ humidity }%</div>
        </div>
      </div>
    );
  });

  return (
    <div className = "forecast__upcoming">
      { forecast }
    </div>
  );
};

export default ForecastDaily;
