export default class ForecastService {
  _apiKey = '5bc699ca9036e60c3f7d417600991566';

  _apiBase = 'https://api.openweathermap.org/data/2.5/onecall?';

  getForecastData = async (lat, long) => {
    const requestLink = `${this._apiKey}lat=${lat}&lon=${long}&lang=en&units=metric&APPID=${this._apiKey}`;
    const res = await fetch(requestLink);
    if (!res.ok) throw new Error(`Could not fetch data from forecast service. Server respond status ${res.status}.`);
    const forecast = await res.json();
    return this._transformForecastData(forecast);
  }

  _transformForecastData = ({
    current: {
      temp,
      feels_like, /* eslint-disable-line */
      humidity,
      wind_speed, /* eslint-disable-line */
      weather: [
        {
          description,
          icon,
        },
      ],
    },
    daily,
  }) => {
    return {
      today: {
        temp,
        feelsLike: feels_like,
        humidity,
        windSpeed: wind_speed,
        description,
        icon,
      },
      daily,
    };
  };
}
