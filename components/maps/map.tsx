'use client';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import geoURL from './world.json';

export default function Map() {
  //   const geoURL = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';
  //   const geoURL = './features.json';
  return (
    <div className="bg-red-400">
      <ComposableMap>
        <ZoomableGroup
          center={[80, 10]}
          fill="white"
          stroke="black"
          strokeWidth={0.5}
          zoom={1.5}
        >
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
