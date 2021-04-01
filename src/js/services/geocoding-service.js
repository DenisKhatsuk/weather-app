export default class GeocodingService {
  _apiKey = '1c60758b72be467d829c9e28077e760b';

  getGeocodingData = async (city) => {
    const requestLink = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${this._apiKey}&pretty=1`;
    const res = await fetch(requestLink);
    if (!res.ok) throw new Error(`Could not fetch data from geocoding service. Server respond status ${res.status}.`);
    const geocoding = await res.json();
    return this._transformGeocodingData(geocoding);
  }

  _transformGeocodingData = ({
    results: [
      {
        annotations:
        {
          timezone:
          {
            name,
          },
        },
        components:
        {
          city,
          country,
        },
        geometry:
          {
            lat,
            lng,
          },
      },
    ],
  }) => {
    return {
      city,
      country,
      coordinates: {
        lat,
        lng,
      },
      timezone: name,
    };
  };
}
