'use client'


import * as maplibregl from 'maplibre-gl';
import map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { setWorkerUrl } from "maplibre-gl";
const workerUrl = new URL(
  "maplibre-gl/dist/maplibre-gl-worker.mjs",
  import.meta.url,
).toString();
setWorkerUrl(workerUrl);

// import { Navbar } from "@/app/components/Frontend-Navbar";
import './globals.css';
import App from '@/app/components/Map';

export default function Home() {
  return (
    
    <main>
      <div className="Navbar">
      </div>
      <div className="MapDiv">
        <App/>
      </div>
    </main>

    
  );
}