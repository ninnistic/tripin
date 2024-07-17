'use client';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import geoURL from './custom.geo.json';

export default function Map() {
  //   const geoURL = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';
  //   const geoURL = './features.json';
  return (
    <div>
      <ComposableMap fill="white" stroke="black" strokeWidth={1}>
        <ZoomableGroup>
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
