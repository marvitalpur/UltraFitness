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
function BackgroundOverlay() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      width="414"
      height="896"
      viewBox="0 0 414 896">
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1="0.5"
          y1="1"
          x2="0.5"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#00b4d8" />
          <Stop offset="0.425" stopColor="#00b4d8" stopOpacity="0.62" />
          <Stop offset="1" stopColor="#fff" stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <G
        id="Rectangle_10"
        data-name="Rectangle 10"
        stroke="#707070"
        stroke-width="1"
        fill="url(#linear-gradient)">
        <Rect width="414" height="896" stroke="none" />
        <Rect x="0.5" y="0.5" width="413" height="895" fill="none" />
      </G>
    </Svg>
  );
}

export {BackgroundOverlay};
