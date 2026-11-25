"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import Map, { Marker } from "react-map-gl/maplibre";

export type Pin = { id: number; title: string | null; lat: number; lng: number };

export default function PinMap({ pins }: { pins: Pin[] }) {
  return (
    <Map
      initialViewState={{ longitude: 10, latitude: 51, zoom: 4 }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      {pins.map((p) => (
        <Marker key={p.id} longitude={p.lng} latitude={p.lat} />
      ))}
    </Map>
  );
}