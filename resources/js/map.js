// Map functionality
const mapDiv = document.getElementById('map');
let map = new ol.Map({
    target: mapDiv,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-119.239278, 34.276556]),
      zoom: 15.5
    })
  });
