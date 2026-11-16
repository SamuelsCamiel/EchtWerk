// app/page.js
export default function Home() {
  return (
    <main>
<script src="main.js" type="module"></script>
<div id="map"></div>

    </main>
  );
}

     import * as maplibregl from 'https://unpkg.com/maplibre-gl@^6.17.0/dist/maplibre-gl.mjs';

        const map = new maplibregl.Map({
            container: 'map', // container id
            style: 'map1.json', // style URL
            center: [4.49889565505575, 51.8766286963464], // starting position [lng, lat]
            zoom: 11.3 // starting zoom
        });
