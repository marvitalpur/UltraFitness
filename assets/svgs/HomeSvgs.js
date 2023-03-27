import React from 'react';
import Svg, {
  G,
  Path,
  Line,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Ellipse,
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
        width="47.838"
        height="47.838"
        viewBox="0 0 47.838 47.838">
        <Path
          id="Icon_awesome-check-circle"
          data-name="Icon awesome-check-circle"
          d="M48.4,24.481A23.919,23.919,0,1,1,24.481.563,23.919,23.919,0,0,1,48.4,24.481ZM21.715,37.146,39.461,19.4a1.543,1.543,0,0,0,0-2.182l-2.182-2.182a1.543,1.543,0,0,0-2.182,0L20.624,29.508l-6.757-6.757a1.543,1.543,0,0,0-2.182,0L9.5,24.933a1.543,1.543,0,0,0,0,2.182L19.532,37.146a1.543,1.543,0,0,0,2.182,0Z"
          transform="translate(-0.563 -0.563)"
          fill="#00b4d8"
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
        width="57.722"
        height="54.632"
        viewBox="0 0 57.722 54.632">
        <Path
          id="Compound_Path_3"
          data-name="Compound Path_3"
          d="M2550.671,4165.547l11.637,4.188,26.65-9.582h0l-11.529-4.256Zm-5.4-1.943-9.6-3.454,26.48-9.894,9.98,3.684Zm-1.98,1.4-7.852-2.825v28.354a.552.552,0,0,0,.376.531l25.5,9.169v-28.752h0l-12.765-4.59v11.032l-5.275-1.989Zm47.887-5.653a1.222,1.222,0,0,0-.093-.407,1.084,1.084,0,0,0-.634-.567l-28.3-10.438-27.991,10.438a1.1,1.1,0,0,0-.612.567,1.227,1.227,0,0,0-.093.407h0v31.182a2.572,2.572,0,0,0,1.7,2.409l26.066,9.375a2.446,2.446,0,0,0,2.17,0l26.29-9.441a2.288,2.288,0,0,0,1.5-2.121v-31.4Zm-27.879,12.13v28.752l25.719-9.235a.3.3,0,0,0,.175-.243v-28.575l-25.894,9.3Z"
          transform="translate(-2533.46 -4147.94)"
          fill="#fff"
          stroke="#00b4d8"
          strokeWidth="1"
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
        width="89.975"
        height="58.377"
        viewBox="0 0 89.975 58.377">
        <Path
          id="Compound_Path_1"
          data-name="Compound Path_1"
          d="M2505.363,3197.285a1.07,1.07,0,0,1-.8-.34,1.1,1.1,0,0,1,0-1.589,1.059,1.059,0,0,1,.8-.341h51.131a1.057,1.057,0,0,1,.8.341,1.1,1.1,0,0,1,0,1.589,1.068,1.068,0,0,1-.8.34Zm78.528-20.377a1.137,1.137,0,0,1,0,2.274h-10.949a2.753,2.753,0,0,1-1.931-.8,2.7,2.7,0,0,1-.8-1.93v-14.469a1.138,1.138,0,0,1,.318-.8,1.119,1.119,0,0,1,.819-.341,1.068,1.068,0,0,1,.793.341,1.147,1.147,0,0,1,.341.8v14.469a.457.457,0,0,0,.456.452Zm-56.846,22.626a7.006,7.006,0,0,1-13.514,0h4.064a3.265,3.265,0,0,0,5.385,0Zm58.615-4.542h4.86a.285.285,0,0,0,.137-.048.315.315,0,0,0,.045-.134v-16.765l-8.972-19.7a1.222,1.222,0,0,1-.114-.475.2.2,0,0,0-.182-.207h-19.556a.206.206,0,0,0-.207.207v36.936a.2.2,0,0,0,.207.182h2.226a11.1,11.1,0,0,1,10.788-8.405,11.017,11.017,0,0,1,6.815,2.338A11.194,11.194,0,0,1,2585.66,3194.992Zm-.93,2.271h5.791a2.484,2.484,0,0,0,2.455-2.452v-17.266l-9.109-19.944a2.44,2.44,0,0,0-.8-1.567,2.474,2.474,0,0,0-1.637-.637h-19.556a2.508,2.508,0,0,0-1.751.726,2.548,2.548,0,0,0-.726,1.751v36.936a2.493,2.493,0,0,0,.726,1.726,2.414,2.414,0,0,0,1.751.726h3.156a1.105,1.105,0,0,0,1.112-.955,8.845,8.845,0,0,1,17.469,0A1.106,1.106,0,0,0,2584.729,3197.263Zm-78.707-50.953h48.112a3.028,3.028,0,0,1,3.02,3.045v41.478a3.023,3.023,0,0,1-3.02,3.022h-48.112a3.023,3.023,0,0,1-3.022-3.022v-41.478a3.028,3.028,0,0,1,3.022-3.045Zm0,2.274h48.112a.834.834,0,0,1,.545.226.772.772,0,0,1,.2.545v41.478a.722.722,0,0,1-.2.525.749.749,0,0,1-.545.226h-48.112a.757.757,0,0,1-.751-.751v-41.478a.706.706,0,0,1,.229-.545A.727.727,0,0,1,2506.022,3148.584Zm61.654,49.1a7,7,0,1,1,7,7A7.008,7.008,0,0,1,2567.676,3197.685Zm3.735,0a3.268,3.268,0,1,1,3.268,3.268A3.271,3.271,0,0,1,2571.411,3197.685Z"
          transform="translate(-2503 -3146.31)"
          fill="#fff"
          stroke="#00b4d8"
          strokeWidth="1"
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
        width="58.12"
        height="43.06"
        viewBox="0 0 58.12 43.06">
        <Path
          id="Compound_Path_2"
          data-name="Compound Path_2"
          d="M1433.819,3834.57h-2a1.192,1.192,0,0,0-1.191,1.191V3862.9a1.154,1.154,0,0,0,1.154,1.154h.9a1.154,1.154,0,0,0,1.154-1.154v-11.21h2a1.191,1.191,0,0,0,1.191-1.191v-14.733a1.191,1.191,0,0,0-1.191-1.191Zm-23.593,11.67a16,16,0,0,1,15.55,16.011v13.064h-33.433v-13.057a16,16,0,0,1,16.018-16.018h1.431c.1,0,.192,0,.286,0v0ZM1390,3877.623h0v-15.372a18.361,18.361,0,0,1,18.326-18.326h1.431c.127,0,.252,0,.376,0v0l18.229.007h.644v2.3h-.681c-.155,0-.312,0-.466.007h-9.193a18.425,18.425,0,0,1,9.417,16.011v13.064h17.692v-13.064a15.989,15.989,0,0,0-7.118-13.327v-2.7a18.421,18.421,0,0,1,9.463,16.037v15.372H1390Z"
          transform="translate(-1390 -3834.57)"
          fill="#fff"
          stroke="#00b4d8"
          strokeWidth="1"
          fill-rule="evenodd"
        />
      </Svg>
    </>
  );
};

const PlayIcon = () => {
  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" width="64" height="67" viewBox="0 0 64 67">
        <G id="Group_147" data-name="Group 147" transform="translate(-314 -399)">
          <G id="Group_158" data-name="Group 158">
            <Ellipse id="Ellipse_23" data-name="Ellipse 23" cx="32" cy="33.5" rx="32" ry="33.5" transform="translate(314 399)" fill="#ec8117" opacity="0.31" />
            <Ellipse id="Ellipse_24" data-name="Ellipse 24" cx="24" cy="24.5" rx="24" ry="24.5" transform="translate(322 408)" fill="#ec8117" />
            <Path id="Polygon_4" data-name="Polygon 4" d="M7.81,2.668a2,2,0,0,1,3.379,0l5.866,9.262A2,2,0,0,1,15.366,15H3.634a2,2,0,0,1-1.69-3.07Z" transform="translate(356 423) rotate(90)" fill="#fff" />
          </G>
        </G>
      </Svg>
    </>
  )
}
export { CloudSvg, SearchIcon, CheckIcon, RiderIcon1, RiderIcon2, RiderIcon3, PlayIcon };
