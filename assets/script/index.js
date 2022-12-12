'use strict';
/*
  Geo Adventure
  Paul Funston

  A Geocaching adjacent company

*/

  // Finding Location
let long,lat;

function getLocation(position) {
  const { latitude, longitude } = position.coords;
  lat = latitude;
  long = longitude;
  
  createMap(long, lat);
  clearCover();
};

function errorHandler(event) {
  console.log(event);
  stopSpin();
  document.querySelector('.gps-state').innerHTML = 'Geolocation must be allowed to function'
};

const options = {
  enableHighAccuracy: true
};

function requestLocation() {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          getLocation, 
          errorHandler,
          options
          );
      } 
    } catch (error) {
      console.log(error.message);
    }
}

function stopSpin() {
  const loading = document.querySelector('.loading');
  loading.style.animation = 'none';
};

function clearCover() {
  const cover = document.querySelector('.map-cover');
  setTimeout(() => {
    cover.style.visibility = 'hidden';
  }, 1000)
}


// Using the Map

function createMap(long, lat) {
  mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGZ1biIsImEiOiJjbGJncm80Z2MwY2F4M3FwNXpxZjh5cjV6In0.9-biahBbvoH-rpsabZLQgQ';
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [long, lat], // starting position [lng, lat]
      zoom: 18, // starting zoom
      pitch: 60,
  });

  const marker = new mapboxgl.Marker(); 
  marker.setLngLat([long, lat]);
  marker.addTo(map);
};



requestLocation();