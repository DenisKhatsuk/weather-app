export default class ForecastService {
  _apiKey = '5bc699ca9036e60c3f7d417600991566';

  _apiBase = 'https://api.openweathermap.org/data/2.5/onecall?';

  getForecast = async (lat, long) => {
    const requestLink = `${this._apiBase}lat=${lat}&lon=${long}&lang=en&units=metric&APPID=${this._apiKey}`;
    const res = await fetch(requestLink);
    if (!res.ok) throw new Error(`Could not fetch data from forecast service. Server respond status ${res.status}.`);
    const forecast = await res.json();
    return this._transformForecast(forecast);
  }

  _getDayFromTime = (date) => {
    const language = 'en-GB';
    const msInSecond = 1000;
    const dateInMs = date * msInSecond;
    const DATE = new Date(dateInMs);
    const options = {
      weekday: 'long',
    };
    return DATE.toLocaleString(language, options);
  };

  _transformForecast = ({
    current: {
      temp,
      feels_like, /* eslint-disable-line */
      humidity: humidityToday,
      wind_speed, /* eslint-disable-line */
      weather: [
        {
          description,
          icon: iconToday,
        },
      ],
    },
    daily,
  }) => {
    const forecastWeek = daily.map((day) => {
      const {
        dt,
        temp: {
          day: tempDay,
          night: tempNight,
        },
        humidity,
        weather: [
          {
            icon,
          },
        ],
      } = day;
      const weekDay = this._getDayFromTime(dt);
      return {
        weekDay,
        tempDay: Math.round(tempDay),
        tempNight: Math.round(tempNight),
        humidity,
        icon,
      };
    });

    const forecastThreeDays = forecastWeek.slice(1, 4);

    const today = {
      temp: Math.round(temp),
      feelsLike: Math.round(feels_like),
      humidityToday,
      windSpeed: Math.round(wind_speed),
      description,
      iconToday,
    };

    return {
      today,
      daily: forecastThreeDays,
    };
  };
}
