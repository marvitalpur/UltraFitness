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
const SearchIcon = () => {
  return (
    <Svg
      id="search-normal"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <Path
        id="Vector"
        d="M18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9Z"
        transform="translate(2 2)"
        fill="none"
        stroke="#00b4d8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M.1,1.97c.53,1.6,1.74,1.76,2.67.36C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97Z"
        transform="translate(18.83 18.72)"
        fill="none"
        stroke="#00b4d8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <Path
        id="Vector-3"
        data-name="Vector"
        d="M0,0H24V24H0Z"
        fill="none"
        opacity="0"
      />
    </Svg>
  );
};
const CheckIcon = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="57.722"
        height="54.632"
        viewBox="0 0 57.722 54.632">
        <Path
          id="Compound_Path_3"
          data-name="Compound Path_3"
          d="M2550.671,4165.547l11.637,4.188,26.65-9.582h0l-11.529-4.256Zm-5.4-1.943-9.6-3.454,26.48-9.894,9.98,3.684Zm-1.98,1.4-7.852-2.825v28.354a.552.552,0,0,0,.376.531l25.5,9.169v-28.752h0l-12.765-4.59v11.032l-5.275-1.989Zm47.887-5.653a1.222,1.222,0,0,0-.093-.407,1.084,1.084,0,0,0-.634-.567l-28.3-10.438-27.991,10.438a1.1,1.1,0,0,0-.612.567,1.227,1.227,0,0,0-.093.407h0v31.182a2.572,2.572,0,0,0,1.7,2.409l26.066,9.375a2.446,2.446,0,0,0,2.17,0l26.29-9.441a2.288,2.288,0,0,0,1.5-2.121v-31.4Zm-27.879,12.13v28.752l25.719-9.235a.3.3,0,0,0,.175-.243v-28.575l-25.894,9.3Z"
          transform="translate(-2533.46 -4147.94)"
          fill="#00b4d8"
          fill-rule="evenodd"
        />
      </Svg>
    </>
  );
};
const RiderIcon1 = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="58.12"
        height="43.06"
        viewBox="0 0 58.12 43.06">
        <Path
          id="Compound_Path_2"
          data-name="Compound Path_2"
          d="M1433.819,3834.57h-2a1.192,1.192,0,0,0-1.191,1.191V3862.9a1.154,1.154,0,0,0,1.154,1.154h.9a1.154,1.154,0,0,0,1.154-1.154v-11.21h2a1.191,1.191,0,0,0,1.191-1.191v-14.733a1.191,1.191,0,0,0-1.191-1.191Zm-23.593,11.67a16,16,0,0,1,15.55,16.011v13.064h-33.433v-13.057a16,16,0,0,1,16.018-16.018h1.431c.1,0,.192,0,.286,0v0ZM1390,3877.623h0v-15.372a18.361,18.361,0,0,1,18.326-18.326h1.431c.127,0,.252,0,.376,0v0l18.229.007h.644v2.3h-.681c-.155,0-.312,0-.466.007h-9.193a18.425,18.425,0,0,1,9.417,16.011v13.064h17.692v-13.064a15.989,15.989,0,0,0-7.118-13.327v-2.7a18.421,18.421,0,0,1,9.463,16.037v15.372H1390Z"
          transform="translate(-1390 -3834.57)"
          fill="#00b4d8"
          fill-rule="evenodd"
        />
      </Svg>
    </>
  );
};
const RiderIcon2 = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="58.12"
        height="43.06"
        viewBox="0 0 58.12 43.06">
        <Path
          id="Compound_Path_2"
          data-name="Compound Path_2"
          d="M1433.819,3834.57h-2a1.192,1.192,0,0,0-1.191,1.191V3862.9a1.154,1.154,0,0,0,1.154,1.154h.9a1.154,1.154,0,0,0,1.154-1.154v-11.21h2a1.191,1.191,0,0,0,1.191-1.191v-14.733a1.191,1.191,0,0,0-1.191-1.191Zm-23.593,11.67a16,16,0,0,1,15.55,16.011v13.064h-33.433v-13.057a16,16,0,0,1,16.018-16.018h1.431c.1,0,.192,0,.286,0v0ZM1390,3877.623h0v-15.372a18.361,18.361,0,0,1,18.326-18.326h1.431c.127,0,.252,0,.376,0v0l18.229.007h.644v2.3h-.681c-.155,0-.312,0-.466.007h-9.193a18.425,18.425,0,0,1,9.417,16.011v13.064h17.692v-13.064a15.989,15.989,0,0,0-7.118-13.327v-2.7a18.421,18.421,0,0,1,9.463,16.037v15.372H1390Z"
          transform="translate(-1390 -3834.57)"
          fill="#00b4d8"
          fill-rule="evenodd"
        />
      </Svg>
    </>
  );
};
const RiderIcon3 = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="57.722"
        height="54.632"
        viewBox="0 0 57.722 54.632">
        <Path
          id="Compound_Path_3"
          data-name="Compound Path_3"
          d="M2550.671,4165.547l11.637,4.188,26.65-9.582h0l-11.529-4.256Zm-5.4-1.943-9.6-3.454,26.48-9.894,9.98,3.684Zm-1.98,1.4-7.852-2.825v28.354a.552.552,0,0,0,.376.531l25.5,9.169v-28.752h0l-12.765-4.59v11.032l-5.275-1.989Zm47.887-5.653a1.222,1.222,0,0,0-.093-.407,1.084,1.084,0,0,0-.634-.567l-28.3-10.438-27.991,10.438a1.1,1.1,0,0,0-.612.567,1.227,1.227,0,0,0-.093.407h0v31.182a2.572,2.572,0,0,0,1.7,2.409l26.066,9.375a2.446,2.446,0,0,0,2.17,0l26.29-9.441a2.288,2.288,0,0,0,1.5-2.121v-31.4Zm-27.879,12.13v28.752l25.719-9.235a.3.3,0,0,0,.175-.243v-28.575l-25.894,9.3Z"
          transform="translate(-2533.46 -4147.94)"
          fill="#00b4d8"
          fill-rule="evenodd"
        />
      </Svg>
    </>
  );
};
export {CloudSvg, SearchIcon, CheckIcon, RiderIcon1, RiderIcon2, RiderIcon3};
