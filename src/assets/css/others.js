import styled from 'styled-components';
import { device } from './breakpoints.js';


//Set the background
//It can be blue (when blue attribute is presented) or white like the one on about page
//Or it can be the image if the image attribute is presented in element
export const Bg = styled.div `
    background-color: ${props => props.theme.color};
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-width: 100%;
    @media ${device.mobileS} {
        background-size: contain;
    }
    @media ${device.tablet} {
        background-size: cover;
    }
`


export const Br = styled.div `
    @media ${device.mobileS} {
        height: 20px;
    }
    @media ${device.tablet} {
        height: 24px!important;
    }
    @media ${device.laptop} {
        height: 26px!important;
    }
    @media ${device.laptopL} {
        height: 40px!important;
    }
`

export const Iframe = styled.iframe `
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 75%;
    background-color: #EFF8FF;
`
