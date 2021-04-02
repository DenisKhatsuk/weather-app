import mapboxgl from 'mapbox-gl';

export default class MapService {
  _apiKey = 'pk.eyJ1IjoiZGVuaXNraGF0c3VrIiwiYSI6ImNrYXdjd2EzeTAzNGYycm12Y2JnaTlnbXIifQ.PfUx8xzMFLiDiQumqMpAFg';

  getMap = (lat = -74.5, long = 40, mapContainerId = 'map') => {
    mapboxgl.accessToken = this._apiKey;
    const map = new mapboxgl.Map({ /* eslint-disable-line */
      container: mapContainerId,
      style: 'mapbox://styles/deniskhatsuk/ckawq5ktq3qqs1ikera49v01n',
      center: [long, lat],
      zoom: 11,
    });
    const marker = new mapboxgl.Marker() /* eslint-disable-line */
      .setLngLat([long, lat])
      .addTo(map);
    return new Promise((resolve) => {
      map.once('style.load', () => {
        resolve('loaded');
      });
    });
  };
}
