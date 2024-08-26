// import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function Map({ location }) {
  // const [mapPosition, setMapPosition] = useState();

  const position = [location?.lat, location?.lon];

  return (
    <MapContainer center={position} zoom={11}>
      <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}
