'use client';

import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function App() {
  return (
    
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{width: 800, height: 400}}
      mapStyle="https://maplibre.org"
    />
    
  );
}