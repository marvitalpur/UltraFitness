import React from 'react';
import Svg, {
  G,
  Path,
  Line,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Rect,
} from 'react-native-svg';
function CloudSvg({ width, height }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      width="101"
      height="36.5"
      viewBox="0 0 101 36.5">
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#0eb5e1" />
          <Stop offset="1" stopColor="#fff" />
        </LinearGradient>
      </Defs>
      <G id="Group_134" data-name="Group 134" transform="translate(-14 -191.5)">
        <Path
          id="Icon_awesome-cloud"
          data-name="Icon awesome-cloud"
          d="M37.8,15.933A6.758,6.758,0,0,0,31.5,6.75a6.716,6.716,0,0,0-3.748,1.139,11.251,11.251,0,0,0-21,5.611c0,.19.007.38.014.57a10.128,10.128,0,0,0,3.361,19.68H36a9,9,0,0,0,1.8-17.817Z"
          transform="translate(70 189.25)"
          fill="url(#linear-gradient)"
        />
        <Path
          id="Icon_awesome-cloud-2"
          data-name="Icon awesome-cloud"
          d="M37.8,15.933A6.758,6.758,0,0,0,31.5,6.75a6.716,6.716,0,0,0-3.748,1.139,11.251,11.251,0,0,0-21,5.611c0,.19.007.38.014.57a10.128,10.128,0,0,0,3.361,19.68H36a9,9,0,0,0,1.8-17.817Z"
          transform="translate(14 189.25)"
          fill="url(#linear-gradient)"
        />
        <Path
          id="Icon_awesome-cloud-3"
          data-name="Icon awesome-cloud"
          d="M37.8,15.933A6.758,6.758,0,0,0,31.5,6.75a6.716,6.716,0,0,0-3.748,1.139,11.251,11.251,0,0,0-21,5.611c0,.19.007.38.014.57a10.128,10.128,0,0,0,3.361,19.68H36a9,9,0,0,0,1.8-17.817Z"
          transform="translate(44 194.25)"
          fill="url(#linear-gradient)"
        />
      </G>
    </Svg>
  );
}
const SearchIcon = () => {
  return (
    <Svg id="search-normal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <Path id="Vector" d="M18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9Z" transform="translate(2 2)" fill="none" stroke="#00b4d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <Path id="Vector-2" data-name="Vector" d="M.1,1.97c.53,1.6,1.74,1.76,2.67.36C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97Z" transform="translate(18.83 18.72)" fill="none" stroke="#00b4d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <Path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
    </Svg>
  )
}

export { CloudSvg, SearchIcon };
