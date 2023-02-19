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

const SearchIcon = () => {
    return (
        <Svg id="search-normal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <Path id="Vector" d="M18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9Z" transform="translate(2 2)" fill="none" stroke="#00b4d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <Path id="Vector-2" data-name="Vector" d="M.1,1.97c.53,1.6,1.74,1.76,2.67.36C3.62,1.05,3.06,0,1.52,0A1.406,1.406,0,0,0,.1,1.97Z" transform="translate(18.83 18.72)" fill="none" stroke="#00b4d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <Path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
        </Svg>
    )
}


const ShareICon = () => {
    return (
        <>
            <Svg id="share" xmlns="http://www.w3.org/2000/svg" width="29.907" height="29.907" viewBox="0 0 29.907 29.907">
                <Path id="Vector" d="M0,0A10.754,10.754,0,0,1,4.561,7.664" transform="translate(21.134 7.689)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-2" data-name="Vector" d="M0,7.664A10.718,10.718,0,0,1,4.486,0" transform="translate(4.349 7.751)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-3" data-name="Vector" d="M0,0A10.623,10.623,0,0,0,4.822,1.146,10.562,10.562,0,0,0,9.47.087" transform="translate(10.206 26.094)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-4" data-name="Vector" d="M6.928,3.464A3.464,3.464,0,1,1,3.464,0,3.464,3.464,0,0,1,6.928,3.464Z" transform="translate(11.564 2.667)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-5" data-name="Vector" d="M6.928,3.464A3.464,3.464,0,1,1,3.464,0,3.464,3.464,0,0,1,6.928,3.464Z" transform="translate(2.555 17.894)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-6" data-name="Vector" d="M6.928,3.464A3.464,3.464,0,1,1,3.464,0,3.464,3.464,0,0,1,6.928,3.464Z" transform="translate(20.424 17.894)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-7" data-name="Vector" d="M0,0H29.907V29.907H0Z" fill="none" opacity="0" />
            </Svg>

        </>
    )
}


export { SearchIcon, ShareICon, CategoryIcon };