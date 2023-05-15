import React from 'react'
import Map, { Marker, NavigationControl } from "react-map-gl";
const MapComponent = (props) => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiYWhtZWR0YWtlc2h5IiwiYSI6ImNsaG01YmRyZTE4ajUzcHAxcjNnZmltbnQifQ.E2JIABJLN4HJmHGi8A6Qqg"
      initialViewState={{
        longitude: props.lon,
        latitude: props.lat,
        zoom: 10,
      }}
      style={{ height: 400 }}
      className="w-full  shadow-md"
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={props.lon} latitude={props.lat} className="text-red-700" />
      <NavigationControl position="top-right" />
    </Map>
  );
};

export default MapComponent