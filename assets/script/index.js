'use strict';
/*
  XX
  Paul Funston

  xx

*/

// import {select, onEvent, selectAll} from './util.js';



mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGZ1biIsImEiOiJjbGJncm80Z2MwY2F4M3FwNXpxZjh5cjV6In0.9-biahBbvoH-rpsabZLQgQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-97.1, 49.9], // starting position [lng, lat]
    zoom: 8, // starting zoom
});


async function getLocation() {

}


const marker1 = new mapboxgl.Marker(); 
  marker1.setLngLat([-97.1, 49.9]);
  marker1.addTo(map);