'use client';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
} from 'react-simple-maps';
import geoURL from './world.json';
import { Tooltip, TooltipRefProps } from 'react-tooltip';
import { useRef, useId, useState } from 'react';
import { LocaleTypes } from '@/utils/localization/settings';

export default function Map({ locale }: MapProps) {
  let tooltip = useRef<TooltipRefProps>(null);
  const id = useId();
  const [country, setCountry] = useState<string>('');

  return (
    <div className="bg-red-400 relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <ZoomableGroup>
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  onMouseEnter={() => {
                    locale === 'ko'
                      ? setCountry(geo.properties.name_ko)
                      : setCountry(geo.properties.name_en);
                    document.body.classList.add('target');
                  }}
                  onMouseLeave={() => {
                    document.body.classList.remove('target');
                  }}
                  geography={geo}
                  stroke="#bec1c4"
                  fill="white"
                  strokeWidth="0.5"
                  className="focus:outline-none"
                  data-tooltip-id={id}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip
        ref={tooltip}
        id={id}
        float
        className={`!p-0 !rounded-lg !bg-white !text-inherit select-none z-10`}
        opacity={1}
      >
        <div className="flex gap-x-5">
          <div className="flex justify-center items-center">
            <p className="font-primary-Regular font-bold">{country}</p>
          </div>
          <div>
            <small className=" font-primary-Regular">Online Revenue</small>
            <p className="text-sm font-primary-Regular">$13,450,000</p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
}

type MapProps = {
  locale: LocaleTypes;
};
