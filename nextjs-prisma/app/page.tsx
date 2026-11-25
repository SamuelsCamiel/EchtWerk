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
        latitude: 51.88916870965964,
        zoom: 12,
 
      }}
      style={{position: 'relative', width: '99.89vw', height: '99.89vh'}}
      mapStyle="./map1.json"
    />
  );
}