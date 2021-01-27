import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./../../utils";

const ChangeView = ({ center, zoom, countries, casesType }) => {
  const map = useMap();
  map.setView(center, zoom);
  showDataOnMap(countries, casesType);
  return null;
};

const Map = ({ countries, casesType, center, zoom }) => {
  console.log(casesType);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <ChangeView
          center={center}
          zoom={zoom}
          countries={countries}
          casesType={casesType}
        />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default Map;