import React, { Component } from "react";
import {
  MapContainer as LeafletMap,
  MapContainer,
  TileLayer,
} from "react-leaflet";

export default function AnomalyMap() {
  const center = [48.60211262, -120.13948226];
  return (
    <MapContainer
      style={{
        marginTop: "-0.4rem",
        borderRadius: "0.4rem",
        border: "solid",
        width: "47.5rem",
        height: "12rem",
      }}
      center={center}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
