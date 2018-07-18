// update these image dimensions to match montage.jpg
var w = 4480;
var h = 2176;
// var w = 6400;
// var h = 4096;
var maxZoom = 4.3;

url = 'montage.jpg';

// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

// create the slippy map
var map = L.map('image-map', {
  minZoom: 0,
  maxZoom: maxZoom,
  center: [0, 0],
  zoom: 1,
  crs: L.CRS.Simple
});

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay, 
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);
