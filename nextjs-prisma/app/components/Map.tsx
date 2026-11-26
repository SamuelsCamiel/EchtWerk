'use client'


import * as maplibregl from 'maplibre-gl';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { setWorkerUrl } from "maplibre-gl";
const workerUrl = new URL(
  "maplibre-gl/dist/maplibre-gl-worker.mjs",
  import.meta.url,
).toString();
setWorkerUrl(workerUrl);

export default function App() {
  return (
    <Map
      initialViewState={{
        longitude: 4.488208488130745,
        latitude:  51.90029539032192,
        zoom: 12,
      }}
      style={{position: 'relative', width: '99.9vw', height: '99.9vh'}}
      mapStyle="map1.json"
    />
  );
}