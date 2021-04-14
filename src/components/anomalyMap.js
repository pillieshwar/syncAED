import React, { Component } from "react";
import {
  MapContainer as LeafletMap,
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Popup,
} from "react-leaflet";

export default function AnomalyMap() {
  const center = [48.60211262, -120.13948226];
  const polyline1 = [
    [47.79752157, -117.650922],
    [47.30557013, -120.1623439],
  ];
  const fillBlueOptions = { fillColor: "blue" };
  return (
    <MapContainer
      style={{
        marginTop: "-0.4rem",
        border: "solid",
        width: "55rem",
        height: "14rem",
      }}
      center={center}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker
        center={[47.30557013, -120.1623439]}
        pathOptions={fillBlueOptions}
        radius={8}
      >
        <Popup>
          BUS ID : 1 <br></br> PMU ID : 1 <br></br> LOC :
          47.30557013,-120.1623439 <br></br> Anomaly : None
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
