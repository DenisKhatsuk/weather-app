export default class LocationService {
  _apiBase = 'https://ipinfo.io/json?token=';

  _apiKey = '9a5f3199e9ff19';

  getLocation = async () => {
    const res = await fetch(`${this._apiBase}${this._apiKey}`);
    if (!res.ok) throw new Error(`Could not fetch data from location service. Server respond status ${res.status}.`);
    const location = await res.json();
    return this._transformLocation(location);
  }

  _transformLocation = ({
    city,
    country,
    loc,
    timezone,
  }) => {
    const [lat, long] = loc.split(',');
    return {
      city,
      country,
      coordinates: {
        lat,
        long,
      },
      timezone,
    };
  };
}
