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
function CloudSvg({width, height}) {
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

export {CloudSvg};
