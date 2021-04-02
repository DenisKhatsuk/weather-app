import mapboxgl from 'mapbox-gl';

export default class MapService {
  _apiKey = 'pk.eyJ1IjoiZGVuaXNraGF0c3VrIiwiYSI6ImNrYXdjd2EzeTAzNGYycm12Y2JnaTlnbXIifQ.PfUx8xzMFLiDiQumqMpAFg';

  getMap = (containerId = 'map') => {
    mapboxgl.accessToken = this._apiKey;
    const map = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/deniskhatsuk/ckawq5ktq3qqs1ikera49v01n',
      center: [-74.5, 40],
      zoom: 11,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([-74.5, 40])
      .addTo(map);

    return map;
  };
}
